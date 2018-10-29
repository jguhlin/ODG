(ns odg.annotation
  (:require clojure.java.io
          clojure.string
          [clojure.core.reducers :as r]
          [odg.util :as util]
          [odg.db :as db]
          [clojure.core.async :as async :refer [chan >! >!! <! <!! close! go-loop dropping-buffer thread]]
          [biotools.gff :as gff]
          [biotools.gtf :as gtf]
          [odg.batch :as batch]
          [taoensso.timbre :as timbre]
          [odg.annotation :as annotation]
          [odg.assembly :as assembly]
          [odg.proteome :as proteome]))

(timbre/refer-timbre)

; Checks to run:
; 1. GFF3 Annotation Integrity (see below)
; 2. GFF3 refers to assembly scaffolds (when assembly is present)
; 3. Proteome file refers to GFF3 entries


; Is this file ready to be imported into ODG?

(defn check-gff3-annotation-file
  [filename]
  (info "Examining GFF3 file for suitabile import into ODG as a Gene Annotation file: " filename)
  ; Non-exhaustive search, only looks at first 100 lines
  ; Tests:
  ; 1. Gene, mRNA, and preferably exons / CDS all connected by parent_of
  ; 2. No (or few) disconnected orphan nodes
  ; 3. Contains unique ID
  ; 4. Start is before end, although we fix that automatically in the software
  ; 5. Genes have at least mRNA entries
  ; 6. gene ID and mRNA have different ID's

  (with-open [rdr (clojure.java.io/reader filename)]
    (let [entries (take 200 (gff/parse-reader rdr))]
      (print (first entries)))))
