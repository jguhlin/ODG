(ns odg.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[projh started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[projh has shut down successfully]=-"))
   :middleware identity})
