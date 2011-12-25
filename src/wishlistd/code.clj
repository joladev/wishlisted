(ns wishlistd.code)

(def letters ["A","B","C","D","E","F","G","H","I","J","K"])

(defn as-string [id]
  (format "%03d" id))

(defn generate-code [{:keys [id]}]
  (apply str 
    (map 
      (comp 
        #(letters %) 
        #(Integer/parseInt (str %))) 
      (as-string id))))