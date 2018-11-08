(def config (cheshire.core/parse-stream (clojure.java.io/reader "../odg.wasps/config.json") true))
(odg.db-handler/connect "repl.db" "4G")
(def assembly (odg.assembly/import-fasta "Vespula vulgaris" "1" "data/vvul/processed_assembly.masked.fasta"))
(def annotation (odg.annotation/import-gff "Vespula vulgaris" "1" "data/vvul/augustus.hints.gff3"))
(def proteome (odg.proteome/import-fasta "Vespula vulgaris" "1" "data/vvul/augustus.hints.aa"))
