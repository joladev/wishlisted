(ns wishlistd.code)

(def letters ["A","B","C","D","E","F","G","H","I","J","K"])

(defn generate-code [id]
  (apply str 
    (map 
      (comp 
        #(letters %) 
        #(Integer/parseInt (str %))) 
      (format "%03d" id))))