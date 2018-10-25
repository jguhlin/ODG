(ns odg.proteome
  (:require [digest :as digest]
            [biotools.fasta :as fasta]
            [odg.db :as db]
            [taoensso.timbre :as timbre]
            [odg.batch :as batch]
            [odg.db-handler :as dbh]))

(timbre/refer-timbre)

; For testing...
; (def a (import-proteome "950" "1" "G:\\Development\\odg\\data\\950\\950_genes.cleaned.fa"))

(defn third [x] (nth x 2))

(defn get-from-file
  [filename]
  (with-open [rdr (clojure.java.io/reader filename)]
    (into {}
          (map
            (fn [r] {(:id r)
                     {:length (count (:seq r))
                      :protein_definition_header (:header r)
                      :md5 (digest/md5 (apply str (:seq r)))}})
            (fasta/parse rdr)))))


; Works for GLIMMER and similar programs, may not work for all programs
(defn get-gene-id [id]
  (second (re-find #"(.*)[\._]" id)))

(defn get-attributes-if-any [line]
  (map
    (fn [[x y]]
      (case (clojure.string/lower-case x)
        "id"       ["gene-id" y] ; Hoping that this is the case.....
        "species"  ["protein-species" y] ; Shouldn't come up
        "version"  ["protein-version" y]
        "length"   ["protein-length" y]
        "md5"      ["protein-md5" y]
                   [x y]))
    (let [x (map
              (juxt second third)
              (filter
                identity
                (concat
                  (re-seq #"(\w+):(.+?)\s" line)
                  (re-seq #"(\w+?)=(.+?)(;|$)" line)
                  (re-seq #"(\w+?)=(.+?)\s" line))))]

      (if
        (> (count x) 1)
        (let [a (drop-last x)
              y (last x)

              final-def (second
                          (re-find
                            (re-pattern
                             (str
                              "("
                              (java.util.regex.Pattern/quote (second y))
                              ".+)$"))
                            line))]



         (conj a [(first y) final-def]))))))

(defn node-definition
  [labels species version x]
  (let [id (key x)
        data (val x)]
    [(merge
       {:id id
        :species species
        :version version
        :length (:length data)
        :protein_definition_header (:protein_definition_header data)
        :md5 (:md5 data)}
       (into
         {}
         (for [[k v] (get-attributes-if-any (:protein_definition_header data))]
           [(keyword k) v])))
     (labels [(:PROTEIN batch/labels)])]))


; TODO: Also link protein to the gene with a "HAS_PROTEIN" relationship... not to the mRNA (although that is good too, maybe best)
; Called import-fasta in case there are future proteomes in another format
(defn import-fasta
  [species version filename]
  (info "Importing proteome for" species version filename)
  (let [data (get-from-file filename)
        proteins-existing (into
                            {}
                            (dbh/batch-get-data
                              {:index (batch/convert-name species version)
                               :action :query
                               :query (keys data)}))

        existing-set (apply hash-set (keys proteins-existing))

        proteins-not-existing (remove (fn [x]
                                        (existing-set (key x)))
                                      data)

        species-label (batch/dynamic-label species)
        version-label (batch/dynamic-label (str species " " version))
        labels (partial into [species-label version-label])

        create-node (partial node-definition labels species version)

        nodes (distinct
                (doall
                  (map create-node data)))]



    {:indices [(batch/convert-name species version)]
     :nodes-update-or-create nodes
     :rels (distinct
             (doall
               (map
                 (fn [x]
                   [(:HAS_PROTEIN db/rels)
                    (vec (dbh/get-ids x))
                    (:id x)
                    {}])
                 nodes)))}))

;     :rels (distinct
;             (doall
;               (map
;                 (fn [x]
;                   [(:HAS_PROTEIN db/rels)
;                    (if-let [x
;                             (get
;                               (into
;                                 {}
;                                 (get-attributes-if-any
;                                   (:protein_definition_header
;                                     (val x))))
;                               "gene-id")]
;                        x
;                      ;else
;                      (get-gene-id (key x)))
;                    (key x)
;                    {}])
;               data)))
     ;:exact-ids true
