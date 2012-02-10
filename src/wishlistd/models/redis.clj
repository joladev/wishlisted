(ns wishlistd.models.redis
  (:require [redis.core :as r])
  (:use [wishlistd.code]
        [cheshire.core]))
  
(def db {:host "127.0.0.1" :port 6379 :db 0})
    
(defn new-code []
  "Generates random codes until it finds one that doesn't exist."
  (r/with-server db
    (let [code (random-code 8)]
      (if (r/exists code)
        (new-code)
        code))))
        
(defn create-wishlist [wishlist]
  (let [code (new-code)
        with-code (assoc wishlist :code code)
        as-json (encode with-code)]
    (r/with-server db
      (r/set code as-json))
    code))

(defn read-wishlist [code]
  (r/with-server db
    (decode
      (r/get code))))

