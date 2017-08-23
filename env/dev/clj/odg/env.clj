(ns odg.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [projh.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[projh started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[projh has shut down successfully]=-"))
   :middleware wrap-dev})
