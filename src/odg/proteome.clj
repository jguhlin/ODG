(ns odg.proteome
  (:require [digest :as digest]
            [biotools.fasta :as fasta]
            [odg.db :as db]
            [odg.batch :as batch]
            [odg.db-handler :as dbh]))

; For testing...
; (def a (import-proteome "950" "1" "G:\\Development\\odg\\data\\950\\950_predicted_proteins.fa"))

(defn get-from-file
  [filename]
  (with-open [rdr (clojure.java.io/reader filename)]
    (into {}
          (map
            (fn [r] {(:id r)
                     {:length (count (:seq r))
                      :md5 (digest/md5 (apply str (:seq r)))}})
            (fasta/parse rdr)))))


; Works for GLIMMER and similar programs, may not work for all programs
(defn get-gene-id [id]
  (second (re-find #"(.*)[\._]" id)))

(defn node-definition
  [labels species version x]
  (let [id (key x)
        data (val x)]
    [{:id id
      :species species
      :version version
      :length (:length data)
      :md5 (:md5 data)}
     (labels [(:PROTEIN batch/labels)])]))

; Called import-fasta in case there are future proteomes in another format
(defn import-fasta
  [species version filename]
  (let [data (get-from-file filename)
        proteins-existing (into
                            {}
                            (dbh/batch-get-data
                              {:index (batch/convert-name species version)
                               :action :query
                               :query (keys data)}))
        
        existing-set (apply hash-set (keys proteins-existing))
        
        proteins-not-existing (remove (fn [x]
                                        (existing-set (key x)))
                                      data)

        species-label (batch/dynamic-label species)
        version-label (batch/dynamic-label (str species " " version))
        labels (partial into [species-label version-label])
        
        create-node (partial node-definition labels species version)
        ]
    
    {:indices [(batch/convert-name species version)]
     :nodes-update-or-create (distinct
                               (doall
                                 (map create-node data)))
     :rels (distinct 
             (doall
               (map 
                 (fn [x]
                   [(:HAS_PROTEIN db/rels)
                    (get-gene-id (key x))
                    (key x)
                    {}])
               data)))
     ;:exact-ids true
     }))
    
