(defproject odg "1.1.0"
  :main odg.core
  :aot [odg.core]
  
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :jvm-opts ^:replace [
                       "-Xms256M"
                       "-Xmx4G"
                       ;"-XX:MaxDirectMemorySize=1G" ; May have caused a huge slowdown? At least in eclipse...
                       ;"-XX:+UseParallelGC"
                       "-XX:+UseConcMarkSweepGC"
                       "-XX:+UseCondCardMark"
                       "-XX:+UseBiasedLocking"
                       "-XX:+AggressiveOpts"
                       "-XX:+UseCompressedOops"
                       "-XX:+UseFastAccessorMethods"
                       "-XX:+DoEscapeAnalysis"
             ;          "-Xss8M"
                       "-d64"
                       "-server"
                       "-Dco.paralleluniverse.fibers.detectRunawayFibers=false"
             ;"-Dco.paralleluniverse.fibers.verifyInstrumentation"
                       "-XX:-OmitStackTraceInFastThrow"]
             
  :plugins [[codox "0.6.6"]
            [lein-ring "0.12.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-immutant "2.1.0"]
            [lein-kibit "0.1.5"]
            [lein-figwheel "0.5.13"]]
             
  :ring {:handler odg.query-server/handler
         :port 6789
         :init odg.query-server/dev-init
         :auto-reload? true
         :auto-refresh? true}
         
  :java-agents [[co.paralleluniverse/quasar-core "0.7.9"]]
  :resource-paths ["resources"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [co.paralleluniverse/pulsar "0.7.9"]
                 [co.paralleluniverse/quasar-core "0.7.9"]
;                 [co.paralleluniverse/quasar-actors "0.7.9"]
                 [org.neo4j/neo4j "3.2.3"]
                 [clojure-csv/clojure-csv "2.0.2"]
                 [cheshire "5.8.0"]
                 [org.clojure/tools.cli "0.3.1"]
                 [criterium "0.4.4"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [iota "1.1.3"]
                 [foldable-seq "0.2"]
                 [org.clojure/data.xml "0.0.8"]
                 [org.clojure/data.zip "0.1.2"]
                 [incanter "1.5.5"]
                 [digest "1.4.6"]
                 [biotools "0.1.1-b1"]
                 [com.taoensso/timbre "4.10.0"]
                 [me.raynes/fs "1.4.6"]
                 [ring/ring-core "1.6.2"] ; :exclusions [org.clojure/tools.reader]]
                 [ring/ring-jetty-adapter "1.6.2"]
                 [ring/ring-json "0.4.0"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-defaults "0.3.1"]
                 [liberator "0.15.1"]
                 [binaryage/devtools "0.9.4"]
                 [compojure "1.6.0"] 
                 [org.clojure/core.memoize "0.5.9"]
                 [clj-time "0.14.0"]
                 [cljs-ajax "0.7.0"]
                 [markdown-clj "1.0.0"]
                 [keybind "2.1.0"]
                 [metosin/compojure-api "1.1.11"]
                 [metosin/muuntaja "0.3.2"]
                 [metosin/ring-http-response "0.9.0"]
                 [mount "0.1.11"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [org.clojure/clojurescript "1.9.908" :scope "provided"]
                 [org.clojure/tools.logging "0.4.0"]
                 [org.webjars.bower/tether "1.4.0"]
                 [org.webjars/bootstrap "4.0.0-alpha.6-1"]
                 [org.webjars/font-awesome "4.7.0"]
                 [org.webjars/webjars-locator-jboss-vfs "0.1.0"]
                 [re-frame "0.10.1"]
                 [reagent "0.7.0"]
                 [reagent-utils "0.2.1"]
                 [secretary "1.2.3"]
;                 [cprop "0.1.11"]
                 [selmer "1.11.0"]]

  :repl-options {  ;; If nREPL takes too long to load it may timeout,
                   ;; increase this to wait longer before timing out.
                   ;; Defaults to 30000 (30 seconds)
                 :timeout 120000}

  :figwheel {:nrepl-port 7002
             :css-dirs ["resources/config/css" "resources/query/css"]
             :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  
  :profiles 
    {:dev [:project/dev]
 
     :project/dev
      {:dependencies [[prone "1.1.4"]
                      [ring/ring-mock "0.3.1"]
                      [ring/ring-devel "1.6.2"]
                      [pjstadig/humane-test-output "0.8.2"]
                      [binaryage/devtools "0.9.4"]
                      [figwheel-sidecar "0.5.11"]
                      [com.cemerick/piggieback "0.2.2"]]
       :plugins [[com.jakemccrary/lein-test-refresh "0.19.0"]]
       :repl-options {:init-ns user}
       :injections [(require 'pjstadig.humane-test-output
                               (pjstadig.humane-test-output/activate!))]
       :cljsbuild {:builds 
                   {:config-dev
                    {:id "config"
                     :source-paths ["src/cljs/config/"]
                     :figwheel {:on-jsload "odg.config.core/mount-components"}
                     :compiler {:main "odg.config.core"
                                :asset-path "js/newui/"
                                :source-map true
                                :optimizations :none
                                :output-to "resources/config/js/newui.js"
                                :output-dir "resources/config/js/newui"
                                :pretty-print true}}}}}})
               
                 

                 
                  
                  
                 
                 
                 



