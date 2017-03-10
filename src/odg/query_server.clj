(ns odg.query-server
  (:require
          [cheshire.core :refer :all]
          [cheshire.generate :refer [add-encoder encode-str remove-encoder]]
          [me.raynes.fs :as fs]
          [liberator.core :refer [resource defresource]]
          [ring.middleware.params :refer [wrap-params]]
          [ring.adapter.jetty :refer [run-jetty]]      
          [compojure.core :refer [defroutes ANY GET POST]]
          [compojure.route :as route]
          [ring.util.response :as resp]
          [taoensso.timbre :as timbre]
          [odg.query :as query]
          [odg.batch :as batch]
          [odg.db :as db]
          ))

(timbre/refer-timbre)

(add-encoder org.neo4j.kernel.impl.core.NodeProxy
             (fn [c jsonGenerator]
               (.writeString jsonGenerator (str (.getId c)))))

; Global, until it needs to be something else
(def query-types
  ["GO Terms: Biological Processes"])

(defn go-terms-biological-processes
  [species query]
  (let [ids (clojure.string/split query #"\s+|,")]
    (map 
      (juxt identity (fn [x] (query/get-biological-process 
                               (batch/convert-name species)
                               x)))
      ids)))

(defonce server-config 
  (atom 
    {:version-string "Uninitialized" 
     :status "Uninitialized" 
     :error true 
     :message "Server config not initialized"}))

(defresource get-species
  :available-media-types ["text/json" "application/json"]
  :handle-ok (fn [_] (generate-string (query/get-species)))) 

(defn handle-query  
  [type species query]
  (case type
    "GO Terms: Biological Processes" (go-terms-biological-processes species query)
    ))

(defn get-stats
  []
  {:genes (query/get-gene-definition-by-species)
   })

(defroutes app
  (GET  "/config" [] get-species)
  (GET  "/" [] (resp/redirect "/index.html"))
  (route/resources "/" {:root "query-server"})
       (GET "/stats" [] (fn [_] (generate-string (get-stats))))
  (ANY  "/server-config" [] (resource
                              :available-media-types ["text/json" "application/json"]
                              :handle-ok (fn [_] (generate-string @server-config))))
  (GET "/autocomplete/:species/:query" [species query] (fn [_] (generate-string (query/autocomplete (batch/convert-name species) query))))
  (GET "/autocomplete/:species/:label/:query" [species label query] (fn [_] (generate-string (query/autocomplete (batch/convert-name species) label query))))
  (GET "/node/goterms/:node" [node] (fn [_] (generate-string (query/get-goterms (read-string node)))))
  (GET "/node/expression/:node" [node] (fn [_] (generate-string (query/get-expression (read-string node)))))
  (GET "/labels/:species" [species] (fn [_] (generate-string (query/get-labels-for-species species))))
  (GET "/node/describe/relationships/:level/:node" [level node] (fn [_] (generate-string (query/describe-relationships node (Integer/parseInt level))))) 
  (GET "/node/blastp/:node" [node] (fn [_] (generate-string (query/get-blastp-hits (read-string node)))))
  (GET "/node/:node" [node] (fn [_] (generate-string (query/get-node (read-string node)))))
  (POST "/search" [species query label] (fn [req] 
                                               (generate-string 
                                                 (query/search (batch/convert-name species) query label))))
  (POST "/query" [type species query] (fn [_] 
                                        (generate-string
                                          (handle-query type species query))))
  (GET  "/get-species" [] (resource 
                      :available-media-types ["text/json" "application/json"]
                      :handle-ok (generate-string (query/get-species)))))
;  (ANY  "/best-guess" [] (resource 
;               :available-media-types ["text/json" "application/json"]
;               :handle-ok (fn [_] (generate-string (best-guess "data")))))
;  (ANY  "/data" [] (resource
;               :available-media-types ["text/json" "application/json"]
;               :handle-ok (fn [_] (generate-string (get-files "data")))))
;  (ANY  "/species" [] (resource
;                        :available-media-types ["text/json" "application/json"]
;                        :handle-ok (generate-string (:species @config))))
;  (POST "/save" [data] (fn [a] 
;                         (println a) 
;                         (save data)
;                         ))

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
  [config opts args]
  
  (db/connect (get-in config [:global :db_path]) (:memory opts))
  
  (query/get-all-labels)
  
  (reset! server-config
        {:species (query/get-species)
         :version-string "ODG - unreleased"
         :error false
         :message ""
         :query-types query-types
         })
    
    (println "Server starting on port 6789")
    (println "Connect to http://localhost:6789")
    (run-jetty #'handler {:port 6789}))

(defn dev-init
  []
  
  (db/connect "odg.db" "80%")
  
  (query/get-all-labels)
  (reset! server-config
          {:species (query/get-species)
           :version-string "ODG - unreleased"
           :error false
           :query-types query-types
           :message ""})
  (println "Server starting on port 6789")
  (println "Connect to http://localhost:6789"))
