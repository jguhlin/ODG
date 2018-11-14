(ns odg.job
  (:require [odg.batch :as batch]
            [odg.db :as db]))

(defprotocol OdgID
 (propid [_] (:id properties))
 (id [_] (:odg-id properties)))

(defrecord Node [properties labels]
 OdgID clojure.lang.Indexed
 (nth [_ i] (case i 0 properties 1 labels
              (throw (IndexOutOfBoundsException.))))
 (nth [_ i default]
   (case i 0 properties 1 labels default))
 (propid [_] (:id properties))
 (id [_] (:odg-id properties)))

(defn node [properties & labels]
  (->Node properties (into [] labels)))

(defrecord Rel [type from to properties]
  OdgID clojure.lang.Indexed
  (nth [_ i] (case i 0 type 1 from 2 to 3 properties
               (throw (IndexOutOfBoundsException.))))
  (nth [_ i default]
    (case i 0 type 1 from 2 to 3 properties default))
  (propid [_] (:id properties))
  (id [_] (:odg-id properties)))

(defn rel-odg-id [type from to]
 (str (.toString type) "." from "." to))

(defn rel
 ([type from to properties]
  (->Rel
   type
   from
   to
   (if-not (:odg-id properties)
     (assoc properties :odg-id (rel-odg-id type from to))
     properties)))
 ([type from to]
  (rel type from to
   {:odg-id (rel-odg-id type from to)})))

(def blank-batch
  {:indices ["main"]
   :rels []
   :nodes []
   :nodes-update-or-create []
   :species 'error'
   :version 'error'})

(defn batch-merge [batch data]
  (merge-with
   (comp distinct concat)))

(defn species-odg-id [species]
 (str "species-" species))

(defn species-version-odg-id [species version]
 (str "speciesversion-" species "-" version))

(defn create-root-species-nodes [genomes]
  (distinct
   (apply
     concat
     [(node {:id "Root" :odg-id "root-node"} (batch/dynamic-label "root"))]
     (for [[abbrev genome] genomes]
       [(node {:id (:name genome)
               :odg-id (species-odg-id (:name genome))
               :alt-id (name abbrev)}
              (batch/dynamic-label "Species"))
        (node {:id (str (:name genome) " " (:version genome))
               :odg-id (species-version-odg-id (:name genome) (:version genome))
               :alt-id (name abbrev)}
              (batch/dynamic-label "SpeciesVersion"))]))))

(defn create-root-species-rels [genomes]
  (distinct
    (apply
     concat
     (for [[abbrev genome] genomes]
       [(rel
         (:PARENT_OF db/rels)
         "root-node"
         (species-odg-id (:name genome)))
        (rel
          (:PARENT_OF db/rels)
          (species-odg-id (:name genome))
          (species-version-odg-id (:name genome) (:version genome)))]))))
