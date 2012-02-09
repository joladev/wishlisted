(ns wishlistd.models.redis
  (:require [redis.core :as r])
  (:use wishlistd.code))
  
(def db {:host "127.0.0.1" :port 6379 :db 0})
