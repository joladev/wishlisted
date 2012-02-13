(ns wishlistd.utilities)

(defn remove-map-nils [m]
  (into {} (filter second m)))