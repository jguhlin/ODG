(ns odg.assembly
  "Functions for handling the FASTA files of assemblies"
  (:require clojure.java.io
            [odg.util :as util]
            [odg.batch :as batch]
            [biotools.fasta :as fasta]
            [taoensso.timbre :as timbre]
            [clojure.core.reducers :as r]
            [biotools.gff :as gff]
            [odg.db :as db])
  (:import (org.neo4j.unsafe.batchinsert BatchInserterIndex)))

(set! *warn-on-reflection* true)

(timbre/refer-timbre)

(defn get-landmarks
  [filename]
  (with-open [rdr (clojure.java.io/reader filename)]
    (into {}
          (map
            (fn [r] {(:id r) (count (:seq r))})
            (if (re-find #"gff" filename)
              (gff/parse-fasta rdr)
              (fasta/parse rdr))))))

; Generates a message to the db-handler actor/server now, instead of sending off jobs itself
; Should send a single package of things to do to the db-handler...

; Test command
(defn import-fasta
  "FASTA sequences are used here to create a pseudomolecule backbone to attach genes and other elements to; the assembly gives coordinates to elements"
  [species version filename]

  (info "Importing assembly for:" species version filename)

  (let [; ^BatchInserterIndex index (batch/get-node-index species version)
       ; idx-query (util/index-queryer index)
        species-label (batch/dynamic-label species)
        version-label (batch/dynamic-label (str species " " version))
        labels (partial into [species-label version-label])

       ; FINISH!
        species-ver-root (util/species-ver-root species version)

       ; Makes a list of all the nodes and the data they need to insert
       ; TODO: Automatically obtain species, version, and labels
       ; Test info - (make-nodes "s" "v" ["chr1" 10000])
        compute-nodes (fn compute-node
                         [landmark length]
                         (concat
                           [[{:id landmark
                              :length length
                              :species species
                              :version version}
                             (labels [(:LANDMARK batch/labels)])]]
                           (for
                             [mark (range 0 (* 100000 (+ 2 (int (/ length 100000)))) 100000)]
                             [{:id (clojure.string/lower-case (str landmark ":" mark))}
                              (labels [(:LANDMARK_HASH batch/labels)])])))
        compute-rels (fn compute-rels
                       [landmark length]
                       (let [marks (range 0 (* 100000 (+ 2 (int (/ length 100000)))) 100000)
                             lc-landmark (clojure.string/lower-case landmark)] ; Only convert to lowercase once

                         (concat
                           [[(:BELONGS_TO db/rels) lc-landmark species-ver-root]]
                           (for
                             [mark marks]
                             [(:LOCATED_ON db/rels) (clojure.string/lower-case (str landmark ":" mark)) landmark {}])
                           (for [[f s] (partition 2 1 marks)]
                             [(:NEXT_TO db/rels)(str lc-landmark ":" f) (str lc-landmark ":" s) {}]))))

        combinef (fn combinef
                   ([] [])
                   ([x y] (concat x y)))

        landmarks (get-landmarks filename)
        nodes (r/fold combinef (r/map compute-nodes landmarks))
        rels (r/fold combinef (r/map compute-rels landmarks))]

        ; Do not worry about the index anymore, the db handler will handle that (and pass it off appropriately)


    {:species species
     :version version
     :nodes nodes
     :rels rels
     :indices [(batch/convert-name species version)]}))



;(defn import-fasta-cli
;  "Import assembly - helper fn for when run from the command-line (opposed to entire database generation)"
;  [config opts args]
;
;  (batch/connect (get-in config [:global :db_path]) (:memory opts))
;  (import-fasta (:species opts) (:version opts) (first args)))
