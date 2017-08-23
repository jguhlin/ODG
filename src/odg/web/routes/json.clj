(ns odg.web.routes.json
  (:require [ring.util.http-response :refer :all]
;            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            [ring.util.response :refer [response]]
            [compojure.core :refer [defroutes ANY GET POST context]]
            [compojure.route :as route]
            [cheshire.core :refer :all]
            [odg.db :as db]))

; TODO: Need to make sure "content" below is safe before inserting it into the database!
(defroutes json-routes)


