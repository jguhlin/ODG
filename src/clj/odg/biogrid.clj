(ns odg.biogrid
    (:require clojure.java.io
            clojure.string
            [co.paralleluniverse.pulsar.core :as p]
            [clojure.core.reducers :as r]
            [odg.batch :as batch]
            [odg.db :as db]
            [odg.db-handler :as dbh]
            [odg.miscellaneous :as miscellaneous]
            [biotools.psimitab25 :as psimitab]))

(defn import-psi-mitab
  [species version filename]
  (let [results
        (apply
          merge-with 
          concat
          (for [entry (r/foldcat (psimitab/parse-r filename))]
            (let [a-ids                   (vals (:a-alt-id entry))
                  b-ids                   (vals (:b-alt-id entry))
                  a-aliases               (vals (:a-aliases entry))
                  b-aliases               (vals (:b-aliases entry))
                  interaction-types       (vals (:interaction-types entry))
                  detection-methods       (vals (:detection-methods entry))
                  author                  (:author entry)
                  source-databases        (vals (:source-databases entry))
                  interaction-identifiers (vals (:interaction-identifiers entry))
                  confidence-score        (:confidence-score entry)
                  interaction-node-id     (str "Interaction: " (first a-ids) " : " (first b-ids))
                  ]
              {:nodes-update
               [
                [{:id (first a-ids) :other_name (first a-aliases)} [(batch/dynamic-label "HAS_BIOGRID_ENTRY") (batch/dynamic-label "HAS_INTERACTION")]]
                [{:id (first b-ids) :other_name (first b-aliases)} [(batch/dynamic-label "HAS_BIOGRID_ENTRY") (batch/dynamic-label "HAS_INTERACTION")]]
                ]
               :nodes-create ; Nodes to always create
               [
                [{:id interaction-node-id :confidence-score confidence-score :author author :source "BIOGRID"} 
                 [(batch/dynamic-label "BIOGRID_INTERACTION") (batch/dynamic-label "INTERACTION")]]
                ]
               :rels
               (concat
                 [
                  [(:INTERACTION db/rels) (first a-ids) interaction-node-id {}]
                  [(:INTERACTION db/rels) (first b-ids) interaction-node-id {}]
                  ]
                 (for [interaction-type interaction-types
                       :let [id (second (re-find #"\"(.*)\"" interaction-type))]]
                   [(:INTERACTION_TYPE db/rels) interaction-node-id id {}])
                 (for [detection-method detection-methods
                       :let [id (second (re-find #"\"(.*)\"" detection-method))]]
                   [(:INTERACTION_TYPE db/rels) interaction-node-id id {}])
                 )}
              )))]
    (dbh/submit-batch-job
      {:indices [(batch/convert-name species version)]
       :nodes-update (doall (:nodes-update results))
       :nodes-create (doall (:nodes-create results))
       :rels (doall (:rels results))})))
        
(defn import-cli 
  [config opts args]
  
  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))
  (import-psi-mitab (:species opts) (:version opts) (first args)))
