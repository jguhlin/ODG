(ns odg.miscellaneous
  (:require [clojure.java.io]
            [clojure.string]
            [odg.db :as db]
            [odg.batch :as batch]
            [odg.util :as util]))

; TargetP specific filter
(defn- -is-data
  [line]
  (let [after (clojure.string/split line #"\s+")]
    (if (and
          (not= (first after) "Name")
          (= (count after) 9))
      true
      false)))

; incomplete

(defn targetp
  ;;; [config options [filename]]
  [_ _ [filename]]
  (let [lines (line-seq (clojure.java.io/reader filename))]
    (doseq [line (filter -is-data lines)]
      (println line))))
