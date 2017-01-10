(ns odg.uniprot
  (:require [clojure.data.xml :as xml]
            [clojure.java.io :as io]
            [clojure.data.zip :as zip]
            [clojure.data.zip.xml :as zipx]
            [clojure.zip :as czip]
            [clojure.core.reducers :as r]))

; in development

#_(defn- species-filter [x]
    (cond
      (= x "Medicago truncatula") true
      (= x "Medicago truncatula var. truncatula") true
      :else false))

(defn parse
  ;;; [config opts args]
  [_ _ args]
  (with-open [file (io/reader (first args))]
    (let [xmldb (xml/parse file)
          entries (-> xmldb :content)]
      (doseq [entry (take 50000000 entries)]
        (let [xml-entry (czip/xml-zip entry)
              accession (zipx/xml1-> xml-entry :accession zipx/text)
              organism (zipx/xml1-> xml-entry :organism :name zipx/text)]
          ;(if (species-filter organism)
          (when (= accession "B7FLG3")
             (println organism)
             (println entry)
             (println)))))))
