(ns odg.ontologies
  "Support for importing ontologies (OBO-formatted files). Primarily for Gene Ontologies but should work for Plant Ontologies and any others that follow the OBO format."
  (:require
    clojure.java.io
    [odg.db :as db]
    [cheshire.core :refer :all]
    [odg.batch :as batch]
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

; Convert to new actor / db-handler format

;; Testing stuff
; (with-open [rdr (clojure.java.io/reader "G://data//go.obo.txt")]
;   (first (obo/parse rdr)))
;
; (with-open [rdr (clojure.java.io/reader "G://data//go.obo.txt")]
;  (nth (obo/parse rdr) 1010))
; (with-open [rdr (clojure.java.io/reader "G://data//go.obo.txt")]
;     (nth (obo/parse rdr) 5002))

; XREF's
;(with-open [rdr (clojure.java.io/reader "G://data//go.obo.txt")] (println (map obo/parse-dbxref (:xref (nth (obo/parse rdr) 5002)))))
; Entry
; (with-open [rdr (clojure.java.io/reader "/localhome/msiworkspace/odg/data/GO/go.obo")] (map println (nth (obo/parse rdr) 5002)))

; TODO: Add more XREF's and DBXREF's from definition line

; OBO imports must be sent to be pre-processed by the index actor
; To ensure duplicates are not made and data can be imported properly
; Can also check to see if existing nodes are present and add to their properties (if necessary)


; Test data
; (def go-data (import-obo "GO" "G:/data/go.obo.txt"))

; (def psi (obo/parse "G://data/psi-mi.obo.txt"))
; (:def (first (filter #(= (:id %) "MI:1290") psi)))
; (obo/parse-def (:def (first (filter #(= (:id %) "MI:1290") psi))))

; (def psi-mi (import-obo "PSI-MI" "G://data/psi-mi.obo.txt"))
; (filter #(= (:id %) "MI:0814") (map first (:nodes-update-or-create psi-mi)))
; (filter (fn [x] (= "PMID:11578931" (:id (first x)))) (:nodes-update-or-create psi-mi))

; (def po (import-obo "PO" "G://data/plant_ontology.obo.txt"))

; Possibly re-write this code for performance..

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
      {
       :indices ["main" (clojure.string/upper-case type)] ; Add suggested indices here, other than "main" TODO: implement
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

  (import (:type opts) (first args)))


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
