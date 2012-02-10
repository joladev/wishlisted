(ns wishlistd.models.redis
  (:require [redis.core :as r])
  (:use wishlistd.code))
  
(def db {:host "127.0.0.1" :port 6379 :db 0})
    
(defn new-code []
  "Generates random codes until it finds one that doesn't exist."
  (r/with-server db
    (let [code (random-code)]
      (if (r/exists code)
        code
        (new-code)))))
      