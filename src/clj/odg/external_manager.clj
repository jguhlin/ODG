(ns odg.external-manager
  )



(defn output-commands
  [config opts args]
  (doseq [key (keys config)]
    (println key))
  
  )

