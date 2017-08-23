(ns odg.web.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [odg.web.layout :refer [error-page]]
            [odg.web.routes.home :refer [home-routes]]
            [odg.web.routes.services :refer [service-routes]]
            [odg.web.routes.json :refer [json-routes]]
            [compojure.route :as route]
            [odg.env :refer [defaults]]
            [mount.core :as mount]
            [odg.web.middleware :as middleware]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(def app-routes
  (routes
    (-> #'home-routes
        (wrap-routes middleware/wrap-csrf)
        (wrap-routes middleware/wrap-formats))
    #'service-routes
    #'json-routes
    (route/not-found
      (:body
        (error-page {:status 404
                     :title "page not found"})))))


(defn app [] (middleware/wrap-base #'app-routes))
