(ns ^:figwheel-no-load odg.dev
  (:require
    [odg.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
