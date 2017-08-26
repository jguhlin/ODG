(ns odg.interproscan
  (:require
    clojure.java.io
    [odg.db :as db]
    [odg.batch :as batch]
    [criterium.core :as criterium]
    [taoensso.timbre :as timbre]
    [odg.db-handler :as dbh]
    [clojure.core.reducers :as r]
    [biotools.interproscan :as interproscan]))

(timbre/refer-timbre)

;#biotools.interproscan.InterproscanResults
;{
; :protein-id "Medtr7g111710.2", 
; :md5-digest "dd93ee6ad0d69eaac73737b971e24f70", 
; :length 1020, 
; :analysis "SUPERFAMILY", 
; :analysis-match-id "SSF81995", 
; :analysis-name nil, 
; :start 189, 
; :stop 336, 
; :score 2.22E-64, 
; :status "T", 
; :date "01-06-2014", 
; :ipr-terms nil, 
; :ipr-description nil, 
; :go-terms [], 
; :extra-terms []
;}

(defn import-results
  [species version file]
  
  ; First, update the gene / transcript entries with :md5-digest and :length
  (dbh/submit-batch-job
    {:indices [(batch/convert-name species version)]
     :nodes-update-or-create
     (for [entry (interproscan/parse file)]
       [{:id (:protein-id entry)
         :md5 (:md5-digest entry)
         :protein-length (:length entry)}
        [(batch/dynamic-label "InterProScan Analyzed")]])})
  
  (let [genes (map :protein-id (interproscan/parse file))
        genes-in-database (into
                            {}
                            (dbh/batch-get-data
                              {:index (batch/convert-name species version)
                               :action :query
                               :query genes}))
        
                               ; Removed :alt-id-fn in favor of import-proteome
                               ;:alt-id-fn (fn [x]
                               ;            (second (re-find #"(.*)[\._]" x)))

        results 
          (r/fold
            (fn combinef
              ([] {}) 
              ([x y] (merge-with concat x y)))
            (r/map 
              (fn handle-entry [entry]
                {:nodes-update-or-create
                 (concat
                   [
                    [{:id (str (clojure.string/upper-case (:analysis entry)) ":" (:analysis-match-id entry)) :type (:analysis entry) :definition (:analysis-name entry)}
                     [(batch/dynamic-label (clojure.string/upper-case (:analysis entry))) (batch/dynamic-label "InterProScan_Analysis")]]
                    (when (:ipr-terms entry)
                      [{:id (:ipr-terms entry) :type "IPR Term" :definition (:ipr-description entry)}
                       [(batch/dynamic-label "IPR_TERM")]])]
                   (when (:go-terms entry)
                     (for [go-term (:go-terms entry)]
                       [{:id go-term} [(batch/dynamic-label "GO")]]))
                   (when (:extra-terms entry)
                     (for [term (:extra-terms entry)]
                       (let [[type id] (clojure.string/split term #":? ")]
                         [{:id (clojure.string/upper-case
                                 (clojure.string/replace term #" " ""))
                           :type (clojure.string/upper-case type)} 
                          [(batch/dynamic-label "TERM") (batch/dynamic-label (clojure.string/upper-case type))]]))))
                 :rels
                 (concat
                   [
                    [(:HAS_ANALYSIS db/rels) 
                     (get genes-in-database (:protein-id entry)) 
                     (str (clojure.string/upper-case (:analysis entry)) ":" (:analysis-match-id entry)) 
                     (merge
                       (select-keys
                         entry
                         [:start
                          :score
                          :date])
                       {:end (:stop entry)})]
                    ]
                   (when (:ipr-terms entry)
                     [[(:HAS_IPRTERM db/rels) (str (clojure.string/upper-case (:analysis entry)) ":" (:analysis-match-id entry)) (:ipr-terms entry) {}]])
                   (when (seq (:go-terms entry))
                     (map 
                       (fn [go-term]
                         [(:HAS_GOTERM db/rels) (str (clojure.string/upper-case (:analysis entry)) ":" (:analysis-match-id entry)) go-term {}])
                       (remove clojure.string/blank? (:go-terms entry))))
                   (when (:extra-terms entry)
                     (map 
                       (fn [term]
                         (let [[type id] (clojure.string/split term #":? ")]
                           [(:HAS_TERM db/rels) 
                            (str (clojure.string/upper-case (:analysis entry)) ":" (:analysis-match-id entry)) 
                            (clojure.string/upper-case
                              (clojure.string/replace term #" " "")) 
                            {}]))
                       (remove clojure.string/blank? (:extra-terms entry)))))
                 })
              (interproscan/parse file)))]
    
; No longer submitting to dbh, to remove duplicate :rels and :nodes
;    (dbh/submit-batch-job
      {:indices ["main"]
       :nodes-update-or-create (distinct (doall (:nodes-update-or-create results)))
       :rels (distinct (doall (:rels results)))
       :exact-ids true
       }))
