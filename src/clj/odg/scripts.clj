(ns odg.scripts
  (:require [odg.batch :as batch]
            [biotools.fasta :as fasta]
            [me.raynes.fs :as fs]
            [clojure.math.combinatorics :as combo]))

; Normalize names across scripts for ease of import later....

(defn calc-hairpin-result-name
  [genome]
  (str "blastn-hairpins-" genome ".tsv"))

(defn calc-blastp-result-name
  [x y]
  (str "blastp-comparison-" x "-vs-" y ".tsv"))


; Filter out genomes that lack a protein file
(defn calc-prot-dbs
  [genomes]
  (map
    (juxt
      #(batch/convert-name (:name %) (:version %))
      #(batch/convert-name (:name %) (:version %) "proteins")
      :proteome
      :root)
    (filter
      #(> (count (:proteome %)) 0) ; If we have 0 proteome files, then there is no need to continue in this part.
      (vals genomes))))


; Filter out genomes without an assembly
(defn calc-assembly-dbs
  [genomes]
  (map
    (juxt
      #(batch/convert-name (:name %) (:version %))
      #(batch/convert-name (:name %) (:version %) "assembly")
      :assembly
      :root)
    (filter
      #(> (count (:assembly %)) 0) ; If we have 0 assembly files, then there is no need to continue in this part.
      (vals genomes))))


; Only use genomes that have miRBase abbreviations provided
; TODO: Also, need to make sure an assembly is provided
(defn get-mirbase-abbreviations
  [genomes]
  (map
    (juxt
      #(batch/convert-name (:name %) (:version %))
      :mirbase_prefix)
    (filter
      #(= (count (:mirbase_prefix %)) 3) ; Must be a length of 3
      (vals genomes))))

; Only use genomes that have GFF files and assembly files specified
; Otherwise we can not extract full genomic sequence of the gene boundaries
(defn get-gff-files
  [genomes]
  (map
    (juxt
      #(batch/convert-name (:name %) (:version %))
      :assembly
      :annotation)
    (filter
      #(and
         (> (count (:assembly %)))
         (> (count (:annotation %)))) ; Must be a length of 3
      (vals genomes))))



(defn create-blastdb-scripts
  [genomes]
  ; Generate blastdb's for each proteome
  (let [cwd (.toString fs/*cwd*)
        prot-dbs (calc-prot-dbs genomes)
        assembly-dbs (calc-assembly-dbs genomes)]
    (fs/mkdir "db_scripts")
    (fs/mkdirs "data/results/blastp")
    (fs/mkdirs "data/results/blastn")
    (with-open [w (clojure.java.io/writer (str cwd "/db_scripts/makeblastdbs.sh"))]
      (.write w
        (apply
          str
          "#!/bin/bash\n"
          "cd " cwd "\n"
          "mkdir tmp\n"
          "mkdir dbs\n"
          "cd dbs\n"

          ; Create blastp db's
          (concat
            (for [[name db-name files root] prot-dbs]
              (let [all-file (str "../tmp/" db-name ".all-proteins.fa")
                    single-file (str "../" root "/" (first files))
                    rel-files (map #(str "../" root "/" %) files)]
                (str
                  (if (> (count files) 1) ; Handle multiple proteomes by concatenating all into one file and building the database from that.
                    (str "cat " (clojure.string/join " " rel-files) " > " all-file "\n"
                         "diamond makedb -in " all-file " -out " db-name " -dbtype prot\n")
                    (str "diamond makedb -in " single-file " -out " db-name " -dbtype prot\n")))))

            ; Create blastn db's
            (for [[name db-name files root] assembly-dbs]
              (let [all-file (str "../tmp/" db-name ".all-assemblies.fa")
                    single-file (str "../" root "/" (first files))
                    rel-files (map #(str "../" root "/" %) files)]
                (str
                  (if (> (count files) 1) ; Handle multiple assemblies by concatenating all into one file and building the database from that.
                    (str "cat " (clojure.string/join " " rel-files) " > " all-file "\n"
                         "makeblastdb -in " all-file " -out " db-name " -dbtype nucl\n")
                    (str "makeblastdb -in " single-file " -out " db-name " -dbtype nucl\n")))))))))))
              ; TODO: blastn can't be diamond, but we can use minimap2

(defn create-blastn-scripts
  [global genomes]
  (when-not (clojure.string/blank? (:mirbase_hairpins global))
    (let [assembly-dbs  (apply merge (for [g (calc-assembly-dbs genomes)] {(first g) g}))
          cwd           (.toString fs/*cwd*)
          dbs           (str cwd "/dbs/")
          tmp           (str cwd "/tmp/")
          hairpins      (str cwd "/" (:mirbase_hairpins global))
          abbreviations (get-mirbase-abbreviations genomes)
          abbreviations-filter-list (apply hash-set (map second abbreviations))]


      ; First we must extract out the hairpin sequences...
      (with-open [rdr (clojure.java.io/reader hairpins)]
        (let [hairpins-seq   (group-by
                               (fn [x] (subs (:header x) 0 3))
                               (filter
                                 (fn [x]
                                   (get abbreviations-filter-list (subs (:header x) 0 3)))
                                 (fasta/parse rdr)))]
          (doseq [[genome abbreviation] abbreviations]
            (println "Exporting hairpins for" genome "using abbreviation" abbreviation)
            (with-open [w (clojure.java.io/writer (str tmp genome "-hairpins.fasta"))]
              (doseq [entry (get hairpins-seq abbreviation)]
                (.write w (str (:header_raw entry) "\n"))
                (.write w (str (apply str (:seq entry)) "\n")))))))

      ; Export a BED file with gene IDs for each assembly / accession
      ; Not abbreviations! but gff-filter, in progress still though....
      (doseq [[genome abbreviation] abbreviations])



      {:header
       (str "#!/bin/bash\n"
            "cd " cwd "\n"
            "mkdir tmp\n"
            "mkdir -p data/results/blastn\n"
            "cd data/results/blastn\n")
       :commands
       (for [[genome abbreviation] abbreviations]
         (let [[_ db _ _] (get assembly-dbs genome)]
           (str "blastn -query " tmp genome "-hairpins.fasta -outfmt \"6 std qlen slen\" -db " dbs db
                " -out " (str cwd "/data/results/blastn/" (calc-hairpin-result-name genome)))))})))

       ; Need to add in-species blastn comparison
       ; Must extract out full sequence (not just mRNA or CDS, but full genomic sequence and some flanking region perhaps)



(defn create-blastp-scripts
  [threads genomes]
  (let [cwd       (.toString fs/*cwd*)
        prot-dbs  (combo/selections (calc-prot-dbs genomes) 2)
        dbs       (str cwd "/dbs/")
        tmp       (str cwd "/tmp/")]
    {:header
     (str "cd " cwd "\n"
          "mkdir tmp\n"
          "mkdir -p data/results/blastp\n"
          "cd data/results/blastp\n")
     :commands
     (for [[x y] prot-dbs]
       (let [fasta-file (if (> (count (nth x 2)) 1)
                          (str tmp (second x) ".all-proteins.fa")
                          (str cwd "/" (nth x 3) "/" (first (nth x 2))))]

         (str "diamond blastp -query " fasta-file
              " -outfmt \"6 std qlen slen\""
              " --more-sensitive "
              " -num_threads " threads
              " -soft_masking false"
              " -db " dbs (second y)
              " -culling_limit 100"
              " -evalue 0.1"
              " -out " (str cwd "/data/results/blastp/" (calc-blastp-result-name (first x) (first y))))))}))




; TODO: Intraspecies blastn comparisons
; TODO: Remove intraspecies blastp comparisons - not usually useful...
; TODO: blastx / tblastx ? Even if just early stages...

(defn write-script
  [options filename script]
  (let [
        split-jobs (:split-jobs options)
        split-jobs-cmd (:split-jobs-cmd options)
        pbs? (:pbs options)
        header? (cond
                  (and pbs? (not (:header options))) "scripts/pbs/header.txt"
                  :else (:header options))

        at-a-time (:at-a-time options)

        commands (if (zero? split-jobs) (list (:commands script)) (partition-all split-jobs (:commands script)))
        i (atom 0)
        n (atom 0)
        cwd (.toString fs/*cwd*)
        header (if header?
                 (slurp header?)
                 nil)]


    (doseq [command-list commands]
      (reset! n 0)
      (let [script-number (if (= 1 (count commands)) "" (str "-" @i))
            file-extension (if pbs? ".job" ".sh")]

        (with-open [w (clojure.java.io/writer (str cwd "/db_scripts/" filename script-number file-extension))]
          (if header?
            (.write w header)
            (.write w "#!/bin/bash\n"))

          ; Not a true header, but commands to run before the rest of the script is run.
          (.write w (:header script))

          (cond
            pbs? (doseq [cmd command-list]
                   (.write w (str "pbsdsh -n " @n " " cmd " & \n"))
                   (swap! n inc))
            at-a-time (doseq [cmd command-list]
                        (swap! n inc)
                        (.write w (str cmd " &\n"))
                        (when (= @n 8)
                          (.write w "wait\n")
                          (reset! n 0)))
            (nil? split-jobs-cmd) (.write w (apply str (map #(str % "\n") command-list)))
            :else (doseq [cmd command-list]
                    (let [pre-cmd (clojure.string/replace split-jobs-cmd #"\[N\]" (str @n))]
                      (.write w (apply str pre-cmd " " cmd " \n"))
                      (swap! n inc))))
          (when pbs? (.write w "wait \n")))
        (swap! i inc)))))



(defn create
  [config options args]

  (create-blastdb-scripts (:genomes config))

  (if-let [scripts (create-blastn-scripts (:global config) (:genomes config))]
    (write-script
      options
      "blastn"
      scripts))

  (if-let [scripts (create-blastp-scripts (:num-threads options) (:genomes config))]
    (write-script
      options
      "blastp"
      scripts)))

  ; tblastn - Blast proteins against assemblies
