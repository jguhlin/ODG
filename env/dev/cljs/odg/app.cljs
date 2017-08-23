(ns ^:figwheel-no-load projh.app
  (:require [projh.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
