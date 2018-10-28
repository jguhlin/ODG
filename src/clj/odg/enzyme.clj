(ns odg.enzyme
  (:require
    clojure.java.io
    [odg.db :as db]
    [odg.batch :as batch]
    [odg.util :as util]
    [biotools.expasy :as expasy]
    [odg.db-handler :as dbh]
    [clojure.core.reducers :as r]))

;#biotools.expasy.ENZYME
;{
; :id "1.1.1.1",
; :definition "Alcohol dehydrogenase.",
; :alternate-name nil,
; :catalytic-activity "(1) An alcohol + NAD(+) = an aldehyde or ketone + NADH. (2) A secondary alcohol + NAD(+) = a ketone + NADH.",
; :cofactors "Zn(2+) or Fe cation.",
; :comments "-!- Acts on primary or secondary alcohols or hemi-acetals with very broad specificity; however the enzyme oxidizes methanol much more poorly than ethanol. -!- The animal, but not the yeast, enzyme acts also on cyclic secondary alcohols.",
; :prosite nil,
; :swiss-prot nil
; }

(defn import-enzyme
  ;;; [config options args]
  [filename]

  (dbh/submit-batch-job
    {:nodes-update-or-create
     (with-open [rdr (clojure.java.io/reader filename)]
       (doall
         (for [entry (expasy/parse rdr)]
           [(into {} (filter val (merge entry {:id (str "EC:" (:id entry))})))
            [(batch/dynamic-label "EC") (batch/dynamic-label "ENZYME")]])))}))



(defn import-cli
  ;;; [config options args]
  [config opts args]

  ;(batch/connect (get-in config [:global :db_path]) (:memory opts))

  (import-enzyme (first args)))
