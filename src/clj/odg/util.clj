(ns odg.util
  (:require
    [odg.batch :as batch]
    [odg.db :as db]
    [taoensso.timbre :as timbre]
    clojure.core.memoize))

(timbre/refer-timbre)

(defn dabs
  [^Double x]
  (java.lang.Math/abs x))

(defn- -create-landmark
  [landmark pos]
  (str (clojure.string/lower-case landmark) ":" (* (int (/ pos 100000)) 100000)))

(defn get-landmarks
  "Entries should be a hash containing at least :landmark, :start, and :stop"
  [landmark start end]
  (distinct [(-create-landmark landmark start) (-create-landmark landmark end)]))

(defn remove-transcript-id
  "Removes the trailing .1 .2 etc from transcript ID's to get the proper gene ID. Do not pass it gene ID's or results may be unexpected."
  [id]
  (clojure.string/replace id #"\.\d+$" ""))

(defn species-ver-root
  [species version]
  (str species version))

; Util fn's for middleware

(defn urldecode [x]
  (if (string? x)
    (java.net.URLDecoder/decode x)
    x))

(defn add-labels [[properties labels] label]
  [properties
   (into
    labels
    (if (vector? label)
      label
      [label]))])

(defn preferred-capitalization [x]
  (get
    {:gene :gene
     :mrna :mRNA
     :cds :CDS
     :exon :exon
     :start_codon :start_codon
     :stop_codon :stop_codon
     :intron :intron
     :protein :protein
     :annotation :Annotation
     :landmark :Landmark
     :landmarkhash :LandmarkHash
     :speciesroot :SpeciesRoot
     :blastresult :BlastResult
     :interproscan :InterProScan}
    (keyword
      (clojure.string/lower-case
        (name x)))
    x))

; Middleware fn's

; Node specific middleware
; Accepts a node definition, returns a node definition
(defn wrap-urldecode [[properties labels]]
  [(zipmap (keys properties) (map urldecode (vals properties)))
   labels])

(defn wrap-add-label-from-type [[properties labels]]
  [properties
   (into labels [(batch/dynamic-label (:type properties))])])

; Returns a fn
(defn wrap-add-label
  ([label]
   (let [dyn-label (batch/dynamic-label label)]
     (fn [node] (add-labels node dyn-label))))
  ([node label]
   (add-labels node (batch/dynamic-label label))))

; Returns a fn
(defn wrap-add-labels
  ([labels]
   (fn [node] (add-labels node labels)))
  ([node labels]
   (add-labels node labels)))

(defn wrap-create-odg-id-from-properties
  [species
   version
   filename
   [properties labels]]
  [(assoc
    properties
    :odg-id
    (str
      filename
      "."
      species
      "."
      version
      "."
      ((some-fn ; At this point id should be covered, but just in case
         :id
         :pacid
         :geneid
         :gene_id
         :gene-id
         :transcript_id
         :transcript
         :protein_id
         :tss_id
         :oid
         :locus_tag
         :product
         :note
         :other_name
         :name)
       properties)))
   labels])
