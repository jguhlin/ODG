(ns odg.server
    (:require [odg.handler :refer [app]]
              [config.core :refer [env]]
              [ring.adapter.jetty :refer [run-jetty]])
    (:gen-class))

(defn start-server [& args]
  (println app)
  (let [port (or (env :port) 3000)]
    (run-jetty app {:port port :join? false})))

(defn start-dev [& args]
  (when (env :dev) (odg.handler/dev-init!)))
