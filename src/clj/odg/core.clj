(ns odg.core
  (:gen-class :main true)
  (:require clojure.java.io
            clojure.string
            [clojure.core.reducers :as r]
            [cheshire.core :refer :all]
            [odg.assembly :as assembly]
            [clojure.tools.cli]
            [odg.batch :as batch]
            [odg.blast :as blast]
            [odg.expression :as expression]
            [odg.annotation :as annotation]
            [odg.ontologies :as ontologies]
            [odg.proteome :as proteome]
            [odg.interproscan :as interproscan]
            [odg.pathways :as pathways]
            [odg.miscellaneous :as miscellaneous]
            [odg.enzyme :as enzyme]
            [odg.config :as config]
            [odg.external-manager :as external-manager]
            [odg.query :as query]
            [odg.scripts :as scripts]
            [taoensso.timbre :as timbre]
            [odg.uniprot :as uniprot]
            [odg.gen-database :as gen-database]
            [odg.biogrid :as biogrid]
            [biotools.psimitab25 :as psimitab]
            [odg.variants :as variants]
            [odg.query-server :as query-server]))


(set! *warn-on-reflection* true)

(timbre/refer-timbre)
;(timbre/set-config! {:appenders
;                     {:standard-out
;                      {:enabled? true}
;                      :spit
;                      {:enabled? true
;                       :async? true
;                       :spit-filename "log/run.log"
;                       :fn (fn
;                             [{:keys [ap-config output]}]
;                             (when-let [filename (:spit-filename ap-config)]
;                               (println output)
;                               (try (spit filename (str output "\n") :append true)
;                                 (catch java.io.IOException _))

(timbre/set-level! :debug)


(defn- -print-help-message [banner]
  (println "Usage: java -jar odg.jar [options] [arguments]")
  (println "The following actions are available.")
  (println "     initiate            Initiate the database using all files available in config.json, implies -e is off")
  (println "     import-fasta        Import a single FASTA file as the assembly for the specified species and version.")
  (println "     import-gff          Import a single GFF file (implies -e) into an existing database. Requires species and version to be set.")
  (println "     anchor-blast        Anchor blast results to landmarks. Requires species, version, and type to be set, and has arguments.")
  (println)
  (println)
  (println banner)
  (println)
  (println "java -jar odg.jar -s  \"Medicago truncatula\" -v \"3.5v5\" -t \"miRNA\" -n \"Known miRNA Hairpin\" anchor-blast [Min ID%] [Min Alignment Length] [blast results file]  ")
  (println)
  (println "Example usage: java -jar odg.jar -s \"Medicago truncatula\" -v \"3.5v5\" import-gff genes.gff ")
  (println)
  (println "This program requires that the database be offline in order to do work.")
  (println))

(defn- -help
  "Prints the banner and help message."
  ([banner]
   (-print-help-message banner)
   (System/exit 0))
  ([banner message]
   (-print-help-message banner)
   (println "An error occurred, please fix your command.")
   (println "Error:" message)
   (System/exit 0)))

(defn -main [& args]
  (println) ; Make debugging output easier to understand..
  (info "Starting execution")
  (let [[options args banner]
        (clojure.tools.cli/cli
          args
          ["-h" "--help" "Show help" :flag true :default false]
          ["-c" "--config" "Specify Configuration File (Defaults: conf.json)" :default "config.json"]
          ["-e" "--existing" "Work on an existing database" :default false :flag true]
          ["-s" "--species" "Species, examples --species \"Medicago truncatula\""]
          ["-v" "--version" "Version of the species, example -v 3.5v5 "]
          ["-x" "--second-species" "Used when a second species must be specified (blastn of species vs. species, for example)"]
          ["-y" "--second-version" "Used when a second species must be specified"]
          ["-p" "--prefix" "Prefix all gene IDs with this string followed by an underscore" :default false :flag false]
          ["-t" "--type" "Import objects as specified type. Ex: blast results" :default false :flag false]
          ["-n" "--note" "Add an additional field \"note\" to all objects created with supplied text." :default false :flag false]
          ["-f" "--full-alignment" "For BLAST related. Only import when qlen/alignment_length = 1"]
          ["-t" "--num-threads" "Number of threads to indicate when generating scripts" :default 4 :flag false]
          ["-o" "--output-file" "Output filename beginning" :default "output"]
          ["-m" "--memory" "Memory, or a percentage, to allocate for the DB -- should be formatted like: 80% or 12GB" :default "80%"]
          ["--subjects" "--subjects" "For some comparison, specify which species to compare to -- Format such as 1,2,3,4,5 or 4,3,5" :default false :flag false]
          ["--split-jobs" "--split-jobs" "Split jobs into multiples in order to facilitate batch processing" :default 0 :parse-fn #(read-string %)]
          ["--split-jobs-cmd" "--split-jobs-cmd" "Prepend specified command - helps with batching jobs -- may specify [N] to substitute process ID (0 based)" :default nil]
          ["--at-a-time" "--at-a-time" "Run up to N number of jobs at a time using BASH shell's built in mechanism - Not for use with --pbs or --split-jobs" :default nil :parse-fn #(read-string %)]
          ["--pbs" "--pbs" "Set to run in PBS environment, use with --split-jobs" :default false :flag true]
          ["--header" "--header" "Set header for generated scripts. Default: scripts/pbs/header.txt when --pbs is set, otherwise nil" :default nil])]

    (when (:help options)
      (-help banner))

    (if (zero? (count args)) (-help banner))

    (let [config (delay (parse-stream (clojure.java.io/reader (:config options)) true))]
      (case (first args)
        ;        "preprocess" (do
        ;                       (preprocess/main config options))
        ;       "worker" (do
        ;                 (worker/main config options))
        "create-db"  (p :gen-database (gen-database/go @config options (rest args)))
        "import-gff" (do
                       (if (nil? (:species options)) (-help banner "Species is blank. Define with -s option."))
                       (if (nil? (:version options)) (-help banner "Version is blank. Define with -v option."))
                       (time (annotation/import-gff-cli @config options (rest args))))
        "import-gtf" (do
                       (if (nil? (:species options)) (-help banner "Species is blank. Define with -s option."))
                       (if (nil? (:version options)) (-help banner "Version is blank. Define with -v option."))
                       (time (annotation/import-gtf-cli @config options (rest args))))

        "import-fasta" (do
                         (if (nil? (:species options)) (-help banner "Species is blank. Define with -s option."))
                         (if (nil? (:version options)) (-help banner "Version is blank. Define with -v option.")))
      ;(assembly/import-fasta-cli @config options (rest args)))
        "anchor-blast" (do
                         ; Explain that this is blastn only!
                         (if (not (:species options)) (-help banner "Species is blank. Define with -s option."))
                         (if (not (:version options)) (-help banner "Version is blank. Define with -v option."))
                         (if (not (:type options)) (-help banner "Type is blank. Define with -t option."))
                         (blast/anchor-blast-cli @config options (rest args)))
        "import-annotation-blastn" (do
                                     ; Need to document this one yet!
                                     (if (not (:species options)) (-help banner "Species is blank. Define with -s option."))
                                     (if (not (:version options)) (-help banner "Version is blank. Define with -v option."))
                                     (if (not (:second-species options)) (-help banner "Second species is blank. Define with -s2 option."))
                                     (if (not (:second-version options)) (-help banner "Second version is blank. Define with -v2 option."))
                                     (blast/import-annotation-blastn @config options (rest args)))
        "import-blastp"
                          ; Need to document this one yet!
                          ;(if (not (:species options)) (-help banner "Species is blank. Define with -s option."))
                          ;(if (not (:version options)) (-help banner "Version is blank. Define with -v option."))
                          ;(if (not (:second-species options)) (-help banner "Second species is blank. Define with -s2 option."))
                          ;(if (not (:second-version options)) (-help banner "Second version is blank. Define with -v2 option."))
                          (blast/import-blastp-cli @config options (rest args))
        "import-fpkm-values" (do
                               (if (not (:species options)) (-help banner "Species is blank. Define with -s option."))
                               (if (not (:version options)) (-help banner "Version is blank. Define with -v option.")))

;                               (expression/parse-cli @config options (rest args)))

        ; TYPE no longer needed for import-obo
        "import-obo" (do
                       ; OBO v1.2 format, usually from: http://www.geneontology.org/GO.downloads.ontology.shtml
                       (if (not (:note options)) (-help banner "Note is required for OBO import."))
                       (if (not (:type options)) (-help banner "Type must be specified for OBO import."))
                       (time (ontologies/import-cli @config options (rest args))))
        "import-ipscan" (do
                          ; Interproscan rc5 format
                          (if (not (:species options)) (-help banner "Species is blank. Define with -s option."))
                          (if (not (:version options)) (-help banner "Version is blank. Define with -v option."))
                          (interproscan/import-results @config options (rest args)))
        "import-pathway" (do
                           ; Import pathways, need species, version, and pathway file. Best if done post-GO import
                           (if (not (:species options)) (-help banner "Species is blank. Define with -s option."))
                           (if (not (:version options)) (-help banner "Version is blank. Define with -v option."))
                           (pathways/import-cli @config options (rest args)))
        "import-mthapmap-variants" (variants/import-mthapmap-variants-cli @config options (rest args))
        "import-targetp" (do
                           (if (not (:species options)) (-help banner "Species is blank. Define with -s option."))
                           (if (not (:version options)) (-help banner "Version is blank. Define with -v option."))
                           (miscellaneous/targetp @config options (rest args)))
        "create-next-to" (annotation/create-gene-neighbors @config options (rest args))
        "import-enzyme" (enzyme/import-cli @config options (rest args))
        "import-uniprot" (uniprot/parse @config options (rest args))
        "create-jobs" (external-manager/output-commands @config options (rest args))
        "config" (config/start-server options (rest args))
        "query-server" (query-server/start-server @config options (rest args))
        "create-scripts" (scripts/create @config options (rest args))
        "import-po-associations" (ontologies/associations-cli @config options (rest args))
        "import-biogrid" (biogrid/import-cli @config options (rest args))

        ; Query Fn's

        "query-tassel" (query/query-tassel @config options (rest args))
        "query-gene-list" (query/gene-list @config options (rest args))
        "annotate-gene-list" (query/annotate-gene-list @config options (rest args))
        "expression" (query/expression @config options (rest args))
        "orthologs" (query/orthologs @config options (rest args))
        "coexpression-network" (query/coexpression-network @config options (rest args))
        "ECs-from-GO" (query/ECs-from-GO @config options (rest args))
        "get-biological-processes" (query/biological-processes @config options (rest args))
        "get-biological-processes-all-genes" (query/biological-processes-all-genes @config options (rest args))
        "get-ipr-terms-all-genes" (query/ipr-terms-all-genes @config options (rest args))
        "get-pfam-domains-all-genes" (query/pfam-domains-all-genes @config options (rest args))
        "list-species" (query/print-species @config options)
        "annotate-species-blast" (query/annotate-genes-blast-hits @config options (rest args))

        ; Testing Fn's
        "calculate-correlations" (expression/calculate-correlations @config (:species options) (:version options) (nth args 1) (nth args 2))

        ; else
        (-help banner (str "Unrecognized command: " (first args))))))
  (info "Execution complete"))

;(def config (parse-stream (clojure.java.io/reader "config.json") true))
;(query/gene-list config {:species "Medicago truncatula" :version "4.0" :output-file "cnv_analysis"} ["G:/development/ncr-paper/cnv_list.txt"])
