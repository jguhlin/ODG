(ns odg.blast
  (:require clojure.java.io
            clojure.string
            [clojure.core.reducers :as r]
            [odg.util :as util]
            [odg.db :as db]
            [biotools.blast :as blast]
            [odg.batch :as batch]
            [incanter.stats :as stats]
            [taoensso.timbre :as timbre]
            [odg.db-handler :as dbh])

  (:import [biotools.blast BlastHit]
           (org.neo4j.graphdb.index Index)
           (org.neo4j.unsafe.batchinsert BatchInserter
                                         BatchInserters
                                         BatchInserterIndexProvider
                                         BatchInserterIndex)))

(timbre/refer-timbre)

(defn third [x]
  (nth x 2))

; This code could probably be simplified some, although it is very logic-heavy

(defn transform-blast
  [opts min-id-pct min-alignment-pct x]
  (biotools.blast/map->BlastHit
    (conj x {:id (:query-id x)
             :end (:subject-end x)
             :start (:subject-start x)
             :type (:type opts)
             :filter-min-id-pct min-id-pct
             :filter-min-alignment-pct min-alignment-pct
             :query-alignment-percent (float (:query-alignment-percent x))
             :subject-alignment-percent (float (:subject-alignment-percent x))})))



; Changing anchor-blast to now group-by :subject-id and create only 1 subject_id node and then connect
; the blast hits as relationships

; Also gives the ability to determine the "best" blast hit and mark it as such

;TODO: Support prefix for ID's

; Not yet updated for db_handler system
(defn anchor-blast
  "Anchor blast results onto landmark and record them as specified type. Supports prefix and note. Landmarks should be specified as the anchors."
  [species version type min-id-pct min-alignment-pct results-file note]

  (let [index "Filler"
        idx-query 1 ;(util/index-queryer index)
        ids (atom {})
        labels [(batch/dynamic-label species)
                (batch/dynamic-label (str species " " version))
                (batch/dynamic-label type)
                (batch/dynamic-label "Blast Result")]]


    (println "Anchoring blast results for" species version)
    (with-open [rdr (clojure.java.io/reader results-file)]
      (let [blast-results (group-by
                            :query-id
                            (map
                              (partial transform-blast
                                       {:note note :species species :version version :type type}
                                       min-id-pct
                                       min-alignment-pct)
                              (blast/parse-reader
                                min-id-pct
                                min-alignment-pct
                                rdr)))]
        (doseq [subject-id (keys blast-results)
                :let [subject-results (get blast-results subject-id)
                      subject-node {
                                     ids
                                     [index]
                                     labels
                                     (merge {:id subject-id
                                             :species species
                                             :version version
                                             :type type
                                             :filter-min-id-pct min-id-pct
                                             :filter-min-alignment-pct min-alignment-pct}

                                            (when note {:note note}))}]]
          (doseq [blast-hit subject-results]
            ;(util/connect-landmarks
            {
              idx-query
              subject-node
              (:subject-id blast-hit)
              (:subject-start blast-hit)
              (:subject-end blast-hit)
              (merge {:start (:subject-start blast-hit) :end (:subject-end blast-hit)} blast-hit)}))))))

(defn anchor-blast-cli
  "Anchor blast results onto landmark and record them as specified type. Supports prefix and note. Landmarks should be specified as the anchors."
  [config opts args]

  ; Create DB connection
  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))

  (let [[min-id-pct min-alignment-pct results-file] args]
    (anchor-blast
      (:species opts)
      (:version opts)
      (:type opts)
      (Float/parseFloat min-id-pct)
      (Float/parseFloat min-alignment-pct)
      results-file
      (:note opts))))

(defn- -blastn-filter-initial-best-match
  "Use with filter or r/filter.

  Identifies blast hits that would be considered a BEST_BLAST_MATCH out of context. Meaning the match
  is a great match and should be marked as such.

  These are the rules for generating a BLAST_BEST_MATCH out of context:

  * Percent ID > 99% and alignment length is at least 80% of query or 80% of subject
  * Percent ID > 99.9% and alignment length is at least 50% of query of subject length

  #TODO: In the future it would be nice to take the result of this filtered list, and eliminate
  BEST_BLAST_MATCH's down to 1 or a few (if all other matching variables are the same).
  We often find alt. transcripts map to each other regularly, creating invalid matches.
  This is currently handled at the application level logic, and hopefully, properly, in our DSL.

  (For a defintion of context - see this other function(!!!!(#TODO)))"
  [result]

  (let [{:keys [query-id
                subject-id
                pct-identity
                query-alignment-percent
                subject-alignment-percent
                alignment-length
                query-length
                subject-length]}

        result]
    (try
      (if
        (or
          (and
            (> pct-identity 99)
            (or ; so pct-identity > 99 AND (or...)
                (> alignment-length (* query-length 0.8))
                (> alignment-length (* subject-length 0.8))))
          (and
            (> pct-identity 99.9)
            (or
              (> alignment-length (* query-length 0.5))
              (> alignment-length (* subject-length 0.5)))))
        true
        false)
      (catch Exception e
        (println e " happened on " query-id subject-id pct-identity query-length subject-length alignment-length)))))

;; NOTE temporary, kept for reference
#_(defn- -blastn-filter-single-match
    [data]
    (if (= 1 (count (second data))) true false))

(defn- -blastn-step2-by-subject
  "Searches by subject-id for subject-id's with a single blast hit whose match has
  the search ID as the best hit as determined by bitscore, e-value, length, etc...

  This function emits vectors with this configuration
  [REL_TYPE Query-Id Subject-Id [blast results list]"
  [data]
  (let [by-subject-matches (group-by :subject-id data)
        by-query-matches (group-by :query-id data)]

    (remove nil?
            (for [[id entries] by-subject-matches]
              (let [subject-id id]
                (cond
                  (and
                    (= 1 (count entries))
                    (= 1 (count (get by-query-matches (:query-id (first entries))))))
                  [(:BLAST_SINGLE_HIT_RECIPROCAL db/rels) (:query-id (first entries)) subject-id entries]

                  (and ; If we have more than 1 entry but they are all the same -- unlikely, but gene could be split up, rearranged, etc...
                       (> (count entries) 1)
                       (= 1 (count (set (map :query-id entries)))))
                  [(:BLAST_SINGLE_HIT_PIECES db/rels) (:query-id (first entries)) subject-id entries]

                  (and
                    (> (count entries) 1)
                    (= 1 (count (set (map (comp util/remove-transcript-id :query-id) entries)))))
                  [(:BLAST_SINGLE_HIT_ALT_TRANSCRIPTS db/rels) (:query-id (first entries)) subject-id entries]

                  (= 1 (count entries))
                  [(:BLAST_SINGLE_HIT db/rels) (:query-id (first entries)) subject-id entries]))))))

(defn- -blastn-step3-by-query
  "Searches by subject-id for subject-id's with a single blast hit whose match has
  the search ID as the best hit as determined by bitscore, e-value, length, etc...

  This function emits vectors with this configuration
  [REL_TYPE Query-Id Subject-Id [blast results list]"
  [by-query]

  (remove nil?
          (for [[query-id entries] by-query]
            (cond
              ;          (and
              ;            (= 1 (count entries))
              ;            (= 1 (count (get by-query-matches (:query-id (first entry))))))
              ;                      [(:BLAST_SINGLE_HIT_RECIPROCAL db/rels) (:query-id (first entry)) subject-id]
              (and ; If we have more than 1 entry but they are all the same -- unlikely, but gene could be split up, rearranged, etc...
                   (> (count entries) 1)
                   (= 1 (count (set (map :subject-id entries)))))
              [(:BLAST_SINGLE_HIT_PIECES db/rels) query-id (:subject-id (first entries)) entries]

              (and
                (> (count entries) 1)
                (= 1 (count (set (map (comp util/remove-transcript-id :subject-id) entries)))))
              [(:BLAST_SINGLE_HIT_ALT_TRANSCRIPTS db/rels) query-id (:subject-id (first entries)) entries]

              (= 1 (count entries))
              [(:BLAST_SINGLE_HIT db/rels) query-id (:subject-id (first entries)) entries]))))

(defn import-annotation-blastn
  "Imports blastn results into the database. This is usually done with mRNA vs mRNA, including alternate
  transcripts, and usually from the same species, different versions. However the software is not limited to
  that. Also can be used with BAC contigs working as assemblies."
  [config opts args]

  ; Create DB connection
  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))

  (let [[min-id-pct subject-align-min query-align-min results-file] args]




    (println "Importing blastn results for" (:species opts) (:version opts) "vs" (:second-species opts) (:second-version opts))
    (let [filtered-results (blast/parse-reader-via-reducer
                             (Float/parseFloat min-id-pct)
                             (Float/parseFloat query-align-min)
                             (Float/parseFloat subject-align-min)
                             results-file)]

      ; Loop around these results and add relationships for them.
      (println "Creating raw blast hit relationships from filtered results...")
      (doseq [result filtered-results]
        1)


      (println "Generating translation results...")
      ; Filter best hits and everything else...

      (let [best-results (r/foldcat (r/filter -blastn-filter-initial-best-match filtered-results))
            not-in-best-results-query-set (complement (set (map :query-id best-results)))
            not-in-best-results-subject-set (complement (set (map :subject-id best-results)))

            step1-results (r/foldcat
                            (r/filter
                              #(not-in-best-results-query-set (:query-id %))
                              (r/filter #(not-in-best-results-subject-set (:subject-id %)) filtered-results)))]

        ; Add the BEST_BLAST_MATCH relationships...
        (println "Working on best results")

        ; This is just a simple filter over the entire dataset! So we can treat it like the first one
        ; The rest come out in this format [rel query subject [blast hits]]
        (doseq [result best-results] 1)

        ; Now begin to filter the rest of the results appropriately...
        ; Next step is to remove all subject's with only 1 match...
        (let [filter-fn (complement #{(:BLAST_SINGLE_HIT_ALT_TRANSCRIPTS db/rels)
                                      (:BLAST_SINGLE_HIT_RECIPROCAL db/rels)})
              subject-step2-hits (-blastn-step2-by-subject step1-results)
              by-subject-step2 (apply dissoc
                                      (group-by :subject-id step1-results)
                                      (map #(nth % 2) subject-step2-hits))
              by-query-step2 (apply dissoc
                                    (group-by :query-id step1-results)
                                    (map second (filter #(filter-fn (first %)) subject-step2-hits)))]

          ; Add subject-step2-hits
          (doseq [[rel-type query-id subject-id results] subject-step2-hits]
            (doseq [result results]
              1))

          (let [query-step3-hits (-blastn-step3-by-query by-query-step2)
                by-subject-step3 (apply dissoc by-subject-step2 (map #(nth % 2) query-step3-hits))
                by-query-step3 (apply dissoc by-query-step2 (map second query-step3-hits))]

            (doseq [[rel-type query-id subject-id results] query-step3-hits]
              (doseq [result results]
                1))

            (doseq [result (set (into (flatten (vals by-subject-step3)) (flatten (vals by-query-step3))))]
              1)
            (println "Finished creating translation relationships..."))))
      ;(.flush query-index)
      ;(.flush subject-index)
      (println "Starting shutdown..."))))

(defn- -same-query-and-subject
  "Used to filter blast results with the same query/subject"
  [data]
  (= (:query-id data) (:subject-id data)))

; BLASTP need to calculate best hits (no matter how bad) for each gene, and reciprocal blast hits must be marked!
(defn blastp-calc-query-results
  [query-id query-bitscore-raw results-all]

  (let [
        query-bitscore (if (string? query-bitscore-raw)
                          (read-string query-bitscore-raw)
                          query-bitscore-raw)

        results         (reverse
                          (sort-by
                            :bitscore results-all))
        bitscores       (into [] (map :bitscore results))
        mean            (incanter.stats/mean bitscores)
        n               (count results)
        sd              (if (<= n 5) 0 (incanter.stats/sd bitscores))
        mean-cutoff     (if (<= n 5) ; If n <= 5, store all BLAST+ hits
                         0
                          mean)
                          ; (+ mean sd)) ; Set cutoff to mean + sd
                         ; (- mean sd)) ; Cutoff is 1 SD below mean
        good-hit-cutoff (float
                           (cond ; if n <= 5, set the good hit cutoff at 0.5 * query-bitscore
                            (<= n 5) (* 0.5 query-bitscore)
                             (> n 5) (if (> (+ mean sd sd) query-bitscore)
                                       (* 0.5 query-bitscore) ; 50% of query-bitscore if (+ mean sd sd) is higher than total possible
                                       (+ mean sd sd))))  ; mean + sd + sd
        top-hit-cutoff  (float
                           (cond ; if n <= 5, set top-hit cutoff to 0.75 * query-bitscore
                            (<= n 5) (* 0.75 query-bitscore) ; Including 1
                            (>  n 5) (min
                                       (+ mean sd sd sd) ; mean + 3*sd
                                       query-bitscore)))] ; Or query bitscore if less than mean + 3*sd



    ; Loop through each result
   ; If bitscore >= mean record as a blastp hit (always! even if it matches another category too. This allows for more fine-grained numeric queries)
   ; If bitscore >= top-hit-cutoff record as a tophit, ELSE if bitscore >= good-hit-cutoff record as a good hit
   (doall ; Make non-lazy
     (apply concat
        (for [result results]
          (let [bitscore (if (string? (:bitscore result))
                          (read-string (:bitscore result))
                          (:bitscore result))
                bsr      (/ bitscore query-bitscore)
                data     (dissoc
                           (merge {:bsr (float bsr)} result)
                           :subject-id
                           :query-id
                           :subject-length
                           :query-length)]
            (when
              (and
                query-bitscore
                (>= bitscore mean-cutoff))
              (list
                (cond
                  (= bsr 1) [(:BLASTP_TOP_HIT db/rels) (:query-id result) (:subject-id result) data]
                  (>= bitscore top-hit-cutoff) [(:BLASTP_TOP_HIT db/rels) (:query-id result) (:subject-id result) data]
                  (>= bitscore good-hit-cutoff) [(:BLASTP_GOOD_HIT db/rels) (:query-id result) (:subject-id result) data]
                  (>= bitscore mean-cutoff) [(:BLASTP_HIT db/rels) (:query-id result) (:subject-id result) data])))))))))


(defn -bsr-calc
  "Calculate, store, and (somehwat) interpret the BLAST results -- Goal is to be blast program agnostic (or mostly)"
  [query-species query-version subject-species subject-version results-file]

  ; If a self BLAST we need to store the BLAST score for each

  ; TODO: Store bitscore as BLAST program specific attribute

  (info "-bsr-calc for" query-species query-version "vs" subject-species subject-version "from file" results-file)

  (let [self? (and (= query-species subject-species) (= query-version subject-version))
        subject-index (batch/convert-name subject-species subject-version)
        query-index   (if self?
                        subject-index
                        (batch/convert-name query-species query-version))

        ids            (r/foldcat
                         (r/map
                           (juxt :query-id :subject-id)
                           (blast/parse-reader-as-reducer results-file)))

        subject-ids     (doall
                          (distinct
                            (map second ids)))

        query-ids       (doall
                          (distinct
                            (if self?
                              (concat (map first ids) subject-ids)
                              (map first ids))))

        self-blasts     (when
                          self?
                          (r/foldcat
                            (r/map
                              (fn self-blasts [x]
                                [(:query-id x) (:bitscore x)])
                              (r/filter
                                -same-query-and-subject
                                (blast/parse-reader-as-reducer results-file)))))

        bitscore        (if self?
                          (doall (into {} (for [[id score] self-blasts] {id score})))
                          (into
                            {}
                            (dbh/batch-get-data
                              {:index (batch/convert-name query-species query-version)
                               :action :query-properties
                               :query query-ids
                               :filter-fn (fn [id properties labels]
                                            (if (some (hash-set "mRNA" "Protein" "Gene") labels)
                                              id
                                              nil))
                               :results-fn (fn [x] (get x "bitscore"))})))

        query-nodes-ids  (into
                           {}
                           (dbh/batch-get-data
                             {:index (batch/convert-name query-species query-version)
                              :action :query
                              :query query-ids ; subject ids
                              :filter-fn (fn [id properties labels]
                                           (if (some (hash-set "mRNA" "Protein" "Gene") labels)
                                             id
                                             nil))}))


        subject-nodes-ids (if self?
                            query-nodes-ids
                            (into
                              {}
                              (dbh/batch-get-data
                                {:index (batch/convert-name subject-species subject-version)
                                 :action :query
                                 :query subject-ids
                                 :filter-fn (fn [id properties labels]
                                              (if (some (hash-set "mRNA" "Protein" "Gene") labels)
                                                id
                                                nil))})))]


    (when self?
      (dbh/submit-batch-job
        (doall
          {:indices [(batch/convert-name query-species query-version)]
           :comment (str "Store bitscores -- Self BLAST -- for " query-species " " query-version)
           :nodes-update
           (into []
                 (map
                   (fn update-nodes-store-self-bitscore
                     [[id score]]
                     [{:id id
                       :bitscore score}
                      [(batch/dynamic-label "BlastP")]]) ; Replace BLASTP with variable later, perhaps "program" ?
                   self-blasts))})))

    ; Calculate the BSR for each protein (store with the mRNA node type)

    ; If self blast comparison, remove BLAST results from same Gene ID (when multiple transcripts)
    (with-open [rdr (clojure.java.io/reader results-file)]
      (let [get-bitscore-fn    (fn [x] (get bitscore x))

            comparative-blasts (partition-by
                                 :query-id
                                 (if self?
                                   (remove ; For self-blasts, do not store BLAST hits between alt. transcripts -- Not perfect
                                           (fn [x]
                                             (=
                                               (util/remove-transcript-id (:query-id x))
                                               (util/remove-transcript-id (:subject-id x))))
                                           (blast/parse-reader 5 10 10 rdr)) ; Use some minor filtering for self-blasts ; 5 10 10 is normal
                                   (blast/parse-reader rdr)))]

        (let [processed-batches
              (map
                (fn process-batches [batch-set]
                  (sort-by
                    (juxt second third)
                    (map
                      (fn process-rel [[rel-type start end rel-data]]
                        [rel-type
                         (get query-nodes-ids start)
                         (get subject-nodes-ids end)
                         rel-data])
                      (remove
                        nil?
                        (apply
                          concat
                          (map
                            (fn process-results [results]
                              (let [query-id (:query-id (first results))]
                                (if-let [bitscore (get-bitscore-fn (:query-id (first results)))]
                                  (blastp-calc-query-results
                                    query-id
                                    bitscore
                                    results))))
                            batch-set))))))
               (partition-all 10000 comparative-blasts))]

          (doseq [entries processed-batches]
            (debug "BLAST Results Import")
            (debug (take 5 entries))
            (dbh/submit-batch-job
              {:species query-species
               :version query-version
               :comment (str "Store BLAST results for " query-species " " query-version " vs. " subject-species " " subject-version)
               :rels entries
               :indices [(batch/convert-name query-species query-version)]}))))))
  (info "All BLAST jobs submitted"))

; Need to keep 1 std deviation above mean of filtered hits (check filtering parameters too!)
; Mark 2 std deviation's above as BLASTP_BEST_HIT
; Mark 1-2 std deviation's above as BLASTP_GOOD_HIT
; A later step should infer orthologs/paralogs -- hook into MCL / OrthoMCL?
; Do not create relationships between self
; If only 1 blast hit, call that the best (if BSR > 0.75, good if BSR > 0.5, otherwise just call it a BLASTP_HIT
; If 5 or less blast hits, do * 0.75 max-score as the best cutoff, and 0.5 * max-score as good cutoff
; If 5 or more, then do by std deviations, only calculate when necessary

; TODO: Pass arguments for filtering again!
(defn import-blastp
  "Imports blastp. Blastp must be run of self vs self before any additional inputs are performed in order to calculate the correct BSR."
  [species version species2 version2 results-file]

   ; If only 1 blast hit, keep that hit (if BSR > 0.75, good if BSR > 0.5, otherwise just call it a BLASTP_HIT
   ; If 5 or less blast hits, do * 0.75 max-score as the best cutoff, and 0.5 * max-score as good cutoff
   ; If 5 or more, then do by std deviations, only calculate when necessary, see following lines:
   ; Need to keep BSRs above mean of filtered hits
   ; Mark 2 std deviation's above as BLASTP_BEST_HIT
   ; Mark 1-2 std deviation's above as BLASTP_GOOD_HIT

   ; TODO: A later step should infer orthologs/paralogs
   ; TODO: Check that we are not creating relationships between self
  (info "Importing blastp results for" species version "vs" species2 version2)

   ; Call -bsr-calc here, in the future -bsr-calc should be blast type independent (BLASTP, BLASTN, BLASTX, TBLASTN, etc..)
  (-bsr-calc species version species2 version2 results-file))


(defn import-blastp-cli
  [config opts args])
  ; Create DB connection
  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))
  ;(import-blastp (:species opts) (:version opts) (:second-species opts) (:second-version opts) (first args)))
