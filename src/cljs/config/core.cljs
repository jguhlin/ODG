(ns odg.config.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [cognitect.transit :as t]
            [projh.ajax :refer [load-interceptors!]]
            [projh.handlers]
            [keybind.core :as key]
            [projh.subscriptions])
  (:import goog.History))

(defn fetch-projects! []
  (GET (str "/projects/list") 
    {:handler (fn [x]
                (rf/dispatch [:set-projects (get (t/read (t/reader :json) x) "projects")]))}))

(defn nav-new-project-box-prev [title]
  (let [new-project-box (rf/subscribe [:new-project-box])]
    [:li.nav-item
     [:span.nav-link
      {:on-click (fn []
                   (rf/dispatch [:new-project-box (not @new-project-box)])
                   (-> js/document
                       (.getElementById "new-project-box")
                       (.focus)))}
      title]
     [:input {:id "new-project-box"
              :type "text" 
              :autoFocus true
              :style (when (not @new-project-box) {"display" "none"})}]]))


(defn nav-new-project-box [title]
  (let [new-project-box (rf/subscribe [:new-project-box])
        new-project-value (r/atom "")]
        
    (r/create-class
      {:component-did-update (fn []
                               (when @new-project-box
                                 (-> js/document
                                     (.getElementById "new-project-box")
                                     (.focus))))
       :display-name "new-project-navbar-link"
       :reagent-render (fn [title]
                         [:li.nav-item
                          [:span.nav-link
                           {:on-click (fn []
                                        (rf/dispatch [:new-project-box (not @new-project-box)]))}
                           title]
                          [:form 
                           {:action "#" 
                            :onSubmit (fn [] 
                                        (POST "/projects/create"
                                          {:format :raw
                                           :handler (fn [x]
                                                       (rf/dispatch [:set-projects (get (t/read (t/reader :json) x) "projects")]))
                                           :params 
                                             {"title" @new-project-value}})
                                        (reset! new-project-value "")
                                        (rf/dispatch [:new-project-box false])
                                        false)}
                           [:input {:id "new-project-box"
                                    :type "text" 
                                    :value @new-project-value
                                    :on-change (fn [e] (reset! new-project-value (.-target.value e)))
                                    :style 
                                      (when 
                                        (not @new-project-box) 
                                        {"display" "none"})}]]])})))


(defn nav-link [uri title page collapsed?]
  (let [selected-page (rf/subscribe [:new-project-box])]
    [:li.nav-item
     {:class (when (= page @selected-page) "active")}
     [:a.nav-link
      {:href uri
       :on-click #(reset! collapsed? true)} title]]))


(defn navbar []
  (r/with-let [collapsed? (r/atom false)]
    [:nav.navbar.navbar-light.bg-primary.navbar-toggleable-md
     [:button.navbar-toggler.hidden-sm-up
      {:on-click #(swap! collapsed? not)} "☰"]
     [:div.collapse.navbar-collapse.navbar-toggleable-xs
      (when-not @collapsed? {:class "in"})
      [:a.navbar-brand {:href "#/"} "projh"]
      [:ul.nav.navbar-nav
       [nav-link "#/" "Projects" :projects collapsed?]
       [nav-new-project-box "New Project"]
       [nav-link "#/about" "About" :about collapsed?]]]]))


(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

(defn get-project-data [project-id]
  (GET "/project/" {:params {"project-id" project-id} 
                    :handler (fn [x]
                               (js/console.dir x)
                               (rf/dispatch [:set-project-data (t/read (t/reader :json) x)]))}))

(defn projects-page []
  [:div.container
   (when-let [projects @(rf/subscribe [:projects])]
     (js/console.log projects)
     [:div.row>div.col-sm-12
      [:ul
       (for [[id title] projects]
         [:li
          {:key (str "li" id (keyword title))}
          [:a 
            {:href (str "#/project/" id)
             :key (str "li2" id (keyword title))
             :on-click (fn [_]
                         (js/console.log (keyword title))
                         (rf/dispatch [:set-project id])
                         (get-project-data id)
                         (rf/dispatch [:set-active-page :project]))}
           title]])]])])

(defn project-add-something [project-id]
  (let [new-addition (r/atom "")]
    (fn [project-id]
      (let [        
            add-generic-fn (fn [type] 
                             (POST "/project/add"
                               {:format :raw
                                :handler (fn [x]
                                           (rf/dispatch [:set-project-data (t/read (t/reader :json) x)]))
                                :params 
                                {"content" @new-addition
                                 "project-id" project-id
                                 "type" type}})
                             (reset! new-addition "")
                             false)]
        [:form.form-group
         [:label "Add to Project"]
         [:textarea.form-control 
          {:rows 3
           :value @new-addition
           :on-change #(reset! new-addition (-> % .-target .-value))}]
         [:button.btn.btn-primary {:type "Button" :onClick (partial add-generic-fn "Note")} "Add to Project"]
         [:button.btn.btn-primary {:type "Button" :onClick (partial add-generic-fn "Link")} "Add Link"]
         [:button.btn.btn-primary {:type "Button" :onClick (partial add-generic-fn "TodoList")} "Add Todo List"]
         [:button.btn.btn-primary {:type "Button" :onClick (partial add-generic-fn "Subproject")} "Add as Subproject"]]))))

(defn project-item [project-id id content labs]
  "For displaying generic items on a project page. Should always be the default. Click to edit."
  (let [edit-mode? (r/atom false)
        
        labels (into #{} (map keyword labs))
        
        item-type (cond 
                   (:Subproject labels) "Subproject"
                   (:Link labels) "Link"
                   :else "Note")
        
        current-content (r/atom content)
        archive-item (fn [_] 
                       (POST "/project/archive"
                         {:format :raw
                          :handler (fn [_] (get-project-data project-id))
                          :params 
                          {"id" id
                           "content" @current-content}}))
        update-item (fn [_]
                      (swap! edit-mode? not)
                      (POST "/project/update"
                        {:format :raw
                         :handler (fn [_] (get-project-data project-id))
                         :params {"id" id "content" @current-content}}))
  
        subproject-render (fn [project-id id content labs]
                            [:div
                              [:a 
                               {:href (str "#/project/" id)
                                :key (str "li2" id (keyword content))
                                :on-click (fn [_]
                                            (rf/dispatch [:set-project id])
                                            (get-project-data id))}
                               content]])
        
        link-render (fn [project-id id content labs]
                      [:div
                       [:a
                        {:href content :target "_blank"}
                        content]])
        
        generic-render (fn [project-id id content labs]
                         (if @edit-mode?
                           [:div {:style {"width" "100%" "textAlign" "right"}}
                            [:textarea.form-control 
                             {:rows 3
                              :on-change #(reset! current-content (-> % .-target .-value))
                              ; :onBlur #(swap! edit-mode? not)
                              :value @current-content}]
                            [:button.btn.btn-primary 
                             {:type "Button" :onClick archive-item} ; To make this work have to pass the item id and get from that...
                             "Archive"]
                            [:button.btn.btn-primary 
                             {:type "Button" :onClick update-item}  
                             "Update"]]
                           [:div 
                            {:onClick (fn [] (swap! edit-mode? not))}
                            @current-content]))]
  
    (js/console.dir labs)
    (js/console.dir item-type)
    (js/console.dir labels)
  
    (case item-type
      "Subproject" subproject-render
      "Link" link-render
      generic-render)))

  
(defn project-page []
  (fn []
   [:div.container
    (let [project @(rf/subscribe [:project])
          project-data @(rf/subscribe [:project-data])]
      (console.dir project-data)
      [:div
       [:h2 (str project ": " (get project-data "title"))]
       [project-add-something (get project-data "id")]
       (for [{id "id" content "content" labs "labs" :as i} (get project-data "children")]
         ^{:key (str "item-component" id)}
         [project-item project id content labs])])]))
      
      
(def pages
  {:projects #'projects-page
   :about #'about-page
   :project #'project-page})
   

(defn page []
  [:div
   [navbar]
   [(pages @(rf/subscribe [:page]))]])

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
  (fetch-docs!)
  (fetch-projects!)
  (hook-browser-navigation!)
  (mount-keybindings)
  (mount-components))
