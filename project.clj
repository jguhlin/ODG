(defproject odg "2.0.alpha"
  :main odg.core
  :aot [odg.core]
  :profiles {:dev  {:dependencies [[cider/piggieback "0.3.10"]
                                   [binaryage/devtools "0.9.10"]
                                   [ring/ring-mock "0.3.2"]
                                   [ring/ring-devel "1.7.1"]
                                   [prone "1.6.1"]
                                   [figwheel-sidecar "0.5.17"]
                                   [nrepl "0.4.5"]
                                   [pjstadig/humane-test-output "0.8.3"]]
                    :plugins       [[lein-figwheel "0.5.17"]]
                    :source-paths ["env/dev/clj"]
                    :injections [(require 'pjstadig.humane-test-output)
                                 (pjstadig.humane-test-output/activate!)]
                    :env {:dev true}}}

  :uberjar {:aot :all
            :hooks [minify-assets.plugin/hooks]
            :source-paths ["env/prod/clj"]
            :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
            :env {:production true}
            :omit-source true}


  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :jvm-opts ^:replace [
                       "-Xms6G"
                       "-Xmx6G"]
                       ;"-XX:MaxDirectMemorySize=1G" ; May have caused a huge slowdown? At least in eclipse...
                       ;"-XX:+UseParallelGC"
                       ;"-XX:+UseConcMarkSweepGC"
                       ;"-XX:+UseCondCardMark"
                       ;"-XX:+UseBiasedLocking"
                       ;"-XX:+AggressiveOpts"
                       ;"-XX:+UseCompressedOops"
                       ;"-XX:+UseFastAccessorMethods"
                       ;"-XX:+DoEscapeAnalysis"
                       ;"-Xss64M"
                       ;"-d64"
                       ;"-server"
                       ;"-Dco.paralleluniverse.fibers.detectRunawayFibers=false"
                       ;"-Dco.paralleluniverse.fibers.verifyInstrumentation"
                       ;"-XX:-OmitStackTraceInFastThrow"


  :plugins [[codox "0.6.6"]
            [lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
                                 :exclusions [org.clojure/clojure]]
            [lein-ring "0.8.11"]]

  :ring {:handler odg.handler/app
         :port 3000
         :init odg.server/start-dev
         :auto-reload? true
         :auto-refresh? true}

  :source-paths ["src/clj" "src/cljc"]

  :figwheel {
             :http-server-root "public"
             :server-port 3449
             ; :init odg.server/start-dev
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["resources/public/css"]
             :ring-handler odg.handler/app}


  :cljsbuild
            {:builds {:min
                        {:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
                         :compiler
                          {:output-to "target/cljsbuild/public/js/app.js"
                           :output-dir "target/cljsbuild/public/js"
                           :source-map "target/cljsbuild/public/js/app.js.map"
                           :optimizations :advanced
                           :pretty-print false}}
                      :app
                        {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                         :figwheel {:on-jsload "odg.core/mount-root"}
                         :compiler
                          {:main "odg.dev"
                           :asset-path "/js/out"
                           :output-to "target/cljsbuild/public/js/app.js"
                           :output-dir "target/cljsbuild/public/js/out"
                           :source-map true
                           :optimizations :none
                           :pretty-print true}}}}

  :resource-paths ["resources" "target/cljsbuild"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [incanter "1.9.3"]
                 [org.clojure/core.async "0.4.474"]
                 [net.mikera/core.matrix "0.62.0"]
                 [org.neo4j/neo4j "3.4.9"]
                 [clojure-csv/clojure-csv "2.0.2"]
                 [cheshire "5.8.1"]
                 [org.clojure/tools.cli "0.3.1"]
                 [criterium "0.4.4"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [org.clojure/math.numeric-tower "0.0.4"]
                 [iota "1.1.3"]
                 [quil "2.7.1"]
                 [foldable-seq "0.2"]
                 [org.clojure/data.xml "0.0.8"]
                 [org.clojure/data.zip "0.1.2"]
                 [digest "1.4.8"]
                 [biotools "0.1.1-b1"]
                 [com.taoensso/timbre "4.10.0"]
                 [me.raynes/fs "1.4.6"]
                 [ring/ring-core "1.7.1"] ; :exclusions [org.clojure/tools.reader]]
                 [ring/ring-jetty-adapter "1.7.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring-server "0.5.0"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [hiccup "1.0.5"]
                 [yogthos/config "1.1.1"]
                 [org.clojure/clojurescript "1.10.339"
                                            :scope "provided"]
                 [metosin/reitit "0.2.4"]
                 [venantius/accountant "0.2.4"
                                       :exclusions [org.clojure/tools.reader]]
                 [ring/ring-json "0.4.0"]
                 [liberator "0.15.2"]
                 [compojure "1.6.1"]
                 [org.clojure/core.memoize "0.7.1"]])
