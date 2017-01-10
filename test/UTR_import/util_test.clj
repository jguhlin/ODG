(ns UTR-import.util-test
  (:use clojure.test
        UTR-import.util))

(deftest remove-transcript-test
  (is (= "CUFF.10" (remove-transcript-id "CUFF.10.1")))
  (is (= "Medtr6g023942" (remove-transcript-id "Medtr6g023942.2")))
  (is (= "Medtr6g023942" (remove-transcript-id "Medtr6g023942.1")))
  (is (= "Medtr6g023942" (remove-transcript-id "Medtr6g023942.55")))
  (is (= "Medtr6g023942" (remove-transcript-id "Medtr6g023942.0990")))
  (is (= "Medtr6g023942" (remove-transcript-id "Medtr6g023942")))
  (is (= "Medtr6g023942.1" (remove-transcript-id "Medtr6g023942")))
  (is (= "Medtr6g023942." (remove-transcript-id "Medtr6g023942.")))
  )