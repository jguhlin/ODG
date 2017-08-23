(ns user
  (:require [mount.core :as mount]
            [odg.figwheel :refer [start-fw stop-fw cljs]]
            projh.core))

(defn start []
  (mount/start-without #'projh.core/repl-server))

(defn stop []
  (mount/stop-except #'projh.core/repl-server))

(defn restart []
  (stop)
  (start))


