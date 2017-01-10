(ns odg.query
  (:require
    [clojure.java.io :as io]
    [clojure.tools.cli]
    [cheshire.core :refer :all]
    [incanter.core :as i]
    [incanter.io :as iio]
    [odg.batch :as batch]
    [taoensso.timbre :as timbre]
    [odg.db :as db]
    [odg.util :as util]
    [ring.util.codec :as ruc]
    )
  (:import (org.neo4j.index.lucene QueryContext)))

; GO Terms for an entire species
; FAST!!!
; MATCH (x:`1024`)-[:HAS_ANALYSIS]->(analysis)-[:HAS_GOTERM]->(go)
; RETURN go.name, go.id, COUNT(DISTINCT(x)) AS cnt ORDER BY cnt DESC

(timbre/refer-timbre)

; Query fn's
(defn get-species
  []
  (db/query 
    "MATCH (n:gene) WHERE EXISTS(n.species) RETURN DISTINCT n.species AS id, n.version AS version ORDER BY id, version"
    (into [] (map 
               (fn [x] (str (get x "id") " " (get x "version")))
               results))))

(defnp get-ipr-terms
  [node-id]
  (db/query
    "MATCH (x)-[*0..1]->()-[:HAS_ANALYSIS]-()-[:HAS_IPRTERM]-(i)
                    WHERE id(x) = {id}
                    RETURN DISTINCT(i.definition) AS def"
    {"id" node-id}
    
    (doall
      (map
        (fn [x]
          (get x "def"))
        results))))
    

(defnp get-node
  [id]
  (let [iprterms (get-ipr-terms id)]
    (db/with-tx db/*db*
      (let [n (db/get-node-by-id id)]
        {"id" (.getProperty n "id")
         "properties" (.getAllProperties n)
         "node" id
         "note" (.getProperty n "note" nil)
         "name" (.getProperty n "name" nil)
         "type" (.getProperty n "type" nil)
         "start" (.getProperty n "start" nil)
         "end" (.getProperty n "end" nil)
         "labels" (map (fn [y] (.name y)) (.getLabels n))
         "iprterms" iprterms
         "located_on" (.getProperty n "landmark" nil)
         "relationships" (into [] 
                             (take 500
                                       (for [r (.getRelationships n)]
                                         {:start (.getStartNode r)
                                          :start_id (.getProperty (.getStartNode r) "id")
                                          :start_node (.getAllProperties (.getStartNode r))
                                          :end (.getEndNode r)
                                          :end_id (.getProperty (.getEndNode r) "id")
                                          :end_node (.getAllProperties (.getEndNode r))
                                          :other (.getOtherNode r n)
                                          :other_id (.getProperty (.getOtherNode r n) "id")
                                          :other_node (.getAllProperties (.getOtherNode r n))
                                          :type (.name (.getType r))
                                          })))
       }))))

(defnp autocomplete
  [index-name text]
  
  (db/with-tx db/*db*
    
    (let [node-index (db/get-node-index index-name)
          query-text (str "id:*" (batch/dbquote text) "*")
          query-context (.sort 
                          (QueryContext. query-text)
                          "id"
                          (into-array java.lang.String []))]
      
      (into []
            (for [hit (take 10  (.query node-index query-context))]
              {"id" (.getProperty hit "id")
               "node" (.getId hit)
               "note" (.getProperty hit "note" nil)
               "name" (.getProperty hit "name" nil)
               "type" (.getProperty hit "type" nil)
               "start" (.getProperty hit "start" nil)
               "end" (.getProperty hit "end" nil)
               "located_on" (.getProperty hit "landmark" nil)
               })))))

(defnp get-biological-process
  [index gene]
  (db/query
    "START x=node:medicago_truncatula_4_0(id = {q})
     MATCH (x)-[:PARENT_OF*0..1]-(:INTERPROSCAN_ANALYZED)-[:HAS_ANALYSIS]-()-[:HAS_GOTERM]-(go:biological_process)
     RETURN DISTINCT(go.name) AS bp"
    {"q" gene}
    (into []
          (doall
            (map
              (fn [x]
                (get x "bp"))
              results)))))

(def get-node-index (memoize db/get-node-index))

(defnp find-by-id
  [index-name text]
  
  (db/with-tx db/*db*
    
    (let [node-index ^org.neo4j.kernel.impl.coreapi.LegacyIndexProxy (get-node-index index-name)
          query-text (str "id:*" (batch/dbquote text) "*")
          query-context (.sort 
                          (QueryContext. query-text)
                          "id"
                          (into-array java.lang.String []))]
      
      (if-let [hit (first (.query node-index query-context))]
        hit
        (warn "query/find-by-id " text " not found in " index-name)))))

(defnp not-used [index-name text]    
  (db/query 
    (str
      "START x=node:`" index-name "`({q}) 
       OPTIONAL MATCH (x)-[:LOCATED_ON*2]->(y)
       RETURN x, x.id AS id, x.note AS note, x.name AS name, x.type AS type, x.start AS start, x.end AS end, y.id AS located_on ORDER BY id LIMIT 50 ")
      {"q" (str "id:" "*" (batch/dbquote text) "*")}
      (into [] (map (fn [x]
                      {"id" (get x "id")
                       "node" (.getId (get x "x"))
                       "note" (get x "note")
                       "name" (get x "name")
                       "type" (get x "type")
                       "start" (get x "start")
                       "end" (get x "end")
                       "located_on" (get x "located_on")
                       }
                      ) results))))

(defnp search
  [index-name text]
  (db/query 
    (str
      "START x=node:`" index-name "`({q}) 
       RETURN x, x.id AS id, x.note AS note, x.gene AS gene, x.species AS species, x.version AS version LIMIT 100")
      {"q" (str "id:" (batch/dbquote text) "*")}
      (into [] (map (fn [x]
                      {"id" (get x "id")
                       "node" (.getId (get x "x"))
                       "labels" (map (fn [y] (.name y)) (.getLabels (get x "x")))
                       "note" (get x "note")
                       "gene" (get x "gene")
                       "species" (get x "species")
                       "version" (get x "version")
                       })
                       results))))

(defn third
  [x]
  (nth x 2))

(defn fourth
  [x]
  (nth x 3))

(defnp describe-relationships
  [node-id level]
  (let [query 
        (case level
          0 "MATCH (x)-[r1]-(x)
             WHERE id(x) = {id}
             RETURN TYPE(r1), labels(x) AS l1, COUNT(*) as cnt ORDER BY cnt DESC"
          1 "MATCH (x)-[r1]-(a)
             WHERE id(x) = {id}
             RETURN TYPE(r1) AS r1, 
                    labels(a) AS l1, 
                    COUNT(*) AS cnt 
                  ORDER BY cnt DESC, r1"
          2 "MATCH (x)-[r1]-(a)-[r2]-(b)
             WHERE id(x) = {id}
             RETURN TYPE(r1) AS r1, 
                    labels(a) AS l1, 
                    TYPE(r2) AS r2, 
                    labels(b) AS l2, 
                    COUNT(*) AS cnt 
                  ORDER BY cnt DESC, r1"
          3 "MATCH (x)-[r1]-(a)-[r2]-(b)-[r3]-(c)
             WHERE id(x) = {id}
             RETURN TYPE(r1) AS r1, 
                    labels(a) AS l1, 
                    TYPE(r2) AS r2, 
                    labels(b) AS l2, 
                    TYPE(r3) AS r3, 
                    labels(c) AS l3, 
                    COUNT(*) AS cnt 
                  ORDER BY cnt DESC, r1")]
    (let [query-results
          (db/query
            query
            {"id" (Integer/parseInt node-id)}
            (doall
              (map 
                (fn [x]
                  {:cnt (get x "cnt")
                   :r1 (get x "r1")
                   :r2 (get x "r2")
                   :r3 (get x "r3")
                   :l1 (set (get x "l1"))
                   :l2 (set (get x "l2"))
                   :l3 (set (get x "l3"))})
                results)))
          
          all-l1 (map :l1 query-results)
          all-l2 (map :l2 query-results)
          all-l3 (map :l3 query-results)
          
          ; Removing common doesn't work typically, so calc frequencies and assign more unique ones a distinctive colors
          ; Revisit later
          
          common-l1 (apply clojure.set/intersection all-l1)
          common-l2 (apply clojure.set/intersection all-l2)
          common-l3 (apply clojure.set/intersection all-l3)
          ]

      (doall
        (map
          (fn [x]
            [(:cnt x)
             (:r1 x)
             (remove common-l1 (:l1 x))
             (:r2 x)
             (remove common-l2 (:l2 x))
             (:r3 x)
             (remove common-l3 (:l3 x))
             ])
          query-results)))))

(defnp get-snp-effect
  [idx chr bp] ; idx not used until next database generation...
(db/query 
    (str "START x=node:main(id={marker})
            WHERE x:VARIANT
            RETURN x as node")
    {"marker" (str chr ":" bp)}
    (if (.hasNext (.iterator results))
      (doall (map (fn [y]
                    (db/with-tx db/*db*
                      (let [node (get y "node")]
                        {:quality (.getProperty node "quality" nil)
                         :effect (.getProperty node "effect" nil)
                         :effect-impact (.getProperty node "effect-impact" nil)
                         :functional-class (.getProperty node "functional-class" nil)
                         :amino-acid-change (.getProperty node "amino-acid-change" nil)
                         :node node}))) results))
      nil)))

(defnp in-element?
  [idx chr bp]
  (db/query 
    (str "START x=node:" idx "(id={landmark}) 
                    MATCH (x)-[:NEXT_TO*0..1]-()<-[r:LOCATED_ON]-(y) 
                    WHERE
                      ((r.start >= {bp} AND r.end <= {bp}) OR (r.end >= {bp} AND r.start <= {bp}))
                    AND
                      NOT y:VARIANT
                    RETURN 
                      y as node, 
                      y.id AS node_id, 
                      y.type as `type`")
    {"landmark" (db/calculate-landmark chr bp) "bp" bp}
    (if (.hasNext (.iterator results))
      (doall (map (fn [y] {:type (get y "type") 
                           :id (get y "node_id")
                           :node (get y "node")}) results))
      '({:type "Intergenic"
         :id ""
         :node nil
         })
      )))

(defnp in-exon?
  [idx chr bp]
  (db/query 
    (str "START x=node:" idx "(id={ landmark }) 
                    MATCH (x)-[:NEXT_TO*0..1]-()<-[r:LOCATED_ON]-(g:gene)
                    WHERE 
                      r.end >= { bp } AND r.start <= { bp }
               WITH g
                    MATCH (g)-[:PARENT_OF]->(:mRNA)-[:PARENT_OF]->(y:exon)
                    WHERE
                      y.end >= { bp } AND y.start <= { bp }
                    RETURN 
                    y as node, y.id as id")
    {"landmark" (db/calculate-landmark chr bp) "bp" bp}
    (if (.hasNext (.iterator results))
      "Exon"
      "Intron")))

; Not sure how to do this one yet...
(defnp in-domain?
  [idx chr bp]
  (db/query 
    (str "START x=node:" idx "(id={ landmark }) 
                    MATCH (x)-[:NEXT_TO*0..1]-()-[r:LOCATED_ON]-(:gene)-[:PARENT_OF]->(:mRNA)-[:PARENT_OF]->(y:exon)
                    WHERE 
                      r.end >= { bp } AND r.start <= { bp }
                    AND
                      y.end >= { bp } AND y.start <= { bp }
                    RETURN 
                    y as node, y.id as id")
    {"landmark" (db/calculate-landmark chr bp) "bp" bp}
    (if (.hasNext (.iterator results))
      "Exon"
      "Intron")))

(defnp get-expression-conditions
  [species version]
  (db/query
    (str 
      "MATCH (x:ExpressionCondition)<-[:EXPRESSED]-(:`" species " " version  "`)
       RETURN DISTINCT(x) as x, x.id AS id")
    {}
    (if (.hasNext (.iterator results))
      (doall
        (map #(get % "id") results)))))

(defnp get-expression
  [node]
  (let [id (cond 
             (= java.lang.Long (class node)) node
             :else (.getId node))]
    (db/query 
      (str "MATCH (x)-[:PARENT_OF*0..1]-()-[r:EXPRESSED]-(expcond)
            WHERE id(x) = {id} 
            RETURN 
               x, r.type AS type, r.FPKM as FPKM, expcond, expcond.id AS name")
      {"id" id}
      (if (.hasNext (.iterator results))
        (doall (map (fn [y] 
                      {:name (get y "name")
                       :FPKM (get y "FPKM")
                       :node (get y "expcond")
                       :type (get y "type")
                       })
                    results))
        []))))

(defnp get-expression-correlations
  "Given a set of nodes or node IDs, find correlations between those nodes and return."
  [nodes]
  
  ; (println (clojure.string/join ", " nodes))
  
  (let [node-ids (if 
                   (= java.lang.Long (class (first nodes))) nodes
                   (map #(.getId %) nodes))]
    (db/query
      ; WHERE ID(x) IN {ids} AND ID(y) IN {ids}
      (str "START x=node({ids}), y=node({ids})
            MATCH (x)-[r:EXPRESSION_CORRELATION]-(y)
            RETURN DISTINCT(r), x,r.pearson_correlation,y")
      {"ids" node-ids}
      (if (.hasNext (.iterator results))
        (doall
          (map (fn [y]
                 [(get y "x")
                  (get y "y")
                  (get y "r.pearson_correlation")
                  ])
               results))))))

(defnp get-goterms
  [node]
  (let [id (cond 
             (= java.lang.Long (class node)) node
             :else (.getId node))]
    (db/query 
      (str "MATCH (x)-[:PARENT_OF|:HAS_PROTEIN*0..1]-()-[:HAS_ANALYSIS]-()-[:HAS_GOTERM]-(go:GO)
            WHERE id(x) = {id} 
            RETURN 
            DISTINCT(go) as go, go.name AS name, go.id as id, go.def as def")
      {"id" id}
      (if (.hasNext (.iterator results))
        (doall (map (fn [y] 
                      {:name (get y "name")
                       :def (get y "def")
                       :node (get y "go")
                       :id (get y "id")
                       :type "goterm"
                       })
                    results))
        []))))

(defnp get-goterms-one-level-higher
  [node]
  (let [id (cond 
             (= java.lang.Long (class node)) node
             :else (.getId node))]
    (db/query 
      (str "MATCH (x)-[:PARENT_OF*0..1]-()-[:HAS_ANALYSIS]-()-[:HAS_GOTERM]-()<-[:PART_OF]-(go)
            WHERE id(x) = {id}
            RETURN 
            DISTINCT(go) as go, go.name AS name, go.id as id, go.def as def")
      {"id" id}
      (if (.hasNext (.iterator results))
        (doall (map (fn [y] 
                      {:name (get y "name")
                       :def (get y "def")
                       :node (get y "go")
                       :id (get y "id")
                       :type "goterm"
                       })
                    results))
        []))))


(defnp get-blastp-hits
  [node]
  (let [id (cond 
             (= java.lang.Long (class node)) node
             :else (.getId node))]
    (db/query (str "
  MATCH (x)-[:HAS_PROTEIN|PARENT_OF*0..1]->()-[r:BLASTP_TOP_HIT|:BLASTP_GOOD_HIT|:BLASTP_HIT]-()<-[:HAS_PROTEIN|PARENT_OF*0..1]-(hit)
  WHERE  id(x) = {id}
         AND x <> hit
         AND ( x.species <> hit.species OR (x.species = hit.species AND x.version = hit.version)) 
RETURN 
  DISTINCT(hit) as hit, 
           hit.id AS id,
           ID(hit) AS hitid,
           ID(r) AS rid,
           r.`pct-identity` AS pctid,
           r.`query-alignment-percent` AS query_alignment_percent,
           r.`subject-alignment-percent` AS subject_alignment_percent,
           r.evalue AS evalue,
           r.`subject-length` AS subject_length,
           r.`query-length` AS query_length,
           r.`alignment-length` AS alignment_length,
           r.bsr,
           r.bitscore,
           hit.species AS species,
           hit.version AS version
 ORDER BY r.bsr DESC")
      {"id" id}
      
      (if (.hasNext (.iterator results))
        (doall
          (map (fn [y] 
                 {:id (get y "id")
                  :hit (get y "hit")
                  :key (str (get y "hitid") "." (get y "rid"))
                  :type "gene"
                  :pct_identity (get y "pctid")
                  :query_alignment_percent (get y "query_alignment_percent")
                  :subject_alignment_percent (get y "subject_alignment_percent")
                  :evalue (get y "evalue")
                  :subject_length (get y "subject_length")
                  :query_length (get y "query_length")
                  :alignment_length (get y "alignment_length")
                  :bsr (get y "r.bsr")
                  :bitscore (get y "r.bitscore")
                  :species (get y "species")
                  :version (get y "version")
                       
                  })
               results))
        []))))

(defnp get-poterms
  [node]
  (db/query 
    (str "MATCH (x)-[:PARENT_OF*0..1]->(:mRNA)-[:BLASTP_TOP_HIT]-(:`ARABIDOPSIS THALIANA`)<-[:PARENT_OF]-(:gene)-[:HAS_POTERM]-(po)
          WHERE id(x) = {id} 
          RETURN
          DISTINCT(po) as po, po.name AS name, po.id as id, po.def as def")
    {"id" (.getId node)}
    (if (.hasNext (.iterator results))
      (doall (map (fn [y] 
                    {:name (get y "name")
                     :def (get y "def")
                     :node (get y "po")
                     :id (get y "id")
                     })
                     results))
      [])))

(defnp get-top-blastp-hits
  [node]
  (db/query 
    (str "MATCH (x)-[:PARENT_OF*0..1]->(:mRNA)-[r:BLASTP_TOP_HIT]-(:mRNA)<-[:PARENT_OF]-(g:gene)
          WHERE id(x) = {id}
          RETURN 
          DISTINCT(g) AS g, g.id, g.species, g.version, r.bitscore ORDER BY r.bitscore")
    {"id" (.getId node)}
    (if (.hasNext (.iterator results))
      (doall (map (fn [y] 
                    {:g (get y "g")
                     :id (get y "g.id")
                     :species (get y "g.species")
                     :version (get y "g.version")
                     :bitscore (get y "r.bitscore")
                     })
                     results))
      [])))

(defnp get-annotation-note
  [node]
  (db/query 
    (str "MATCH (x)-[:PARENT_OF*0..1]-(y)
          WHERE id(x) = {id} AND NOT(y.note IS NULL)
          RETURN DISTINCT( y.note ) AS note")
    {"id" (.getId node)}
    (if (.hasNext (.iterator results))
      (into 
        [] 
        (map 
          (fn [y]
            (get y "note"))
          results))
      [])))

(defnp find-nearest
  [idx chr bp]
  (db/query 
    (str 
      "START x=node:" idx "(id={landmark})
       MATCH (x)-[:NEXT_TO*0..1]-()<-[r:LOCATED_ON]-(y) 
       WHERE NOT y:VARIANT AND NOT (r.start IS NULL)
       RETURN 
         y as node, 
         MIN(ABS(r.start - { bp })) AS fsdist,
         r.start - { bp } AS start_dist,
         r.end - { bp } AS end_dist,
         y.id AS node_id, 
         y.type as `type`
       ORDER BY fsdist 
       LIMIT 2") ; This has been removed:          MIN(ABS(r.start - { bp })) AS fedist,
    {"landmark" (db/calculate-landmark chr bp) "bp" bp}
    (if (.hasNext (.iterator results))
      (doall (map (fn [y] {:type (get y "type") 
                           :id (get y "node_id")
                           :start-distance (get y "start_dist")
                           :end-distance (get y "end_dist")
                           :abs-distance (apply min (map (fn [a] (Math/abs a)) [(get y "end_dist") (get y "start_dist")]))  
                           :node (get y "node")}) results))
      '({:type "Error, most likely..."
         :id "Error probably"
         :distance "Infinity, probably..."
         :node nil
         }))))

(defnp find-all-in-range
  [idx chr bp bprange]
  (let [lowbp (- bp bprange)
        highbp (+ bp bprange)]
    (db/query 
      (str 
        "START x=node:" idx "(id={landmark})
       MATCH (x)-[:NEXT_TO*0..3]-()<-[r:LOCATED_ON]-(y) 
       WHERE NOT (r.start IS NULL)
             AND ( (r.start > { lowbp } AND r.start < { highbp }) OR (r.end < { highbp } AND r.end > { lowbp } ) )
       RETURN 
         y as node, 
         y.id as node_id,
         y.type as `type`
       ORDER BY node_id")
      {"landmark" (db/calculate-landmark chr bp) "bp" bp "highbp" highbp "lowbp" lowbp}
      
      (if (.hasNext (.iterator results))
        (doall (map (fn [y] {:type (get y "type") 
                             :id (get y "node_id")
                             :node (get y "node")}) results))
        '({:type "Error, most likely..."
           :id "Error probably"
           :distance "Infinity, probably..."
           :node nil
           })))))

; get EC
(defnp get-ECs
  [node]
  (db/query 
    (str "MATCH (x)-[:PARENT_OF*0..1]->(:mRNA)-[:BLASTP_TOP_HIT|:BLASTP_GOOD_HIT]-(:mRNA)-[:PART_OF]-(rxn)-[:BELONGS_TO]-(ec)
          WHERE id(x) = {id}
          RETURN DISTINCT(ec.id) as ec, ec.definition AS definition")
    {"id" (.getId node)}
    (if (.hasNext (.iterator results))
      (doall (map (fn [y] 
                    {:ec (get y "ec")
                     :def (get y "definition")})
                  results))
      [])))

; get pathways
(defnp get-pathways
  [node]
  (db/query 
    (str "MATCH (x)-[:PARENT_OF*0..1]->(:mRNA)-[:BLASTP_TOP_HIT|:BLASTP_GOOD_HIT]-(:mRNA)-[:PART_OF]-(rxn)-[:INVOLVED_IN]-(pwy)
          WHERE id(x) = {id}
          RETURN DISTINCT(pwy.definition) as pathway")
    {"id" (.getId node)}
    (if (.hasNext (.iterator results))
      (doall (map (fn [y] 
                    {:pwy (get y "pathway")})
                  results))
      [])))

; Count total # of genes having a GOTERM
; START x=node:main(id = "GO:0004866") 
; MATCH (x)-[:HAS_GOTERM]-(y:`MEDICAGO TRUNCATULA 4.0`)<-[:PARENT_OF]-(z:GENE)
; RETURN COUNT(DISTINCT(z))

(defnp remove-tabs
  [x]
  (clojure.string/replace x #"\t" ""))

(defnp determine-peak
  [data locus site]
  (count (:rows (i/$where {:Locus locus :Site {:gt (- site 10000) :lt (+ site 10000)}} data))))

(defnp get-top-blastp-hit-by-bitscore
  [hits]
  (if (empty? hits)
    ""
    (clojure.string/join 
      ", "
      (map :id
           (val
             (first
               (sort-by key >
                        (group-by :bitscore
                                  hits))))))))

(defn query-tassel
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  ; Peak detection
  ; TODO: Assign peaks to Group Numbers
  ; TODO: Better peak detection algorithm
  ; Some thoughts on assigning to groups:
  ; Set up a map with group names (numerical, 1 2 3 4 .. n, etc..)
  ; Then each val is a hash-set with SNPs in it, if the first snp in the peak is in another set, add it
  ; Otherwise, create a new group and name it n+1
  (profile :info :query
  (let [species (:species options) 
        version (:version options)
        expression-conditions (get-expression-conditions species version)
        initial (iio/read-dataset (first args) :delim \tab :header true)
        snps (i/add-derived-column
               :peak
               [:Locus :Site]
               (partial determine-peak initial)
               initial)]
    
    (let [idx (batch/convert-name species version)
          output (:output-file options)]

      (let [
            sorted-snps (i/$order :p :asc snps)
            snp-count (count (:rows sorted-snps))
            
            ; These are percentages (10% 25% 50%, and 100% is all)
      top10 (i/to-vect (i/$ [:Locus :Site] (i/->Dataset (:column-names sorted-snps) (take (int (* 0.1 snp-count)) (:rows sorted-snps)))))
            top25 (i/to-vect (i/$ [:Locus :Site] (i/->Dataset (:column-names sorted-snps) (take (int (* 0.25 snp-count)) (:rows sorted-snps)))))
            top50 (i/to-vect (i/$ [:Locus :Site] (i/->Dataset (:column-names sorted-snps) (take (int (* 0.50 snp-count)) (:rows sorted-snps)))))
            top100 (i/to-vect (i/$ [:Locus :Site] sorted-snps))
            
            get-genes (fn [snps]
                        (group-by 
                          :id
                          (remove 
                            #(clojure.string/blank? (:id %)) 
                            (flatten 
                              (map 
                                (fn [[x y]] 
                                  (let [genes (in-element? idx (str "chr" x) y)]
                                    (if (not (clojure.string/blank? (:id (first genes))))
                                      genes
                                      (filter
                                        (fn [x]
                                          (<= (:abs-distance x) 1000))
                                        (find-nearest idx (str "chr" x) y))))) 
                                snps)))))
            
            top10-genes (get-genes top10)
            top25-genes (get-genes top25)
            top50-genes (get-genes top50)
            top100-genes (get-genes top100)
            ]
        
        (doseq [[name correlations gene-list] 
                [["top10" (delay (get-expression-correlations (map :node (flatten (vals top10-genes))))) top10-genes] 
                 ["top25" (delay (get-expression-correlations (map :node (flatten (vals top25-genes))))) top25-genes] 
                 ["top50" (delay (get-expression-correlations (map :node (flatten (vals top50-genes))))) top50-genes] 
                 ["all" (delay (get-expression-correlations (map :node (flatten (vals top100-genes))))) top100-genes]]]
          (db/with-tx db/*db*
            (with-open [wrtr (clojure.java.io/writer (str output "_" name "_expression_correlation.gdf"))
                        csv-wrtr (clojure.java.io/writer (str output "_" name "_expression_correlation.csv"))]
              (let [genes (distinct (map first @correlations))]
                (.write wrtr (str "nodedef>name VARCHAR, label VARCHAR, width DOUBLE,color VARCHAR, strokecolor VARCHAR" "\n"))
                (.write csv-wrtr (str (clojure.string/join "," ["Gene1", "Gene2", "Pearson Correlation", "Gene 1 Desc", "Gene 2 Desc"]) "\n"))
                (doseq [gene genes]
                  (let [entries (get gene-list (.getProperty gene "id"))
                        how-many (count gene-list)
                        stroke-color (cond
                                       (some (fn [x] (nil? (:abs-distance x))) entries) "'255,0,0'" ; SNP is inside at least one gene
                                 :else "'160,160,160'" ; SNP not in any genes
                                 )]
                  (.write wrtr (str 
                                 (clojure.string/join 
                                   ","
                                   [(.getId gene)
                                    (.getProperty gene "id")
                                    "40.0"
                                    (cond 
                                      (get top10-genes (.getProperty gene "id")) "'255,0,0'" ; Red
                                (get top25-genes (.getProperty gene "id")) "'0,102,204'" ; Blue
                                (get top50-genes (.getProperty gene "id")) "'32,32,32'" ; Black"
                                (get top100-genes (.getProperty gene "id")) "'160,160,160'" ; Gray
                                :else "'0,255,0'" ; Indicates an error - Green 
                                )
                                    stroke-color])
                                 "\n"))))
                (.write wrtr (str "edgedef>node1 VARCHAR, node2 VARCHAR, weight DOUBLE, label VARCHAR, color VARCHAR" "\n"))
                (doseq [[start end corr] @correlations]
                  (.write csv-wrtr 
                    (str 
                      (clojure.string/join 
                        "," 
                        [(.getProperty start "id") 
                         (.getProperty end "id")
                         corr
                         (get-annotation-note start)
                         (get-annotation-note end)
                         ]) 
                      "\n"))
                  (.write wrtr (str (clojure.string/join "," [(.getId start) 
                                                              (.getId end) 
                                                              corr 
                                                              (.toString (float corr))
                                                              (cond
                                                                (< corr 0) "'204,0,0'" ; Red
                                                          (> corr 0) "'51,255,51'" ; Green
                                                          :else "'0,0,0'" ; indicates error
                                                          )]) "\n")))))))
        (println "Expression correlation graphs generated"))

      (with-open [wrtr (clojure.java.io/writer (str output "_results.tsv"))]
        (.write wrtr (clojure.string/join 
                       "\t" 
                       (concat 
                         ["trait" "chr" "bp" "p" "Status" "Effect" "Effect Impact" "AA Change" "SNP in" "SNP annotation" "GO" "ECs" "Pathways" "At Hit" "Gm hit" "Nearby IDs" "Nearby Annotations" "Nearby GO" "Nearby ECs" "Nearby Pathways" "SNP PO" "Nearby PO"]
                         expression-conditions)))
        (.write wrtr "\n")
        (with-open [rdr (clojure.java.io/reader (first args))]
          (doseq [[trait chr bp p] (map (juxt first #(str "chr" (third %)) (comp read-string fourth) #(nth % 6)) (map #(clojure.string/split % #"\t") (rest (line-seq rdr))))]
            (let [in-exon              (in-exon? idx chr bp) ; Up here due to a bug of some sort
                  in-element-results   (in-element? idx chr bp)
                  ; Process results for SNP containing elements
                  snp-status           (clojure.string/join ", " (map :type in-element-results))
                  snp-in               (clojure.string/join ", " (map :id in-element-results))
                  in-element-nodes     (filter identity (map :node in-element-results))
                  snp-annotation       (clojure.string/join " | " (distinct (flatten (map get-annotation-note in-element-nodes))))
                  ecs                  (clojure.string/join ", " (distinct (map #(str (:ec %) " " (:def %)) (flatten (map get-ECs in-element-nodes)))))
                  pathways             (clojure.string/join ", " (distinct (map :pwy (flatten (map get-pathways in-element-nodes)))))
                  blastp-hits          (map get-top-blastp-hits in-element-nodes)
                  
                  arabidopsis-hits     (get-top-blastp-hit-by-bitscore (filter #(= (:species %) "Arabidopsis thaliana") (flatten blastp-hits)))
                  glycine-hits         (get-top-blastp-hit-by-bitscore (filter #(= (:species %) "Glycine max") (flatten blastp-hits)))
                  
                  snp-effects          (get-snp-effect idx chr bp)
                  effects              (clojure.string/join ", " (distinct (map :effect snp-effects)))
                  effects-impact       (clojure.string/join ", " (distinct (map :effect-impact snp-effects)))
                  amino-acid-changes   (clojure.string/join ", " (remove clojure.string/blank? (distinct (map :amino-acid-change snp-effects))))
                             
                  expression           (when (:node (first in-element-results))
                                         (apply merge
                                               (for [e (get-expression (:node (first in-element-results)))]
                                                 {(:name e) (:FPKM e)})))
                             
                  expression-data      (for [e expression-conditions]
                                           (get expression e 0))
                             
                  ; If in-exon is here, then always reported as an intron
                  go-terms   (clojure.string/join ", " (distinct 
                                                         (map 
                                                           :name
                                                           (flatten
                                                             (map 
                                                               get-goterms 
                                                               in-element-nodes)))))
                
                  po-terms   (clojure.string/join ", " (distinct 
                                                         (map 
                                                           :name 
                                                           (flatten
                                                             (map 
                                                               get-poterms 
                                                               in-element-nodes)))))
                  status     (cond
                               (= "gene" (first (distinct (map :type in-element-results)))) in-exon
                               (empty? in-element-nodes) "Intergenic"
                               :else "NA")

                  ; Process results for nearest genes
                  nearby                  (find-nearest idx chr bp)
                  nearby-nodes            (map :node nearby)
                  nearby-ids              (clojure.string/join " | " (map #(str (:id %) " " (:start-distance %)) nearby))
                  nearby-goterms          (map get-goterms nearby-nodes)
                  nearby-goterms-string   (clojure.string/join " | " (distinct (map :name (flatten nearby-goterms))))
                  nearby-poterms          (map get-poterms nearby-nodes)
                  nearby-poterms-string   (clojure.string/join " | " (distinct (map :name (flatten nearby-poterms))))
                  nearby-annotations      (clojure.string/join " | " (flatten (map ruc/url-decode (flatten (map get-annotation-note nearby-nodes)))))
                  nearby-ecs              (clojure.string/join ", " (distinct (map #(str (:ec %) " " (:def %)) (flatten (map get-ECs nearby-nodes)))))
                  nearby-pathways         (clojure.string/join ", " (distinct (map :pwy (flatten (map get-pathways nearby-nodes)))))
                
                  ; Get nearby genes
                  ; neighborhood            (find-all-in-range idx chr bp 25000)
                  ; neighborhood-nodes      (map :node neighborhood)
                  ; neighborhood-goterms    (filter (fn [x] (> (val x) 4)) (frequencies (flatten (map get-goterms neighborhood-nodes))))

                  ]
            
              ;(println snp-effects)
              ;(println blastp-hits)
              ;(println arabidopsis-hits)
              ;(println glycine-hits)
              ;(println "In-exon?" in-exon)
              ;(println "In-element?" in-exon)
              ;(println "Snp status:" snp-status)
              ;(println "Snp-in:" snp-in)
              ;(println "In-element-nodes:" in-element-nodes)
              ;(println "Snp-annotation:" snp-annotation)
              ;(println "Go-terms:" go-terms)
              ;(println "Po-terms:" po-terms)
              ;(println "Status:" status)
              ;(println "ECs:" ecs)
              ;(println "Pathways:" pathways)
              ;(println)
              ;(println "Nearby:" nearby)
              ;(println "Nearby-nodes:" nearby-nodes)
              ;(println "Nearby-ids:" nearby-ids)
              ;(println "Nearby-goterms:" nearby-goterms-string)
              ;(println "Nearby-poterms:" nearby-poterms-string)
              ;(println "Nearby-annotations:" nearby-annotations)
              ;(println "Nearby ECs:" nearby-ecs)
              ;(println "Nearby Pathways:" nearby-pathways)
              ;(println)
              ;(println "Neighborhood:" neighborhood)
              ;(println "Neighborhood-goterms:" neighborhood-goterms)
              ;(println)
              ;(println)

              (.write wrtr 
                (clojure.string/join "\t" 
                                     (map remove-tabs 
                                          (concat
                                            [trait chr bp p status effects effects-impact amino-acid-changes snp-in (ruc/url-decode snp-annotation) go-terms ecs pathways arabidopsis-hits glycine-hits nearby-ids nearby-annotations nearby-goterms-string nearby-ecs nearby-pathways po-terms nearby-poterms-string]
                                            expression-data))))
              (.write wrtr "\n")
              ))))))))

(defn coexpression-network
  "Given a list of gene names, with no header, generate a co-expression network"
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (profile :info :query
  (let [species (:species options) 
        version (:version options)
        output (:output-file options)
        
        idx (batch/convert-name species version)

        expression-conditions (get-expression-conditions species version)
        gene-list (i/rename-cols {0 :gene} (iio/read-dataset (first args) :delim \tab :header false))
        genes (remove nil? (map (partial find-by-id idx) (i/$ :gene gene-list)))
        ]
    
    (println "Calculating correlations")
    
    (doseq [[correlations gene-list] [[(get-expression-correlations genes) genes]]] 
      (db/with-tx db/*db*
        (with-open [wrtr (clojure.java.io/writer (str output "_expression_correlation.gdf"))
                    tsv-wrtr (clojure.java.io/writer (str output "_expression_correlation.tsv"))]
          (let [genes (distinct (map first correlations))]
            (.write wrtr (str "nodedef>name VARCHAR, label VARCHAR, width DOUBLE,color VARCHAR" "\n"))
            (.write tsv-wrtr (str (clojure.string/join "\t" ["Gene1", "Gene2", "Pearson Correlation", "Gene 1 Desc", "Gene 2 Desc"]) "\n"))
            (doseq [gene genes]
              (.write wrtr (str 
                             (clojure.string/join 
                               ","
                               [(.getId gene)
                                (.getProperty gene "id")
                                "40.0"
                                "'0,102,204'" ; Blue
                                ])
                             "\n"))))
            (.write wrtr (str "edgedef>node1 VARCHAR, node2 VARCHAR, weight DOUBLE, label VARCHAR, color VARCHAR" "\n"))
            (doseq [[start end corr] correlations]
              (.write tsv-wrtr 
                (str 
                  (clojure.string/join 
                    "\t" 
                    [(.getProperty start "id") 
                     (.getProperty end "id")
                     corr
                     (java.net.URLDecoder/decode (str (clojure.string/join ", " (get-annotation-note start))))
                     (java.net.URLDecoder/decode (str (clojure.string/join ", " (get-annotation-note end))))
                     ]) 
                  "\n"))
              (.write wrtr (str (clojure.string/join "," [(.getId start) 
                                                          (.getId end) 
                                                          corr 
                                                          (.toString (float corr))
                                                          (cond
                                                            (< corr 0) "'204,0,0'" ; Red
                                                            (> corr 0) "'51,255,51'" ; Green
                                                            :else "'0,0,0'" ; indicates error
                                                            )]) "\n")))))))
        (println "Expression correlation graphs generated")
      ))

(defn expression
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (profile :info :query
  (let [species (:species options) 
        version (:version options)
        expression-conditions (get-expression-conditions species version)]
    
    (let [idx (batch/convert-name species version)
          output (:output-file options)]
      
      (println idx)

      (with-open [wrtr (clojure.java.io/writer (str output "_expression.tsv"))]
        (.write wrtr (clojure.string/join 
                       "\t" 
                       (concat 
                         ["gene"]
                         expression-conditions)))
        (.write wrtr "\n")
        (with-open [rdr (clojure.java.io/reader (first args))]
          (doseq [gene_id (remove clojure.string/blank? (map first (map #(clojure.string/split % #"\t") (line-seq rdr))))]
            (println "Gene ID:" gene_id)
            (if-let [node (find-by-id idx gene_id)]
              (let [expression           (apply merge
                                               (for [e (get-expression node)]
                                                 {(:name e) (:FPKM e)}))
                             
                    expression-data      (for [e expression-conditions]
                                             (get expression e 0))]
            
                (.write wrtr 
                  (clojure.string/join "\t" 
                                       (map remove-tabs 
                                            (concat
                                              [gene_id]
                                              expression-data))))
                (.write wrtr "\n")
                )
              (.write wrtr (str gene_id "\n"))
              
              ))))))))

(defn gene-list
  "Computes aggregate stats for a gene list -- Format is gene_id followed by allele frequency"
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (let [species (:species options) 
        version (:version options)
        
        expression-conditions (get-expression-conditions species version)
        
        initial (iio/read-dataset (first args) :delim \tab :header true)]
    
    (let [idx (batch/convert-name species version)
          output (:output-file options)]
      (with-open [wrtr (clojure.java.io/writer (str output "_stats.tsv"))]
        (let [
              genes (i/to-vect initial)
              count (count genes)
              
              ; Low AF -- 0.0 - 0.1
              low-af-genes ["AF <= 0.1" (filter #(<= (second %) 0.10) genes)]
              
              ; Middle AF - 0.1 - 0.2
              middle-af-genes ["0.1 < AF <= 0.2" (filter #(and (> (second %) 0.1) (<= (second %) 0.2)) genes)]
              
              ; High AF - 0.2+
              high-af-genes ["AF > 0.2" (filter #(> (second %) 0.20) genes)]
              
              ; All genes
              all-genes ["Any" genes]
              ]

          (.write wrtr (clojure.string/join 
                        "\t" 
                       ["AF" "Type" "ID" "Count"]))
          
          (.write wrtr "\n")
          (doseq [[af genes-af-list] [high-af-genes middle-af-genes low-af-genes all-genes]]
            (let [
                  genes (map first genes-af-list)
                  nodes (map (partial find-by-id idx) genes)
                  go-terms (frequencies (map :name (flatten (map get-goterms nodes))))
                  go-terms-higher (frequencies (map (fn [x] (str (:id x) " " (:name x))) (flatten (map get-goterms-one-level-higher nodes))))
                  pathways (frequencies (map :pwy (flatten (map get-pathways nodes))))
                  expression (frequencies (map :name (flatten (map get-expression nodes))))
                  ECs (frequencies (map #(str (:ec %) " " (:definition %)) (flatten (map get-ECs nodes))))
                  notes (frequencies (flatten (map get-annotation-note nodes)))
                  ]
              
              (doseq [[term-type terms] [["GO" go-terms] ["GO-up" go-terms-higher] ["Pathways" pathways] ["Expression" expression] ["EC" ECs] ["AnnotationNotes" notes]]]
                (doseq [[term total] terms]
                  (.write wrtr (clojure.string/join "\t" [af term-type term total]))
                  (.write wrtr "\n"))))))))))


(defn orthologs
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (let [species (:species options) 
        version (:version options)
        
        expression-conditions (get-expression-conditions species version)
        
        initial (iio/read-dataset (first args) :delim \tab :header true)]
    
    (let [idx (batch/convert-name species version)
          output (:output-file options)]
      (with-open [wrtr (clojure.java.io/writer (str output "_orthologs.tsv"))]
        (let [genes (map first (i/to-vect initial))]

          (.write wrtr (clojure.string/join 
                        "\t" 
                       ["Mt" "Gm"]))
          
          (.write wrtr "\n")
          (doseq [gene genes]
            (let [
                  node (find-by-id idx gene)
                  blastp-hits (get-top-blastp-hits node)
                  glycine-hits (get-top-blastp-hit-by-bitscore (filter #(= (:species %) "Glycine max") (flatten blastp-hits)))
                  ]
              
              (.write wrtr (clojure.string/join "\t" [gene glycine-hits]))
              (.write wrtr "\n")
              )))))))

; This is before EC's were all properly labelled as such
; Update in the future!
(defn ECs-from-GO
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (let [species (:species options)
        version (:version options)]
    
    (let [results
          (db/query
            (str
              "MATCH (x:`" species " " version "`)-[:HAS_GOTERM]-(go)-[r:XREF|DBXREF]-(xref)
               WHERE xref.id =~ \"EC:.*\"
               RETURN DISTINCT x.id, xref.id, xref.definition")
            (into []
                  (doall
                    (map
                      (fn [x]
                        [(get x "x.id")
                        (get x "xref.id")
                        (get x "xref.definition")])
                        results))))]
      
      (println (take 5 results))

      (with-open [wrtr (clojure.java.io/writer (str species "_" version "_EC_from_GO_report.tsv"))]      
        (.write wrtr (clojure.string/join "\t" ["Gene ID", "EC", "EC Definition"]))
        (.write wrtr "\n")
        
        (doseq [result results]
          (.write 
            wrtr 
            (clojure.string/join 
              "\t"
              result))
          (.write wrtr "\n"))))))

(defn biological-processes
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (let [species (:species options) 
        version (:version options)
        
        index (batch/convert-name species version)
        
        initial (iio/read-dataset (first args) :delim \tab :header true)]

    (let [idx (batch/convert-name species version)
          output (:output-file options)]
      (with-open [wrtr (clojure.java.io/writer (str output "_biological-processes.tsv"))]
        (let [genes (map first (i/to-vect initial))]

          (.write wrtr (clojure.string/join 
                        "\t" 
                       ["Gene" "Biological_Processs"]))
          (.write wrtr "\n")

          (doseq [gene genes]
            (let [results
                  (get-biological-process index gene)]
              (.write wrtr (clojure.string/join "\t" [gene (clojure.string/join "|" results)]))
              (.write wrtr "\n")
              )))))))

(defn biological-processes-all-genes
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (let [species (:species options) 
        version (:version options)]

    (let [idx (batch/convert-name species version)
          output (:output-file options)]
      (with-open [wrtr (clojure.java.io/writer (str output "_biological-processes.tsv"))]
          (.write wrtr (clojure.string/join 
                        "\t" 
                       ["Gene" "Biological_Processs"]))
          (.write wrtr "\n")

            (let [results
                  (db/query
                      "MATCH (x:gene)-[:PARENT_OF*0..1]-(:INTERPROSCAN_ANALYZED)-[:HAS_ANALYSIS]-()-[:HAS_GOTERM]-(go:biological_process)
WHERE x:`Medicago truncatula 4.0`
RETURN DISTINCT x.id, collect(go.name) AS bp"
                      {}
                      (into []
                            (doall
                              (map
                                (fn [x]
                                  [(get x "x.id") (get x "bp")])
                                results))))]
              (doseq [result results]
                (.write wrtr (clojure.string/join "\t" [(first result) (clojure.string/join "|" (distinct (into [] (second result))))]))
                (.write wrtr "\n")
              ))))))

; GO term summary by replicon
;
;MATCH (n:Landmark)
;WITH n
;MATCH (n)<-[:LOCATED_ON]-()<-[:LOCATED_ON]-(g)-[:HAS_PROTEIN]-(p:Protein)-[:HAS_ANALYSIS]-()-[:HAS_GOTERM]-(go)
;WITH DISTINCT(g),n,p,go
;WITH COUNT(go.id) AS cnt, go, n
;ORDER BY cnt DESC
;WHERE cnt > 100
;RETURN n.species,n.version,n.id,go.name,cnt


; Annotate Gene List
; Pass in any file, with first column being gene IDs
; Must have header, and be tab delimitted
; Expression and Expression Correlations removed

; (def data (iio/read-dataset "G:\\localgwas\\Results\\top200_myc2_bat_rept4_retub_stats.tsv" :delim \tab :header true))
; (def idx "medicago_truncatula_4_0")
; (def gene-list (i/$ 1 data))
; (def gene-ids (doall (pmap (fn [x] (find-by-id idx x)) gene-list)))

(defn annotate-gene-list
  [config options args]
  (db/connect (get-in config [:global :db_path]) (:memory options))
  
  (let [species (:species options) 
        version (:version options)
        initial (iio/read-dataset (first args) :delim \tab :header true)
        idx (batch/convert-name species version)
        output (:output-file options)
        gene-list (i/$ 1 initial)
        gene-ids (doall (pmap (fn [x] (find-by-id idx x)) gene-list)) ; Pmap takes it from 7.8 seconds to 1.5 on my test dataset. wow
        ]
    
  (i/save
    (->> initial
         (i/add-column 
           "Annotations"
           (map 
             (fn [x]
               (clojure.string/join 
                 ", " 
                 (distinct
                   (get-annotation-note x))))
             gene-ids))
       
         (i/add-column
           "GO Terms"
           (pmap 
             (fn [x]
               (clojure.string/join 
                 ", " 
                 (distinct
                   (map
                     :name
                       (get-goterms
                         x)))))
             gene-ids))
       
         (i/add-column
           "ECs"
           (pmap
             (fn [x]
               (clojure.string/join 
                 ", " 
                 (distinct 
                   (map 
                     #(str (:ec %) " " (:def %)) 
                     (get-ECs x)))))
             gene-ids))
       
         (i/add-column
           "Pathways"
           (pmap
             (fn [x]
               (clojure.string/join 
                 ", " 
                 (distinct 
                   (map 
                     :pwy 
                     (get-pathways x)))))
             gene-ids)))
    
    (str output "_results.tsv")
    :delim \tab)))
    
    
    
  
  
  
  
         
    