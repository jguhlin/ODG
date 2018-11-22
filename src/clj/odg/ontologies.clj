(ns odg.ontologies
  "Support for importing ontologies (OBO-formatted files). Primarily for Gene Ontologies but should work for Plant Ontologies and any others that follow the OBO format."
  (:require
    clojure.java.io
    odg.job
    [odg.db :as db]
    [clojure.core.async :as async]
    [cheshire.core :refer :all]
    [odg.batch :as batch]
    [clojure.core.async
     :as async
     :refer [chan >! >!! <! <!! close! go-loop dropping-buffer thread]]
    [odg.util :as util]
    [taoensso.timbre :as timbre]
    [digest :as digest]
    [clojure.core.reducers :as r]
    [odg.db-handler :as dbh]
    [biotools.obo :as obo])
  (:import
    (org.apache.lucene.queryparser.classic QueryParser)
    (org.neo4j.unsafe.batchinsert BatchInserter
                                  BatchInserters
                                  BatchInserterIndexProvider
                                  BatchInserterIndex)))

(timbre/refer-timbre)

; Testing code
; (nth (obo/parse "data/misc/go.obo") 1010)
; (def go (obo/parse "data/misc/go.obo") 1010))

(defn xref-id-fn
 [id]
 (if (re-find #":" id)
   (let [[x y] (clojure.string/split id #":" 2)]
     (str (clojure.string/upper-case x) ":" y))
   id))

(defn create-odg-id
 ([obo-def]
  (str
   (:type obo-def)
   "." (:filename obo-def)
   "." (:id obo-def)))
 ([type filename id]
  (str
   type "." filename "." id)))

(defn create-obo-node
 [obo-def]
 (odg.job/->Node
    (assoc
     obo-def
     :def (:def (obo/parse-def (:def obo-def))))
    (concat
      [(batch/dynamic-label "OBOEntry")
       (batch/dynamic-label (:type obo-def))]
      (when (:namespace obo-def)
         [(batch/dynamic-label (:namespace obo-def))]) ; For Gene Ontology (GO)
      (when (:subset obo-def)
        (for [subset (:subset obo-def)]
          (batch/dynamic-label subset))))))

(defn create-xref-nodes
  [obo-def xrefs]
  (for [xref (:xref obo-def)
        :let [xref-type
              (first
                (clojure.string/split xref #":" 2))]]
    (odg.job/->Node {:id xref
                     :filename (:filename obo-def)
                     :type xref-type
                     :odg-id (create-odg-id
                              xref-type
                              (:filename obo-def
                               xref))}
                    [(batch/dynamic-label "OBOEntry")
                     (batch/dynamic-label xref-type)
                     (batch/dynamic-label "XREF")])))

(defn create-dbxref-nodes
  [obo-def dbxrefs]
  (for [dbxref dbxrefs
        :let [xref-type
              (first
                (clojure.string/split (:id dbxref) #":" 2))]]
    (odg.job/->Node {:id (:id dbxref)
                     :filename (:filename obo-def)
                     :description (:description dbxref)
                     :modifier (:modifier dbxref)
                     :type xref-type
                     :odg-id (create-odg-id
                              xref-type
                              (:filename obo-def)
                              (:id dbxref))}
                    [(batch/dynamic-label "OBOEntry")
                     (batch/dynamic-label xref-type)
                     (batch/dynamic-label "XREF")])))

(defn create-obo-nodes
 [obo-def]
 (concat
  [(create-obo-node obo-def)]
  (when (:xref obo-def)
    (create-xref-nodes obo-def (:xref obo-def)))
  (let [dbxref (:dbxref (obo/parse-def (:def obo-def)))]
   (when (> (count dbxref) 0)
     (println dbxref)
     (create-dbxref-nodes obo-def dbxref)))))

; Remaining work:
; Merge nodes (esp XREFs)
; Replace relationship labels with ODG ID's when possible
; Create relationships
; Handle async stuff back to normal

; Creating new, faster, better, parser
;(defn -parser [obo-type filename obo-defs])
; (let [node-chan (chan 5000)]))
;       rel-chan  (chan 5000)]))
;       nodes-out (chan)]))
;       rels-out  (chan)]))
;
;       ; (doseq [_ (range 100)] ? to speed it up some...
;       node-work (go-loop [])]))
;                   (when-let [obo-def (<! node-chan)]))]))
;                     (>! nodes-out)))]))
;                      (-> obo-def))))]))
;                       (assoc :type obo-type)))))]))
;                       (assoc :filename filename)))))]))
;                       (fn [x] (assoc x :odg-id (create-odg-id x)))))))]))
;                       create-obo-node))))])) ; Converts to node format here...
;                     (recur)))]))
;
;       rel-work  (go-loop [])]))
;                   (when-let [message (<! node-chan)]))]))
;                     (>! nodes-out (...))))]))
;                     (recur)))]))

(defn -parser
  [type filename]

  (let [ontology-label (batch/dynamic-label type)
        xref-label (batch/dynamic-label "XREF")
        labels (fn [x] (into [] (filter identity x)))

        already-created-ids (atom #{})

        combinef (fn combinef
                   ([] [])
                   ([x y] (concat x y)))

        combinef-merge-with (fn combinef-merge-with
                              ([] {})
                              ([x y] (merge-with concat x y)))

        xref-id-fn (fn xref-id-fn
                     [id]
                     (if (re-find #":" id)
                       (let [[x y] (clojure.string/split id #":" 2)]
                         (str (clojure.string/upper-case x) ":" y))
                       id))

        update-xref-properties (fn update-xref-properties
                                 [xref]
                                 (-> (transient (into {} (remove (comp nil? second) xref)))
                                   (assoc! :id (xref-id-fn (:id xref)))
                                   persistent!))]


    (merge
      {:indices ["main" (clojure.string/upper-case type)] ; Add suggested indices here, other than "main" TODO: implement
       :id-fields ["id"]}

      (r/fold
        combinef-merge-with
        (r/map
          (fn -parse-entry
            [ontology-entry]
            {
             :nodes-update-or-create
             (r/fold
               combinef
               [
                ; Node for THIS term
                [[(merge
                    (select-keys ontology-entry [:id :name :comment])
                    {:def (:def (obo/parse-def (:def ontology-entry)))})
                  (labels (into [ontology-label (batch/dynamic-label (:namespace ontology-entry))] (map batch/dynamic-label (:subset ontology-entry))))]]

                ; make nodes for XREF's
                (r/fold
                  combinef
                  (r/map
                    (fn xrefs
                      [xref-entry]
                      (let [xref (obo/parse-dbxref xref-entry) ; Parse XREF
                            xref-type (clojure.string/upper-case (first (clojure.string/split (:id xref) #":" 2)))] ; Get a dynamic label for the XREF
                        (when-not (@already-created-ids (:id xref))
                          (swap! already-created-ids merge (:id xref))
                          [
                           [(update-xref-properties xref)
                            (labels [xref-label (batch/dynamic-label xref-type)])]])))

                    (:xref ontology-entry)))

                ; Nodes for XREFs in the definition
                (r/fold
                  combinef
                  (r/map
                    (fn xrefs-dbxref
                      [xref]
                      (let [xref-type (clojure.string/upper-case (first (clojure.string/split (:id xref) #":" 2)))] ; Get a dynamic label for the XREF
                        (when-not (@already-created-ids (:id xref))
                          (swap! already-created-ids merge (:id xref))
                          [
                           [(update-xref-properties xref)
                            (labels [xref-label (batch/dynamic-label xref-type)])]])))
                    (:dbxref (obo/parse-def (:def ontology-entry)))))])


             ; Relationships
             :rels (r/fold
                     combinef
                     (r/filter
                       identity
                       [
                        ; Store is_a relationships
                        (when (:is_a ontology-entry)
                          (concat
                            (for [isa (:is_a ontology-entry)]
                              [(:is_a db/rels) (:id ontology-entry) isa])))

                        ; Store relationships
                        (when (:relationship ontology-entry)
                          (for [rel (:relationship ontology-entry)
                                :let [[rel-type id] (clojure.string/split rel #"\s+")]]
                            [(db/dynamic-rel rel-type) (:id ontology-entry) id]))

                        ; TODO: start storing these additional fields
                        ; Not storing alt-ids
                        ; Not storing subset
                        ; Not storing synonyms
                        ; Not storing consider
                        ; Maybe some others

                        ; Store xrefs
                        (r/fold
                          combinef
                          (r/map
                            (fn xref-entry-rel
                              [xref-entry]
                              (let [xref (obo/parse-dbxref xref-entry) ; Parse XREF
                                    xref-type (clojure.string/upper-case (first (clojure.string/split (:id xref) #":" 2)))]
                                [
                                 [(:xref db/rels) (:id ontology-entry) (xref-id-fn (:id xref))]
                                 [(db/dynamic-rel (str "HAS_" xref-type)) (:id ontology-entry) (xref-id-fn (:id xref))]]))

                            (:xref ontology-entry)))

                        ; Store xrefs from def
                        (r/fold
                          combinef
                          (r/map
                            (fn xrefs-from-def
                              [xref]
                              (let [xref-type (clojure.string/upper-case (first (clojure.string/split (:id xref) #":" 2)))]
                                [
                                 [(:xref db/rels) (:id ontology-entry) (xref-id-fn (:id xref))]
                                 [(db/dynamic-rel (str "HAS_" xref-type)) (:id ontology-entry) (xref-id-fn (:id xref))]]))

                            (:dbxref (obo/parse-def (:def ontology-entry)))))]))})



          (obo/parse filename))))))

(defn import-obo
  [type filename]

;  (let [sha (digest/sha-256 (clojure.java.io/as-file filename))]
;    (if (not (.exists (clojure.java.io/as-file (str "tmp/" sha))))
;      (generate-stream
;        (-parser type filename)
;        (clojure.java.io/writer (str "tmp/" sha))))

; Didn't work:
; Caused by: com.fasterxml.jackson.core.JsonGenerationException: Cannot JSON encode object of class: class org.neo4j.graphdb.DynamicLabel: GO
; Need a helpful fn to convert between strings and labels, just to make it easier.

  (dbh/submit-batch-job (-parser type filename)))

;      (parse-stream (clojure.java.io/reader (str "tmp/" sha))))))

(defn import-cli
  [config opts args]
  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))
  (import-obo (:type opts) (first args)))


; Converting to new db-handler / actor system
(defn associations
  "Imports associations. Requires species and version to be set"
  [species version filename]

  (p :associations-import-lock-db
     (p :associations-import-total
        (with-open [associations (clojure.java.io/reader filename)]
          (let [po-idx 1 ;(batch/get-node-index (batch/convert-name "po"))
                index 1 ;(batch/get-node-index species version)
                lines (drop 1 (line-seq associations)) ;; TODO: Ignore lines starting with ! (usually just first line)
                hueristic-queries 1 ;(memoize (fn [& xs] (batch/hueristic-queries index xs "gene" "mRNA" "transposable_element_gene" "CDS")))
                get-po 1] ;(memoize (fn [x] (batch/get-single po-idx x)))


            (doseq [[db db_id db_symbol qualifier po_id db_ref evidence with aspect db_name synonyms obj_type taxon date assigned_by annotation_extension gene_product]
                    (map (fn [x] (clojure.string/split x #"\t")) lines)]
              (when-not (clojure.string/blank? db_id)
                (let [node (hueristic-queries db_id db_name synonyms)
                      po-node (get-po po_id)]
                  (p :create-rel-wait-node
                     (when @node
                       (p :create-rel
                          {
                            node
                            po-node
                            (:HAS_POTERM db/rels)
                            {:references db_ref
                             :evidence evidence
                             :gene_product gene_product
                             :synonyms synonyms}})))))))))))


(defn associations-cli
  "Imports associations. Requires species and version to be set"
  [config opts args]

  (associations (:species opts) (:version opts) (first args)))
