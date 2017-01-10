(defproject odg "1.0.0-beta1"
  :main odg.core
  :aot [odg.core]
  :profiles {
	:uberjar { :aot :all }
  }
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :jvm-opts ^:replace [
             "-Xms6G"
             "-Xmx6G"
             ;"-XX:MaxDirectMemorySize=1G" ; May have caused a huge slowdown? At least in eclipse...
             ;"-XX:+UseParallelGC"
             "-XX:+UseConcMarkSweepGC"
             "-XX:+UseCondCardMark"
             "-XX:+UseBiasedLocking"
             "-XX:+AggressiveOpts"
             "-XX:+UseCompressedOops"
             "-XX:+UseFastAccessorMethods"
             "-XX:+DoEscapeAnalysis"
             "-Xss64M"
             "-d64"
             "-server"
             "-Dco.paralleluniverse.fibers.detectRunawayFibers=false"
             ;"-Dco.paralleluniverse.fibers.verifyInstrumentation"
             "-XX:-OmitStackTraceInFastThrow"
             ]
  :plugins [[codox "0.6.6"]
            [lein-ring "0.8.11"]]
  :ring {:handler odg.query-server/handler
         :port 6789
         :init odg.query-server/dev-init
         :auto-reload? true
         :auto-refresh? true
         }
  :java-agents [[co.paralleluniverse/quasar-core "0.7.5"]]
  :resource-paths ["resources"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [co.paralleluniverse/pulsar "0.7.5"]
                 [co.paralleluniverse/quasar-core "0.7.5"]
                 [co.paralleluniverse/quasar-actors "0.7.5"]
                 [org.neo4j/neo4j "3.1.0-M05"]
                 [clojure-csv/clojure-csv "2.0.2"]
                 [cheshire "5.6.3"]
                 [org.clojure/tools.cli "0.3.1"]
                 [criterium "0.4.4"]
                 [org.clojure/math.combinatorics "0.0.8"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [iota "1.1.3"]
                 [foldable-seq "0.2"]
                 [org.clojure/data.xml "0.0.8"]
                 [org.clojure/data.zip "0.1.2"]
                 [incanter "1.5.5"]
                 [digest "1.4.5"]
                 [biotools "0.1.1-b1"]
                 [com.taoensso/timbre "3.4.0"]
                 [me.raynes/fs "1.4.6"]
                 [ring/ring-core "1.5.0"] ; :exclusions [org.clojure/tools.reader]]
                 [ring/ring-jetty-adapter "1.5.0"]
                 [ring/ring-json "0.4.0"]
                 [liberator "0.14.1"]
                 [compojure "1.5.1"] 
                 [org.clojure/core.memoize "0.5.9"]
                 ])



