(ns wishlistd.json
  (:use [cheshire.core]))

(defn json
  "Wraps the response in the json content type and generates JSON from the content. Uses Chesire for date support."
  [content]
  {:headers {"Content-Type" "application/json"}
   :body (generate-string content)})