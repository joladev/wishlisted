(ns wishlistd.json
  (:require [cheshire.core :as cheshire]))

(defn json
  "Wraps the response in the json content type and generates JSON from the content. Uses Chesire for date support."
  [content]
  {:headers {"Content-Type" "application/json"}
   :body (cheshire/generate-string content)})
   
(defn encode [v]
  "Cheshire encode."
  (cheshire/encode v))
  
(defn decode [v]
  "Cheshire decode with symbol option set to true."
  (cheshire/decode v true))