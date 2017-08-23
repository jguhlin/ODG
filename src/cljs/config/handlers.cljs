(ns odb.db.core.handlers
  (:require [projh.db :as db]
            [re-frame.core :refer [dispatch reg-event-db]]))

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(reg-event-db
  :set-active-page
  (fn [db [_ page]]
    (assoc db :page page)))

(reg-event-db
  :set-docs
  (fn [db [_ docs]]
    (assoc db :docs docs)))

(reg-event-db
  :set-projects
  (fn [db [_ projects]]
    (assoc db :projects projects)))

(reg-event-db
  :set-project
  (fn [db [_ project]]
    (assoc db :project project)))

(reg-event-db
  :new-project-box
  (fn [db [_ new-project-box]]
    (assoc db :new-project-box new-project-box)))

(reg-event-db
  :set-project-data
  (fn [db [_ project-data]]
    (assoc db :project-data project-data)))

    
