(ns odg.variants
  (:require clojure.java.io
            clojure.string
            [odg.db :as db]
            [odg.util :as util]
            [odg.batch :as batch]
            [taoensso.timbre :as timbre])
  (:import
    (org.neo4j.unsafe.batchinsert BatchInserter
                                  BatchInserters
                                  BatchInserterIndexProvider
                                  BatchInserterIndex)))

(timbre/refer-timbre)

(defrecord MtHapMap-Variant-1 [landmark start quality reference alt effect effect-impact])
(defrecord MtHapMap-Variant-2 [landmark start quality reference alt effect effect-impact functional-class codon-change amino-acid-change gene-name transcript-id])
(defrecord MtHapMap-Variant-3 [landmark start quality reference alt effect effect-impact functional-class codon-change amino-acid-change gene-name transcript-id rank])
(defrecord MtHapMap-Variant-4 [landmark start quality reference alt effect effect-impact functional-class codon-change amino-acid-change gene-name transcript-id rank warnings])

; Must destructure and provide defaults...
(defn -->MtHapMap-Variant
  ([landmark start quality reference alt effect effect-impact]
   (->MtHapMap-Variant-1
     landmark
     (Integer/parseInt start)
     (Double/parseDouble quality)
     reference
     alt
     effect
     effect-impact))
  ([landmark start quality reference alt effect effect-impact functional-class codon-change amino-acid-change gene-name transcript-id]
   (->MtHapMap-Variant-2
     landmark
     (Integer/parseInt start)
     (Double/parseDouble quality)
     reference
     alt
     effect
     effect-impact
     functional-class
     codon-change
     amino-acid-change
     gene-name
     transcript-id))
  ([landmark start quality reference alt effect effect-impact functional-class codon-change amino-acid-change gene-name transcript-id rank]
   (->MtHapMap-Variant-3
     landmark
     (Integer/parseInt start)
     (Double/parseDouble quality)
     reference
     alt
     effect
     effect-impact
     functional-class
     codon-change
     amino-acid-change
     gene-name
     transcript-id
     (Integer/parseInt rank)))
  ([landmark start quality reference alt effect effect-impact functional-class codon-change amino-acid-change gene-name transcript-id rank warnings]
   (->MtHapMap-Variant-4
     landmark
     (Integer/parseInt start)
     (Double/parseDouble quality)
     reference
     alt
     effect
     effect-impact
     functional-class
     codon-change
     amino-acid-change
     gene-name
     transcript-id
     (if (clojure.string/blank? rank) "" (Integer/parseInt rank))
     warnings)))

(defn import-mthapmap-variants
  "Expectes a GZIP'ed file"
  [species version filename]
  (info "Import MtHapMap Variants")
  (let [index 1 ;(batch/get-node-index species version)
        idx-query 1 ;(util/index-queryer index)  ; idx-query is only used for landmarks -- otherwise memory usage becomes too large here
        species-label (batch/dynamic-label species)
        version-label (batch/dynamic-label (str species " " version))]

    (with-open [rdr (clojure.java.io/reader (java.util.zip.GZIPInputStream. (clojure.java.io/input-stream filename)))]
      (doseq [data
              (map
                #(apply -->MtHapMap-Variant (clojure.string/split % #"\t"))
                (rest (line-seq rdr)))]

        ; Create the variant node
        (let [node (list ;(batch/create-node-no-cache
                     [index]
                     (filter identity
                             [(batch/dynamic-label "Variant")
                              (batch/dynamic-label (:effect data))
                              (batch/dynamic-label (:effect-impact data))
                              species-label
                              version-label
                              (if (:functional-class data)
                                (batch/dynamic-label (:functional-class data)))])
                     (merge data {:id (str (:landmark data) ":" (:start data)) :end (:start data)}))]

          ; Connect it to the proper chromosomes/scaffolds (landmarks)
          (list ;(util/connect-landmarks
            idx-query
            node
            (:landmark data)
            (:start data)
            (:start data) ; This is the end position, SNP variants have only 1 position
            {:start (:start data) :end (:start data)}
            (:VARIANT_SITE db/rels))

          ; Connect it to any genes and transcripts

          (if (:gene-name data)
            (let [gene 1] ;(batch/get-single index "id" (:gene-name data))]
              (if gene ; Previously @gene
               1)))
;                (batch/create-rel gene node (:HAS_VARIANT db/rels)))))

          (if (:transcript-id data)
            (let [transcript 1] ;(batch/get-single index "id" (:transcript-id data))]
              (if transcript ; previously @transcript
               1))))))))
                ; (batch/create-rel transcript node (:HAS_VARIANT db/rels)))))

          ; TODO: Expand, could add "distance" when appropriate, and exon-rank to the relationship
          ; Could eventually connect it to the exons directly, too.
          ; Possible to connect directly to domains / interproscan motifs? Would have to create a third node, so....


; Init DB and parse data into the db
(defn import-mthapmap-variants-cli
  "Wrapper for internal command import-mthapmap-variants, used to initialize the database."
  [config opts args]
  (println "Variants Import: Mt HapMap Format")
  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))
  (import-mthapmap-variants (:species opts) (:version opts) (first args)))
