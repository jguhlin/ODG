(ns odg.stats
  (:require [clojure.math.numeric-tower :as math]))

(set! *warn-on-reflection* true)
(set! *unchecked-math* true)

(defn pearson
  "Calculates pearson coefficient of two vectors"
  [x y]
  (let [n (count x) ; x and y must be the number of items, and must be determined before this step!
        sum-x (reduce + x)
        sum-y (reduce + y)
        sum-xy (reduce + (map * x y))
        sum-x2 (reduce + (map * x x))
        sum-y2 (reduce + (map * y y))
        top-r (- (* n sum-xy) (* sum-x sum-y))
        bottom-r (math/sqrt (* (- (* n sum-x2) (* sum-x sum-x)) (- (* n sum-y2) (* sum-y sum-y))))]
    (unchecked-float (if (some zero? [top-r bottom-r])
                       1
                       (/ top-r bottom-r)))))
