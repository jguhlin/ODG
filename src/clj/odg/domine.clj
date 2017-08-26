(ns odg.domine
  (:require
    clojure.java.io
    [odg.db :as db]
    [odg.batch :as batch]
    [odg.util :as util]
    [taoensso.timbre :as timbre]
    [clojure.core.reducers :as r]
    [odg.db-handler :as dbh]
    [biotools.obo :as obo]))

(timbre/refer-timbre)

(defn import-interactions
  [file]
  (info "DOMINE Interactions: Begun")
  (with-open [rdr (clojure.java.io/reader file)]
    (let [interactions (line-seq rdr)
          result (apply 
                   merge-with
                   concat
                   (for [interaction-record interactions
                         :let [[pfam1 pfam2 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ confidence _] (clojure.string/split interaction-record #"\|")]]
                     {:rels [
                             [
                              (if (= pfam1 pfam2)
                                (db/dynamic-rel "SELF_INTERACTION")
                                (db/dynamic-rel "INTERACTION")) 
                              (str "PFAM:" pfam1)
                              (str "PFAM:" pfam2)
                              {:src "DOMINE" :confidence confidence}]
                             ]}))]
      (dbh/submit-batch-job {:rels (doall (:rels result))})))
  (info "DOMINE Interactions: Job submitted"))
  