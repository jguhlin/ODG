(ns ^:figwheel-no-load odg.config.startup
  (:require [odg.config.core :as core]
            [devtools.core :as devtools]))

(devtools/install!) 
(enable-console-print!) 
(core/init!)
(js/console.log "Online...")
