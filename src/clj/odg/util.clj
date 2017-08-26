(ns odg.util
  (:require
    [odg.batch :as batch]
    [odg.db :as db]
    [taoensso.timbre :as timbre]
    [co.paralleluniverse.pulsar.core :as p]
    clojure.core.memoize))

(timbre/refer-timbre)

;(def landmarks-pool (co.paralleluniverse.fibers.FiberForkJoinScheduler "landmarks-pool" 4 nil false)) ; Run in a separate pool. 4 threads as a default.

(defn dabs
  [^Double x]
  (java.lang.Math/abs x))

(defn- -create-landmark
  [landmark pos]
  (str (clojure.string/lower-case landmark) ":" (* (int (/ pos 100000)) 100000)))

(defn get-landmarks
  "Entries should be a hash containing at least :landmark, :start, and :stop"
  [landmark start end]
  (distinct [(-create-landmark landmark start) (-create-landmark landmark end)]))

(defn remove-transcript-id
  "Removes the trailing .1 .2 etc from transcript ID's to get the proper gene ID. Do not pass it gene ID's or results may be unexpected."
  [id]
  (clojure.string/replace id #"\.\d+$" ""))

(defn species-ver-root
  [species version]
  (str species version))
