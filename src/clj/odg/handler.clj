(ns odg.handler
  (:require [reitit.ring :as reitit-ring]
            [odg.middleware :refer [middleware]]
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
            [odg.batch :as batch]
            [odg.db :as db]
            [odg.query :as query]
            [hiccup.page :refer [include-js include-css html5]]
            [config.core :refer [env]]))

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

(defn get-stats
  []
  {:genes (query/get-gene-definition-by-species)})

(defonce server-config
  (atom
    {:version-string "Uninitialized"
     :status "Uninitialized"
     :error true
     :message "Server config not initialized"}))

(def mount-target
  [:div#app
   [:h2 "Welcome to odg"]
   [:p "please wait while Figwheel is waking up ..."]
   [:p "(Check the js console for hints if nothing exciting happens.)"]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    mount-target
    (include-js "/js/app.js")]))

(defn index-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(defn get-species
  [_request]
  {:status 200
   :headers {"Content-Type" "text/json"}
   :body (generate-string (query/get-species))})


(defn dev-init!
  []
  (println "Connecting to Neo4j server")
  (db/connect "odg.db" "80%")
  (query/get-all-labels)
  (reset! server-config
     {:species (query/get-species)
      :version-string "ODG - unreleased"
      :error false
      :query-types query-types
      :message ""})
  (println "Server starting on port 3000")
  (println "Connect to http://localhost:3000"))

(def app
  (reitit-ring/ring-handler
    (reitit-ring/router
      [["/" {:get {:handler index-handler}}]
       ["/get-species" {:get {:handler get-species}}]
       ["/items"
        ["" {:get {:handler index-handler}}]
        ["/:item-id" {:get {:handler index-handler}
                           :parameters {:path {:item-id int?}}}]]
       ["/about" {:get {:handler index-handler}}]]
     {:data {:middleware middleware}})
    (reitit-ring/routes
      (reitit-ring/create-resource-handler {:path "/" :root "/public"})
      (reitit-ring/create-default-handler))))
