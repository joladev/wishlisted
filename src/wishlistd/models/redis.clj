(ns wishlistd.models.redis
  (:require [redis.core :as r])
  (:use [wishlistd.code]
        [wishlistd.json]))
  
(def db {:host "127.0.0.1" :port 6379 :db 0})
    
(defn- new-code []
  "Generates random codes until it finds one that doesn't exist."
  (r/with-server db
    (let [code (random-code 8)]
      (if (r/exists code)
        (new-code)
        code))))
        
(defn create-wishlist [wishlist]
  "Gets a fresh code and adds the wishlist to the datastore."
  (let [code (new-code)
        with-code (assoc wishlist :code code)
        as-json (encode with-code)]
    (r/with-server db
      (r/set code as-json))
    with-code)) ; return the wishlist

(defn read-wishlist [code]
  "Get a single wishlist from datastore."
  (r/with-server db
    (decode
      (r/get code))))

(defn update-wishlist [{:keys [code] :as wishlist}]
  "Update a single wishlist in the datastore."
  (let [as-json (encode wishlist)]
    (r/with-server db
      (r/set code as-json))))

(defn delete-wishlist [code]
  "Deletes a single wishlist in the datastore."
  (r/with-server db
    (r/del code)))
    
;; Advanced

(defn update-merge [{:keys [code] :as wishlist}]
  (r/with-server db
    (when-let [old (read-wishlist code)]
      (update-wishlist (merge old wishlist)))))
