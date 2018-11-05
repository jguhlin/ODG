(ns odg.gen-database
  (:require clojure.java.io
            [taoensso.timbre :as timbre]
            [me.raynes.fs :as fs]
            [clojure.string]
            [clojure.pprint :as pp]
            [odg.db :as db]
            [clojure.core.reducers :as r]
            [cheshire.core :refer :all]
            [odg.assembly :as assembly]
            [odg.proteome :as proteome]
            [clojure.tools.cli]
            [odg.batch :as batch]
            [odg.blast :as blast]
            [odg.expression :as expression]
            [odg.annotation :as annotation]
            [odg.ontologies :as ontologies]
            [odg.interproscan :as interproscan]
            [odg.pathways :as pathways]
            [odg.miscellaneous :as miscellaneous]
            [odg.enzyme :as enzyme]
            [odg.hmmer :as hmmer]
            [odg.config :as config]
            [odg.external-manager :as external-manager]
            [odg.query :as query]
            [odg.scripts :as scripts]
            [taoensso.timbre :as timbre]
            [clojure.math.combinatorics :as combo]
            [odg.uniprot :as uniprot]
            [odg.db-handler :as dbh]
            [odg.biogrid :as biogrid]
            [odg.domine :as domine]
            [biotools.psimitab25 :as psimitab]))

(use 'clojure.stacktrace)

; TODO:
;   Set chromosomes to circular...

;Finished:
;  FASTA - Assembly
;  GFF3
;  Expression
;  OBO
;  Integrate expression teste fn to main expression fn
;  Pathways
;  Enzyme
;  InterProScan Results


;Todo:
;  OBO Associations
;  Blastn - Anchors
;  Blastn - Comparative
;  GTF
;  Standardize EC numbers, import additional ExPASY ENZYME file for definitions at the high levels (ex: EC:2.2.2.- and 2.-.-.- and 2.- and 1.8.2.- and 1.8.2)

(timbre/refer-timbre)

; base: /localhome/msiworkspace/odg/data/
(defn get-mirbase-files
  [genomes]
  (map
    (juxt
      #(str "data/results/blastn/" (scripts/calc-hairpin-result-name (batch/convert-name (:name %) (:version %))))
      #(:name %)
      #(:version %))
    (filter
      #(= (count (:mirbase_prefix %)) 3) ; Must be a length of 3
      (vals genomes))))

(defn get-eligible-proteomes
  [genomes]
  (filter
    #(> (count (:proteome %)) 0) ; If we have 0 proteome files, then there is no need to continue in this part.
    (vals genomes)))

; Main function that generates the database here...

; Working on switching
; Switch to using dbh as in test-import and test-import2
(defn go
  [config options args]

  (info "Beginning database import: Connecting to the database")
  (dbh/connect (get-in config [:global :db_path]) "4G")

  ; Load mapping file if it exists
  (when (fs/exists? "data/misc/mapping.tsv")
    (info "Loading mapping file")
    (dbh/load-mapping "data/misc/mapping.tsv"))


  (info "Importing ontologies")
  (when-not (clojure.string/blank? (get-in config [:global :GO]))
    (ontologies/import-obo "GO" (get-in config [:global :GO])))

  (when-not (clojure.string/blank? (get-in config [:global :PO]))
    (ontologies/import-obo "PO" (get-in config [:global :PO])))

  (when-not (clojure.string/blank? (get-in config [:global :MI]))
    (ontologies/import-obo "MI" (get-in config [:global :MI])))


  ; To get this to work had to manually find/replace UniPathway: to UPa: in interproscan results files...
  ; Also in go.obo
  ; Need to fix, also not importing many UniPathway XREF's
  ; Probably unable to due to not following the format entirely for OBO
  (when (fs/exists? "data/misc/unipathway.obo")
    (ontologies/import-obo "UPa" "data/misc/unipathway.obo"))

  (let [interproscan-final (atom {})
        do-the-merge       (fn [x y] (merge-with (comp distinct concat) x y))]

   (doseq [[key genome] (:genomes config)]

     (info "Beginning import of: " (:name genome))

     (dbh/submit-batch-job
       ; Update or create, in case we are working on an existing database. Not recommended!
       {:nodes-updates-or-create
        [; Create the Root node
           [{:id "Root"} [(batch/dynamic-label "ROOT")] []]

         ; Create the species node
           [{:id (:name genome)}
            [(batch/dynamic-label "Genome") (batch/dynamic-label "Species")]
            [
             [(:PARENT_OF db/rels) "Root" (:name genome)]]]


         ; Create the species version node
           [{:id (str (:name genome) (:version genome))}
            [(batch/dynamic-label "Genome") (batch/dynamic-label "Species") (batch/dynamic-label "SpeciesVersion")]
            [
             [(:PARENT_OF db/rels) (:name genome) (str (:name genome) (:version genome))]]]]

        :indices ["main"]})


     (let [assembly (apply
                      merge-with
                      (comp distinct concat)
                      (map
                        (fn [fasta]
                          (odg.assembly/import-fasta
                            (:name genome)
                            (:version genome)
                            (str (:root genome) "/" fasta)))
                        (:assembly genome)))

           annotation (apply
                        merge-with
                        (comp distinct concat)
                        (map
                          (fn [gff]
                            (odg.annotation/import-gff
                              (:name genome)
                              (:version genome)
                              (str (:root genome) "/" gff)))
                          (:annotation genome)))

           proteome (apply
                      merge-with
                      (comp distinct concat)
                      (map
                        (fn [prot]
                          (odg.proteome/import-fasta
                            (:name genome)
                            (:version genome)
                            (str (:root genome) "/" prot)))
                        (:proteome genome)))

           first-batch (merge-with
                         (comp distinct concat)
                         assembly annotation proteome)]

           ; proteome-batch proteome


       (dbh/submit-batch-job first-batch)
       (Thread/sleep 20000)
       ; (dbh/submit-batch-job proteome-batch)

       (when
         (and
           (> (count (:expression_fpkm_tracking genome)) 0)
           (> (count (:expression_gtf genome)) 0))

         (expression/parse
           config
           (:name genome)
           (:version genome)
           (str (:root genome) "/" (first (:expression_fpkm_tracking genome)))
           (str (:root genome) "/" (first (:expression_gtf genome))))))

     (info "[" (:name genome) " " (:version genome) "] InterProScan Import")

     ; Instead of interproscan here, batch in sets of 5 perhaps?
     ; To both get a speed boost AND maintain scalability

     ; Except that the interproscan rels get made each time it is referenced... hmmm
     ; Maybe split out the rels between the proteins and the ipscan stuff and the ipscan metadata nodes ?

     (doseq [interpro (:interproscan genome)]
       (let [ipscan-results (interproscan/import-results
                              (:name genome)
                              (:version genome)
                              (str (:root genome) "/" interpro))

             ipscan-now {
                         :indices (:indices ipscan-results)
                         :nodes-update-or-create (:nodes-update-or-create ipscan-results)
                         :rels (filter
                                 (fn [x] (=
                                           (first x)
                                           (:HAS_ANALYSIS db/rels)))
                                 (:rels ipscan-results))
                         :exact-ids (:exact-ids ipscan-results)}


             ipscan-later {
                           :indices (:indices ipscan-results)
                           :nodes-update-or-create []
                           :rels (remove
                                   (fn [x] (=
                                             (first x)
                                             (:HAS_ANALYSIS db/rels)))
                                   (:rels ipscan-results))
                           :exact-ids (:exact-ids ipscan-results)}]


         (swap! interproscan-final do-the-merge ipscan-later)
         (dbh/submit-batch-job ipscan-now)))

     (info "[" (:name genome) "] Pathway Import"))

     ; Didn't work, not sure why
     ;
     ;(doseq [pathway (:pathway genome)]
     ;  (pathways/import-pathway
     ;    (:name genome)
     ;    (:version genome)
     ;    (str (:root genome) "/" pathway)))

     ; Any more genome-specific things to run here?
       ; Ontological associations
       ; GTF
       ; pathways
       ; blastn results
       ; blastp? probably not
       ;
       ;
       ; Expression import completed
       ; Pathways not working



    ; Must be at the end

   (Thread/sleep 20000)

   (info "Final InterProScan import")
   (dbh/submit-batch-job @interproscan-final))

  (info "BLASTP Imports")
    ; Proteome / BLASTP import
  (let [proteomes (get-eligible-proteomes (:genomes config))]
    (println)
    (println "Importing self-blastp results...")
    (info "Self-blastp imports")
    (doseq [proteome proteomes]
      (let [results-file (str "data/results/blastp/"
                              (scripts/calc-blastp-result-name
                                (batch/convert-name (:name proteome) (:version proteome))
                                (batch/convert-name (:name proteome) (:version proteome))))]
        (if (fs/exists? results-file)
          (do
            (println "Import blastp -- file found" results-file (:name proteome) (:version proteome))
            (Thread/sleep 10000)
            (blast/import-blastp
              (:name proteome) (:version proteome)
              (:name proteome) (:version proteome)
              results-file))
          (warn "File not found: " results-file))))

    (println)
    (println "Importing all-vs-all blastp results...")
    (info "Importing all-vs-all blastp results...")

    (doseq [[x y] (combo/selections proteomes 2)]
      (when
        (not (= x y)) ; Already did self-vs-self
        (info "BLASTP: " (:name x) " " (:version y) " vs " (:name y) " " (:version y))
        (let [results-file (str "data/results/blastp/"
                                (scripts/calc-blastp-result-name
                                  (batch/convert-name (:name x) (:version x))
                                  (batch/convert-name (:name y) (:version y))))]
          (if (fs/exists? results-file)
            (blast/import-blastp
              (:name x) (:version x)
              (:name y) (:version y)
              results-file)
            (warn "File not found: " results-file))))))

  (when-not (clojure.string/blank? (get-in config [:global :DOMINE]))
    (info "Importing DOMINE Interactions")
    (domine/import-interactions (get-in config [:global :DOMINE])))

  (when-not (clojure.string/blank? (get-in config [:global :ENZYME]))
    (info "Enzyme Import")
    (enzyme/import-enzyme (get-in config [:global :ENZYME])))

    ; Check for HMM files in the global directory
  (doseq [file (fs/find-files "data/global" #".*\.hmm\.tbl")]
    (dbh/submit-batch-job
      (hmmer/import-hmmer-tbl (.getAbsolutePath file) nil nil)))

  (info "Pausing for 60s to let other threads finish")

  (Thread/sleep 60000)

  (info "Pause finished, beginning shutdown procedure")

    ;
    ; Database switches to regular, non-batch mode here
    ; To facilitate creating indexes and such
    ;
    ; !!!!!!!!!!!!!!!!!!!!
    ; !!!!!!!!!!!!!!!!!!!!
    ; !!!!!!!!!!!!!!!!!!!!

  (dbh/shutdown)

  (Thread/sleep 10000)

  (info "Beginning final steps")
  (info "Mounting database in embedded (non-batch) mode")
  (db/connect (get-in config [:global :db_path]) (:memory options))

  (db/query "CREATE INDEX ON :Gene(id)" {}
            (info "Creating node index on :Gene(id)"))

  (db/query "CREATE INDEX ON :gene(id)" {}
            (info "Creating node index on :gene(id)"))

  (db/query "CREATE INDEX ON :Annotation(id)" {}
            (info "Creating node index on :Annotation(id)"))

  (db/query "CREATE INDEX ON :Protein(id)" {}
            (info "Creating node index"))

  (when-not (clojure.string/blank? (get-in config [:global :GO]))
    (db/query "CREATE INDEX ON :GO(id)" {}
            (info "Creating node index"))
    (db/query "CREATE INDEX ON :GO(name)" {}
            (info "Creating node index")))

  ; Get ordered list by chr, ignore strandedness, sort by gene.start
  ; TODO: This is here & in annotation.clj
  (db/query (str "MATCH (x:Landmark)
                    <-[:LOCATED_ON]-
                      (:LandmarkHash)
                    <-[:LOCATED_ON]-(gene)
                  WHERE (gene:gene OR gene:Annotation OR gene:Gene
                         or gene:annotation)
                  RETURN DISTINCT x.species, x.version, x.id,
                    gene.`odg-filename` AS filename, gene
                  ORDER BY x.species, x.version, x.id, filename, gene.start") {}
            (info "Creating relationships between gene neighbors...")
            (doseq [[[species version id filename] genes]
                    (group-by
                     (fn [x]
                       [(get x "x.species")
                        (get x "x.version")
                        (get x "x.id")
                        (get x "filename")])
                     results)]
              (doseq [[a b] (partition 2 1 genes)]
                ; We are in a transaction, so don't use db/create-relationship here!
                (.createRelationshipTo (get a "gene") (get b "gene") (:NEXT_TO db/rels)))))

  (Thread/sleep 10000)

  (info "Connecting reciprocal top blast hits")
  (db/query (str "MATCH (x:BLASTP)-[:BLASTP_TOP_HIT]->(y:BLASTP)
                      WHERE (x)<-[:BLASTP_TOP_HIT]-(y)
                    RETURN x,y") {}
            (info "Creating relationships between reciprocal blastp top hits...")
            (doseq [[a b] (map (fn [x] [(get x "x") (get x "y")]) results)]
              ; We are in a transaction, so don't use db/create-relationship here!
              (.createRelationshipTo a b (:BLASTP_RECIPROCAL_TOP_HIT db/rels))))

  (Thread/sleep 120000))
