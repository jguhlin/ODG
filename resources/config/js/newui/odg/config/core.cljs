(ns odg.config.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [cognitect.transit :as t]
            [odg.config.ajax :refer [load-interceptors!]]
            [odg.config.handlers]
            [keybind.core :as key]
            [odg.config.subscriptions]
            [devtools.core :as devtools])
  (:import goog.History))

(defn nav-link [uri title page collapsed?]
  (let [selected-page (rf/subscribe [:new-project-box])]
    [:li.nav-item
     {:class (when (= page @selected-page) "active")}
     [:a.nav-link
      {:href uri
       :on-click #(reset! collapsed? true)} title]]))


(defn navbar []
    [:nav.navbar.navbar-light.bg-primary.navbar-toggleable-md
      [:a.navbar-brand {:href "#/"} "ODG"]
      [:ul.nav.navbar-nav
       [nav-link "#/" "Genomes" :projects]
       [nav-link "#/about" "About" :about]]])

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])


(def pages
  {:projects #'about-page
   :about #'about-page
   :project #'about-page})
   

(defn page []
  [:div
   [navbar]
   [(pages @(rf/subscribe [:page]))]
   [:div "Hi"]])


;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:set-active-page :projects]))

(secretary/defroute "/about" []
  (rf/dispatch [:set-active-page :about]))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(rf/dispatch [:set-docs %])}))

(defn mount-components []
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))

(defn mount-keybindings []
  (key/bind! "alt-n" :newproject (fn []
                                   (rf/dispatch [:new-project-box true])
                                   (-> js/document
                                       (.getElementById "new-project-box")
                                       (.focus)))))

(defn init! []
  (rf/dispatch-sync [:initialize-db])
  (load-interceptors!)
  (hook-browser-navigation!)
  (mount-keybindings)
  (mount-components))


