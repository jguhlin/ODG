(ns odb.config.subscriptions
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :page
  (fn [db _]
    (:page db)))

(reg-sub
  :docs
  (fn [db _]
    (:docs db)))

(reg-sub
  :projects
  (fn [db _]
    (:projects db)))

(reg-sub
  :project
  (fn [db _]
    (:project db)))

(reg-sub
  :new-project-box
  (fn [db _]
    (:new-project-box db)))

(reg-sub 
  :project-data
  (fn [db _]
    (:project-data db)))

