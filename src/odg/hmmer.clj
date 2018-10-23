(ns odg.hmmer
  (:require [odg.db :as db]
            [odg.batch :as batch]
            [odg.util :as util]))

(defn import-hmmer-tbl
  [file species version]
  (with-open [rdr (clojure.java.io/reader file)]
    (let [tbl-file (remove
                     (fn [x]
                       (re-find #"^\#" x)) (line-seq rdr))]
      {:nodes-update-or-create
       (into
         []
         (for [hmm-target (distinct
                           (map
                             (comp
                               first
                               (fn [x] (clojure.string/split x #"\s+")))
                             tbl-file))]
           [{:id hmm-target :note "Autogenerated"}
            [(batch/dynamic-label "HMM_Target")]]))

       :rels
       (into
         []
         (for [[target _ query _ hmmfrom hmmto alifrom alito envfrom envto modlen strand eval score bias _]
               (map
                 (fn [x]
                   (clojure.string/split
                     x #"\s+"))
                 tbl-file)

               landmark (util/get-landmarks query (read-string alifrom) (read-string alito))]

           [(:HMM_MATCH db/rels)
            landmark
            target
            {:HMMFROM (read-string hmmfrom)
             :HMMTO (read-string hmmto)
             :start (read-string alifrom)
             :end (read-string alito)
             :ENVFROM (read-string envfrom)
             :ENVTO (read-string envto)
             :MODLEN (read-string modlen)
             :STRAND strand
             :EVAL (read-string eval)
             :SCORE (read-string score)
             :BIAS bias}]))
       :indices [(if (not
                       (and
                         (nil? species)
                         (nil? version)))
                  (batch/convert-name species version)
                  "main")]})))
