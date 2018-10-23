(ns odg.db
  "Go-between functions to handle the database"
  (:require [odg.batch :as batch])
  (:import
    (org.neo4j.graphdb Direction
                       Node
                       NotFoundException
                       NotInTransactionException
                       PropertyContainer
                       Relationship
                       RelationshipType
                       DynamicLabel
                       Path
                       Label
                       Transaction
                       GraphDatabaseService)
    (org.neo4j.graphdb.factory GraphDatabaseFactory)
    (org.neo4j.graphdb.index Index)
    (org.apache.lucene.queryparser.classic QueryParser)
    (org.neo4j.graphdb.traversal
      TraversalDescription
      Evaluator
      Evaluation
      Evaluators)))


(def ^:dynamic *db-connected* nil)
(def ^:dynamic *db*)
(def ^:dynamic *index-manager*)

(def rels {:PARENT_OF (org.neo4j.graphdb.DynamicRelationshipType/withName "PARENT_OF")
           :BELONGS_TO (org.neo4j.graphdb.DynamicRelationshipType/withName "BELONGS_TO")
           :NEXT_TO (org.neo4j.graphdb.DynamicRelationshipType/withName "NEXT_TO")
           :LOCATED_ON (org.neo4j.graphdb.DynamicRelationshipType/withName "LOCATED_ON")
           :LANDMARK (org.neo4j.graphdb.DynamicRelationshipType/withName "LANDMARK")
           :EXPRESSED (org.neo4j.graphdb.DynamicRelationshipType/withName "EXPRESSED")
           :EXPRESSION_CORRELATION (org.neo4j.graphdb.DynamicRelationshipType/withName "EXPRESSION_CORRELATION")
           :BLAST_HIT (org.neo4j.graphdb.DynamicRelationshipType/withName "BLAST_HIT")
           :BLAST_BEST_MATCH (org.neo4j.graphdb.DynamicRelationshipType/withName "BLAST_BEST_MATCH")
           :BLAST_SINGLE_HIT (org.neo4j.graphdb.DynamicRelationshipType/withName "BLAST_SINGLE_HIT")
           :BLAST_SINGLE_HIT_RECIPROCAL (org.neo4j.graphdb.DynamicRelationshipType/withName "BLAST_SINGLE_HIT_RECIPROCAL")
           :BLAST_SINGLE_HIT_ALT_TRANSCRIPTS (org.neo4j.graphdb.DynamicRelationshipType/withName "BLAST_SINGLE_HIT_ALT_TRANSCRIPTS")
           :BLAST_SINGLE_HIT_PIECES (org.neo4j.graphdb.DynamicRelationshipType/withName "BLAST_SINGLE_HIT_PIECES")
           :BLAST_MULTIPLE_HITS (org.neo4j.graphdb.DynamicRelationshipType/withName "BLAST_MULTIPLE_HITS")
           :BLASTP_HIT (org.neo4j.graphdb.DynamicRelationshipType/withName "BLASTP_HIT")
           :BLASTP_TOP_HIT (org.neo4j.graphdb.DynamicRelationshipType/withName "BLASTP_TOP_HIT")
           :BLASTP_GOOD_HIT (org.neo4j.graphdb.DynamicRelationshipType/withName "BLASTP_GOOD_HIT")
           :BLASTP_RECIPROCAL_TOP_HIT (org.neo4j.graphdb.DynamicRelationshipType/withName "BLASTP_RECIPROCAL_TOP_HIT")
           :xref (org.neo4j.graphdb.DynamicRelationshipType/withName "XREF")
           :synonym (org.neo4j.graphdb.DynamicRelationshipType/withName "SYNONYM")
           :is_a (org.neo4j.graphdb.DynamicRelationshipType/withName "IS_A")
           :namespace (org.neo4j.graphdb.DynamicRelationshipType/withName "NAMESPACE")
           :intersection_of (org.neo4j.graphdb.DynamicRelationshipType/withName "INTERSECTION_OF")
           :relationship (org.neo4j.graphdb.DynamicRelationshipType/withName "RELATIONSHIP")
           :consider (org.neo4j.graphdb.DynamicRelationshipType/withName "CONSIDER")
           :dbxref (org.neo4j.graphdb.DynamicRelationshipType/withName "DBXREF")
           :subset (org.neo4j.graphdb.DynamicRelationshipType/withName "SUBSET")
           :alt_id (org.neo4j.graphdb.DynamicRelationshipType/withName "ALT_ID")
           :replaced_by (org.neo4j.graphdb.DynamicRelationshipType/withName "REPLACED_BY")
           :disjoint_from (org.neo4j.graphdb.DynamicRelationshipType/withName "DISJOINT_FROM")
           :SNP (org.neo4j.graphdb.DynamicRelationshipType/withName "SNP")
           :PART_OF (org.neo4j.graphdb.DynamicRelationshipType/withName "PART_OF")
           :part_of (org.neo4j.graphdb.DynamicRelationshipType/withName "PART_OF")
           :SNP_DATA (org.neo4j.graphdb.DynamicRelationshipType/withName "SNP_DATA")
           :HAS_ANALYSIS (org.neo4j.graphdb.DynamicRelationshipType/withName "HAS_ANALYSIS")
           :HAS_GOTERM (org.neo4j.graphdb.DynamicRelationshipType/withName "HAS_GOTERM")
           :HAS_POTERM (org.neo4j.graphdb.DynamicRelationshipType/withName "HAS_POTERM")
           :INVOLVED_IN (org.neo4j.graphdb.DynamicRelationshipType/withName "INVOLVED_IN")
           :HAS_VARIANT (org.neo4j.graphdb.DynamicRelationshipType/withName "HAS_VARIANT")
           :VARIANT_SITE (org.neo4j.graphdb.DynamicRelationshipType/withName "VARIANT_SITE")
           :HAS_IPRTERM (org.neo4j.graphdb.DynamicRelationshipType/withName "HAS_IPRTERM")
           :HAS_TERM (org.neo4j.graphdb.DynamicRelationshipType/withName "HAS_TERM")
           :INTERACTION (org.neo4j.graphdb.DynamicRelationshipType/withName "INTERACTION")
           :INTERACTION_TYPE (org.neo4j.graphdb.DynamicRelationshipType/withName "INTERACTION_TYPE")
           :HAS_PROTEIN (org.neo4j.graphdb.DynamicRelationshipType/withName "HAS_PROTEIN")
           :HMM_MATCH (org.neo4j.graphdb.DynamicRelationshipType/withName "HMM_MATCH")})


(def BOTH org.neo4j.graphdb.Direction/BOTH)
(def INCOMING org.neo4j.graphdb.Direction/INCOMING)
(def OUTGOING org.neo4j.graphdb.Direction/OUTGOING)

(def dynamic-rel
  (memoize
    (fn
      [rel_type]
      (org.neo4j.graphdb.DynamicRelationshipType/withName (clojure.string/upper-case rel_type)))))

(defn connect
  [^String db-location ^String memory]
  (let [graph-db-factory (new org.neo4j.graphdb.factory.GraphDatabaseFactory)]

    (when
      (or
        (nil? *db-connected*)
        (= *db-connected* "no"))

      (alter-var-root
        #'*db-connected*
        (fn [_] "yes"))

      (alter-var-root
        #'*db*
        (fn [_]
          (-> (.newEmbeddedDatabaseBuilder graph-db-factory (java.io.File. db-location))
            (.setConfig {"use_memory_mapped_buffers" "true"
                         "mapped_memory_total_size" memory
                         "dump_configuration"  "true"
                         "cache_type"   "soft"
                         "dense_node_threshold" "1000"
                         "allow_store_upgrade" "true"})

            (.newGraphDatabase))))

      (alter-var-root
        #'*index-manager*
        (fn [_]
          (.index *db*)))

      (.addShutdownHook (Runtime/getRuntime) (Thread.
                                               (fn []
                                                 (locking *db*
                                                   (.shutdown *db*))
                                                 (println "Shutting down...")))))))

(defmacro with-tx [db & body]
  `(let [tx# ^org.neo4j.kernel.impl.coreapi.TopLevelTransaction (.beginTx ~db)]
     ;(println tx#)
     (try (do
            (let [return# (do ~@body)]
              (.success tx#)
              ;(println "Returning")
              ;(println return#)
              return#))
       (catch Exception e# (.failure tx#)
         (println (str "Caught Exception:" (.getMessage e#)))
         (println (str "Additional Data:" (.toString e#)))
         (.printStackTrace e#))
       (finally (.close tx#)))))


(defmacro cypher [db query parameters & body]
  `(with-tx ~db
     ; Leaving here, useful for debugging queries!
     ;(println ~db)
     ;(println ~query)
     ;(println ~parameters)
     (let [~'results (.execute ~db ~query ~parameters)
;           ~'query query ; (.prettify ~execution-engine ~query)
           ~'parameters ~parameters]
         (let [return# (doall (do ~@body))]
           ; (println return#)
           (.close ~'results)
           return#))))

(defmacro query
  ([query body]
   `(cypher *db* ~query {}
            ~@body)) ; Just execute
  ;  ([query parameters] ; Probably not used anymore...
  ;    `(cypher *db* *execution-engine* ~query ~parameters
  ;             (into [] ~'results))) ; Just returns the results
  ([query parameters & body]
   `(cypher *db* ~query ~parameters
            ~@body)))

(defn calculate-landmark
  [landmark pos]
  (str (clojure.string/lower-case landmark) ":" (* (int (/ pos 100000)) 100000)))

(defn create-relationship
  [start end rel-type]
  (with-tx *db*
    (.createRelationshipTo start end rel-type)))

(defn get-node-by-id
  [id]
  (.getNodeById *db* id))

(defn- -convert-name [& args]
  (clojure.string/lower-case (clojure.string/replace (clojure.string/join " " args) #"\s|\." "_")))

(def get-node-index
  (memoize
    (fn
      ([indexname]
       (.forNodes *index-manager* indexname))
      ([species version]
       (.forNodes *index-manager* (-convert-name species version))))))

(defn create-index
  "Create a label / property index"
  [label property]
  (with-tx *db*
    (let [schema (.schema *db*)]
      (doto schema
        (.indexFor label)
        (.on property)
        (.create)))))

; TODO: Add a way to create indexes for all species / version combos!
(defn create-indices
  "Create the default set of indexes"
  []
  (create-index (:GENE batch/labels) "id")
  (create-index (:MRNA batch/labels) "id")
  (create-index (:LANDMARK batch/labels) "id")
  (create-index (:LANDMARK_HASH batch/labels) "id")
  (create-index (batch/dynamic-label "GO") "id")) ; GO should always be used, PO should be determined from config file (later)



; Traversers go below here


(defn hasLabel
  [^Label label]
  (reify Evaluator
    (^Evaluation evaluate [_ ^Path path]
      (if (.hasLabel (.endNode path) label)
        Evaluation/INCLUDE_AND_PRUNE
        Evaluation/EXCLUDE_AND_CONTINUE))))

; No longer works, not yet used
;(def located-on
;  (-> (.traversalDescription *db*)
;    (.depthFirst)
;    (.relationships (:LOCATED_ON rels) OUTGOING)
;    (.relationships (:LOCATED_ON rels) OUTGOING)
;    (.evaluator (Evaluators/atDepth 2))))
