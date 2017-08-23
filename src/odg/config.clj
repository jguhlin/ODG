(ns odg.config
  "Runs the configuration server"
  (:require
            [cheshire.core :refer :all]
            [me.raynes.fs :as fs]
            [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.adapter.jetty :refer [run-jetty]]      
            [compojure.core :refer [defroutes ANY GET POST]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [odg.web.layout :as layout]
            [clojure.java.io :as io]))
            

; command for interproscan 
; interproscan.sh -i test_proteins.fasta -f tsv --iprlookup --goterms --pathways

; Utility fn
; (first (remove clojure.string/blank? ["" "1" "2" "3" "hello"]))

(defn first-non-blank [coll]
  (first
    (remove 
      clojure.string/blank?
      coll)))

(def config-file (atom "config.json"))
(def config (atom {}))
(def species-version-config (atom {}))
(def is-new? (atom false))

(defn filter-fasta-files
  [contents]
  (filter 
    #(re-find #"(fa|fasta|fna|faa)$" %) 
    contents))

(defn filter-gff-files
  [contents]
  (filter #(re-find #"gff" %) contents))

(defn- guess
  [re contents]
  (first 
    (filter 
      #(re-find re %) 
      contents)))
  
(defn guess-protein-file
  [contents]
  (guess 
    #"(protein|peptide|pep|prot)"  
    (filter-fasta-files contents)))

(defn guess-assembly-file
  [contents]
  (guess
    #"(assembly|asm|pseudomol|genome).+(fa|fasta|fna)" 
    (filter-fasta-files contents)))

(defn guess-annotation-file
  [contents]
  (if-let [file (guess
                  #"(gene|exon)"
                  (filter-gff-files contents))]
    file
    (first (filter-gff-files contents))))

(defn guess-pathway-file
  [contents]
  (guess 
    #"(pathways|cyc)"
    contents))

; ["ScS288C", "mirBase", "PO", "GO", "Mt3.0", "Lj2.5", "Gm1.1", "dbs", "misc", "SM", "At10", "Mt4.0", "Zm181", "results", "biogrid", "Os204", "Pv218", "Mt3.5v5", "Mt3.5", "Pt210"] 

; Find files by name
(defn find-file
  [dir re]
  (if-let [file (first
                  (fs/find-files
                    dir
                    re))]
    (clojure.string/replace
      (.toString file)
      (re-pattern (java.util.regex.Pattern/quote (str (.toString fs/*cwd*) java.io.File/separator)))
      "")
    ""))
    

(defn find-mirbase
  [dir]
  (find-file dir #"hairpin\.fa")) 
  
(defn find-go
  [dir]
  (first-non-blank
    (list
      (find-file dir #"gene_ontology.+\.obo")
      (find-file dir #"gene_ontology\.obo")
      (find-file dir #"go\.obo"))))

(defn find-po
  [dir]
  (find-file dir #"plant_ontology.*\.obo"))

(defn find-mi
  [dir]
  (find-file dir #"psi-mi.*\.obo"))

(defn find-ENZYME
  [dir]
  (find-file dir #"enzyme\.dat"))

(defn find-DOMINE
  [dir]
  (find-file dir #"INTERACTION\.txt"))

(defn determine-genome
  [dir]
  (when (fs/directory? dir) ; All species must be stored in directories...
    (let [contents (map fs/base-name (fs/list-dir dir))
          [_ abbreviation version] (re-find #"(\D+)([\d\.]*)" (fs/base-name dir))]
      {:root dir
       :taxid ""
       :assembly [(guess-assembly-file contents)]
       :annotation [(guess-annotation-file contents)]
       :proteome [(guess-protein-file contents)]
       :pathway [(guess-pathway-file contents)]
       :name (first-non-blank [abbreviation (fs/base-name dir)])
       :version (first-non-blank [version "1"]) ; Default to "1"
       :abbreviation (first-non-blank [abbreviation (fs/base-name dir)])
       :expression_gtf []
       :expression_fpkm_tracking []
       :interproscan []
       :mirbase_prefix abbreviation
       :computed-name (str abbreviation " " version)
       :description ""
       :tags ""
       :key (fs/base-name dir)})))
       

(defn guess-genomes
  [dir]
  (sort-by 
    :computed-name
    (map 
      determine-genome
      (map
        (fn [x]
          (if (fs/absolute? x)
            x
            (str dir "/" x)))
        (remove 
          (fn [x] (#{"biogrid" "dbs" "mirBase" "results" "misc" "GO" "PO"} x))
          (map fs/base-name
               (filter fs/directory?
                       (fs/list-dir dir))))))))

(defn best-guess 
  [dir]
  {:genomes (guess-genomes dir)})

(defn load-existing
  [config-file]
  (reset!
    config 
    (if (fs/file? config-file)
      (parse-stream (clojure.java.io/reader config-file) true)
      (do
        (swap! is-new? not)
        {:global
         {:fpkm_minimum 75
          :pearson_correlation_absolute_cutoff 0.75
          :db_path "odg.db"
          :db_name "omics database"
          :mirbase_hairpins (find-mirbase "data")
          :GO (find-go "data")
          :PO (find-po "data")
          :MI (find-mi "data")
          :ENZYME (find-ENZYME "data")
          :DOMINE (find-DOMINE "data")}
          
         :genomes (guess-genomes "data")}))))
         

(defn save
  [data]
  (let [d (parse-string data true)
        genomes (:genomes d)
        global (:global d)]
    (println "Configuration saved to" @config-file)
    (when (and (not (nil? genomes)) (not (nil? global)))
      (reset! config {:global global :genomes genomes})
      (println @config)
      (with-open [w (clojure.java.io/writer @config-file)]
        (.write w (encode @config))))
    (generate-string "true")))

(defn get-files
  [dir]
  (into
    {}
    (map
      (fn [x] 
        {(str "data/" x) (sort (map #(.getName %) (fs/list-dir (str "data/" x))))})
      (filter 
        #(fs/directory? (str "data/" %))
        (map 
          #(.getName %) 
           (fs/list-dir dir))))))

(defresource get-config
  :available-media-types ["text/json" "application/json"]
  :handle-ok (fn [_] (generate-string @config)))

(defroutes app
  (ANY  "/isnew" [] (resource 
                      :available-media-types ["text/json" "application/json"]
                      :handle-ok (generate-string @is-new?)))
  (ANY  "/best-guess" [] (resource 
                          :available-media-types ["text/json" "application/json"]
                          :handle-ok (fn [_] (generate-string (best-guess "data")))))
  (ANY  "/data" [] (resource
                    :available-media-types ["text/json" "application/json"]
                    :handle-ok (fn [_] (generate-string (get-files "data")))))
  (ANY  "/species" [] (resource
                        :available-media-types ["text/json" "application/json"]
                        :handle-ok (generate-string (:species @config))))
  (GET  "/config" [] get-config)
  (GET  "/" [] (resp/redirect "/ui"))
  (POST "/save" [data] (fn [a] (save data)))
  (POST "/save_and_quit" [data] (fn [a] (save data) (Thread/sleep 5000) (System/exit 0)))
  (GET  "/ui" [] (layout/render "ui.html"))
  (route/resources "/" {:root "config"}))
  
(defn wrap-exception [f]
  (fn [request]
    (try (f request)
      (catch Exception e
         {:status 500
          :body (str "Exception caught:" (.getMessage e))}))))

(def handler 
  (-> app 
      (wrap-params)
      (wrap-exception)))  

(defn start-server 
  [opts args]
  
  (layout/set-resource-path "config/templates")
  
  (reset! config-file (:config opts))
  
  (load-existing @config-file)
 
  (println "Server starting on port 33333")
  (println "Visit http://localhost:33333 in your web browser to continue")
  (run-jetty #'handler {:port 33333}))

(defn dev-init
  []
  
  (def opts {:config "config.json"})
  (layout/set-resource-path "config/templates")
  (reset! config-file (:config opts))
  (load-existing @config-file))
