(ns odg.pathways
  (:require
    [clojure.core.reducers :as r]
    [biotools.pmn-pathways :as pmn-pathways]
    [odg.db :as db]
    [odg.batch :as batch]
    [odg.util :as util]
    [co.paralleluniverse.pulsar.core :as p]
    [odg.db-handler :as dbh]
    )
  (:import
    (org.neo4j.unsafe.batchinsert BatchInserter
                                  BatchInserters
                                  BatchInserterIndexProvider
                                  BatchInserterIndex)))

; example of data that comes from biotools
; #biotools.pmn_pathways.PMNPathway{
; :pathway-id PWY-5143,
; :pathway-name fatty acid activation,
; :reaction-id RXN-7904,
; :EC 6.2.1.3,
; :protein-id GDQG-2927-MONOMER,
; :protein-name long-chain-fatty-acid-CoA ligase,
; :gene-id GDQG-2927,
; :gene-name Glyma07g37100.1}

(defn get-ec-number
  [ec]
  (re-find #"\d+\.\d+\.?\d+?\.?\d+?" ec))

(defn import-pathway
  [species version filename]
  (with-open [rdr (clojure.java.io/reader filename)]
    (let [data              (pmn-pathways/parse-reader rdr)
          
          genes             (doall (map :gene-name data))
          
          genes-in-database (into
                              {}
                              (dbh/batch-get-data
                                {:index (batch/convert-name species version)
                                 :action :query
                                 :query genes}))
          
          gid               (into #{} (keys genes-in-database))
          
          rxns              (distinct (map :reaction-id data))
          pwys              (distinct (map (juxt :pathway-id :pathway-name) data))
          ecs               (distinct (map :EC data))
          
          results
            (apply
              merge-with 
              concat
              {:nodes-update-or-create (concat
                                         (for [rxn rxns]
                                           [{:id rxn :type "Reaction"} [(batch/dynamic-label "Reaction") (batch/dynamic-label "Rxn")]])
                                         (for [[pwy-id pwy-name] pwys]
                                           [{:id pwy-id :definition pwy-name :type "Pathway"}
                                            [(batch/dynamic-label "Pathway")]])
                                         (for [ec ecs]
                                           [{:id (str "EC:" (get-ec-number ec))} [(batch/dynamic-label "EC")]]))}
              
              ; Only do genes that exist in the database
              (for [row (filter (fn [x] (gid (:gene-name x))) data)]
                {:nodes-update [[{:id (:gene-name row) 
                                  :protein-name (:protein-name row) 
                                  :protein-id (:protein-id row)}
                                 [(batch/dynamic-label "PATHWAY_ANNOTATION")]]]
                 
                 :rels (filter 
                         identity
                         [
                              [(:INVOLVED_IN db/rels) (:reaction-id row) (:pathway-id row)]
                              [(:PART_OF db/rels) (get genes-in-database (:gene-name row)) (:reaction-id row)]
                              (when (not (= "-" (:EC data)))
                                [(:BELONGS_TO db/rels) (:reaction-id row) (str "EC:" (get-ec-number (:EC row)))])
                              ])}))]
      
      ; Not certain why doall didn't work previously, but this forces it correctly.
      (dbh/submit-batch-job
        {:rels                   (doall (:rels results))
         :nodes-update           (doall (:nodes-update results))
         :nodes-update-or-create (doall (:nodes-update-or-create results))
         :indices                [(batch/convert-name species version)]
         }))))
            
; Init DB and parse data into the db
(defn import-cli
  "Wrapper for internal command import-pathway, used to initialize the database."
  [config opts args]
  (println "Pathways Import")
  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))
  (import-pathway (:species opts) (:version opts) (first args)))
