(ns odg.proteome
  (:require [digest :as digest]
            [biotools.fasta :as fasta]
            [odg.db :as db]
            [taoensso.timbre :as timbre]
            [odg.batch :as batch]
            [odg.job :as job]
            [odg.util :as util]
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

(defn create-node
  [protein-entry]
  (-> [(val protein-entry) []] ; Start node entry with no labels
    util/wrap-urldecode
    (util/wrap-add-field :id (key protein-entry))
    (util/wrap-add-field :type "Protein")
    (util/wrap-add-label "Protein")
    (util/wrap-merge-properties (into {} (get-attributes-if-any (:protein_definition_header (val protein-entry)))))
    util/wrap-add-missing-id))

(defn create-rels
  [job nodes]
  (let [id-map (into {} (map (juxt odg.job/propid odg.job/id) (:nodes job)))]
    (filter
     identity
     (for [[node labels] nodes]
      (do
       ;(debug (:id node) (get id-map (:id node)))
       (if-let [anno-id (get id-map (:id node))]
         (odg.job/rel (:HAS_PROTEIN db/rels) (:odg-id node) anno-id)))))))

; TODO: Also link protein to the gene with a "HAS_PROTEIN" relationship...
; not to the mRNA (although that is good too, maybe best)

; Called import-fasta in case there are future proteomes in another format
(defn import-fasta
   [species version filename job]
   (info "Importing proteome for" species version filename)
   (let [data (get-from-file filename)

         species-label (batch/dynamic-label species)
         version-label (batch/dynamic-label (str species " " version))
         filename-label (batch/dynamic-label (batch/convert-name filename))

         nodes (doall
                 (map
                   (fn [x]
                    (-> x
                     (util/wrap-add-labels [species-label version-label filename-label])
                     (util/wrap-create-odg-id-from-properties species version filename)
                     (util/wrap-add-property :odg-filename filename)
                     (util/wrap-convert-to-node)))
                   (map create-node data)))

         rels (create-rels job nodes)]

     (when-not (= (count nodes) (count rels))
       (warn "Count of Nodes does not match count of Rels"))

     {:indices [(batch/convert-name species version)]
      :nodes-update-or-create nodes
      :rels rels}))
