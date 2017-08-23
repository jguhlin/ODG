(defproject odg "1.1.0"
  :main odg.core
  :aot [odg.core]
  :profiles {
             :uberjar { :aot :all}}
  
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
         
  :java-agents [[co.paralleluniverse/quasar-core "0.7.8"]]
  :resource-paths ["resources"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [co.paralleluniverse/pulsar "0.7.8"]
                 [co.paralleluniverse/quasar-core "0.7.8"]
                 [co.paralleluniverse/quasar-actors "0.7.8"]
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
                 [liberator "0.15.1"]
                 [compojure "1.6.0"] 
                 [org.clojure/core.memoize "0.5.9"]
                 [clj-time "0.14.0"]
                 [cljs-ajax "0.6.0"]
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
                 [ring-webjars "0.2.0"]
                 [ring/ring-defaults "0.3.1"]
                 [secretary "1.2.3"]
                 [cprop "0.1.11"]
                 [selmer "1.11.0"]]
  
  :cljsbuild {
              :builds [ 
                       {:id "config"
                        :source-paths ["src/cljs/config/"]
                        :figwheel true
                        :compiler {:main "odg.config.core"
                                   :asset-path "js/out"
                                   :output-to "resources/config/js/newui.js"
                                   :output-dir "resources/config/js/newui"}}]})
               
                 

                 
                  
                  
                 
                 
                 



