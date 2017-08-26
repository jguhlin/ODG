(ns odg.batch
  "Database functions for batch mode."
  (:require
    [co.paralleluniverse.pulsar.core :as p]
    [taoensso.timbre :as timbre]
    [co.paralleluniverse.pulsar.actors :as actors])
  (:import (org.neo4j.graphdb NotFoundException
                              NotInTransactionException
                              RelationshipType
                              DynamicLabel
                              Label)
           (org.apache.lucene.queryparser.classic QueryParser)
           (org.neo4j.unsafe.batchinsert 
             BatchInserter
             BatchInserters
             BatchInserterIndexProvider
             BatchInserterIndex)
           (org.neo4j.index.lucene.unsafe.batchinsert 
             LuceneBatchInserterIndexProvider) 
           ))

(set! *warn-on-reflection* true)

(timbre/refer-timbre)

(defn -convert-map
  [m]
  (apply merge
         (for [[k v] m
               :when (and (not= "." v) (not (nil? v)))]
           {(name k) v})))

(defn- -convert-props
  "Duplicate of -convert-map, need to coalesce"
  [node-properties]
  (apply merge
         (for [[k v] node-properties
               :when (and (not= "." v) (not (nil? v)))]
           {(name k) v})))

(set! *warn-on-reflection* true)

(defn split-id [id]
  (when id
    (map 
      clojure.string/trim
      (concat
        [id]
        (clojure.string/split id #"\|")
        (clojure.string/split id #"[\|:]")
        (clojure.string/split id #"[\s\|:]")
        (clojure.string/split id #"[\s\|:\.]")))))
  
(defn possible-ids [current-id]
  (try
    (reverse 
      (sort-by 
        count
        (filter 
          (fn [^String x] (>= (.length x) 4)) ; Length of 4 for unique ID's is probably a safe bet.
          (for [id (distinct 
                     (concat 
                       [current-id] ; Also test the ID we are given
                       (split-id current-id) 
                       (map clojure.string/lower-case (split-id current-id))
                       (map clojure.string/upper-case (split-id current-id))))]
            id))))
    (catch Exception e
      (error e)
      (error "possible-ids run with" current-id)
      (println current-id)
      (println e)
      (.printStackTrace e))))

(def dynamic-label
  (memoize
    (fn [x]
      (when-not (or (nil? x) (clojure.string/blank? x)) 
      (org.neo4j.graphdb.DynamicLabel/label x)))))

(def labels {:GENE (org.neo4j.graphdb.DynamicLabel/label "Gene")
             :MRNA (org.neo4j.graphdb.DynamicLabel/label "mRNA")
             :PROTEIN (org.neo4j.graphdb.DynamicLabel/label "Protein")
             :LANDMARK (org.neo4j.graphdb.DynamicLabel/label "Landmark")
             :LANDMARK_HASH (org.neo4j.graphdb.DynamicLabel/label "LandmarkHash")
             :SPECIES_ROOT (org.neo4j.graphdb.DynamicLabel/label "SpeciesRoot")
             :ANNOTATION (org.neo4j.graphdb.DynamicLabel/label "Annotation")
             :BLAST_RESULT (org.neo4j.graphdb.DynamicLabel/label "BlastResult")
             :INTERPROSCAN (org.neo4j.graphdb.DynamicLabel/label "InteroProScan")})

(defn convert-to-clj-map
  [props]
  (apply merge
         (for [[k v] props]
           {(keyword (clojure.string/lower-case k)) v})))

(defn dbquote
  [x]
  (org.apache.lucene.queryparser.classic.QueryParser/escape x))

(def convert-name
  (memoize
    (fn [& args]
      (clojure.string/lower-case (clojure.string/replace (clojure.string/join " " args) #"\s|\." "_")))))

(defn- -create-new-id
  "Creates a new ID for the node and compares against existing gene list, starts by adding :type to the ID,
  then by adding a number to that... Uses a transient for speed, and because it should."
  [gene-list node-properties]
  ; Try the easy one first (:id _ :type)
  (let [first-try (str (:id node-properties) "_" (:type node-properties) (when (:exon_number node-properties) (str "." (:exon_number node-properties))))]
    (if-not (contains? @gene-list first-try) first-try ; Return the first try then!
      (loop [try 1]
        (let [attempt (str first-try "_" try)]
          (if-not (contains? @gene-list attempt) attempt
            (recur (inc try))))))))

(defn gen-id [gene-list node-properties]
  ; If the ID does not exist, create one and return...
  ; If that ID has already been used, create a new one
  (cond
    (not (:id node-properties))
    (merge {:id (clojure.string/join "_" ((juxt :parent :type :start) node-properties))} node-properties)
    (contains? @gene-list (:id node-properties))
    (merge node-properties {:id (-create-new-id gene-list node-properties)})
    :else (do
            (swap! gene-list conj (:id node-properties))
           node-properties)))
