(ns odg.checks
  (:require clojure.java.io
          clojure.string
          [clojure.core.reducers :as r]
          [odg.util :as util]
          [odg.db :as db]
          [clojure.core.async
           :as async
           :refer [chan >! >!! <! <!! close! go go-loop dropping-buffer thread]]
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

(def errors (atom 0))
(def warnings (atom 0))

(defn run-check [xv v]
  (cond
    (fn? xv)  (xv v)
    (set? xv) (contains? xv v)
    :else (= xv v)))

(defn run-check-warning [xv v msg]
  (when-not (run-check xv v)
    (swap! warnings inc)
    (warn msg)))

(defn run-check-error [xv v msg]
  (when-not (run-check xv v)
    (error msg)
    (swap! errors inc)))

(defn -gff3-annotation-required-types [filename gff-entries]
  (go
    (let [types (into
                  #{}
                  (map
                    (comp keyword clojure.string/lower-case)
                    (distinct (map :type gff-entries))))]
      (run-check-error
        types
        :gene
        (str "No 'gene' entries found in GFF3 file: " filename))

      (run-check-error
        types
        :mrna
        (str "No 'mRNA' entries found in GFF3 file: " filename))

      (run-check-warning
        types
        :cds
        (str "No 'cds' entries found in GFF3 file: " filename))

      (run-check-warning
        types
        :exon
        (str "No 'exon' entries found in GFF3 file: " filename)))))

(defn -gff3-annotation-all-entries-have-id
  [filename entries]
  (go
    (when-not
      (every?
        (fn [x] (contains? x :id))
        entries)
      (swap! warnings inc)
      (warn "Not every GFF3 entry contains an ID; IDs may be generated automatically"))))

(defn check-gff3-annotation-file
  [filename]
  (info "Examining GFF3 file for suitabile import into ODG as a Gene Annotation
    file: " filename)
  ; Non-exhaustive search, only looks at first 100 lines
  ; Tests:
  ; 1. [X] Gene, mRNA, and preferably exons / CDS all connected by parent_of
  ; 2. [ ] No (or few) disconnected orphan nodes
  ; 3. [ ] Contains unique ID
  ; 4. [ ] Start is before end, although we fix that automatically in the software
  ; 5. [ ] Genes have at least mRNA entries
  ; 6. [ ] gene ID and mRNA have different ID's
  ; 7. [X] Entries contain ID's

  (with-open [rdr (clojure.java.io/reader filename)]
    (let [entries (doall (take 500 (gff/parse-reader rdr)))
          tests [(-gff3-annotation-required-types filename entries)
                 (-gff3-annotation-all-entries-have-id filename entries)]])))
