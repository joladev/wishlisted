(ns wishlistd.views.wishlist
  (:require [wishlistd.models.sql :as model])
  (:use noir.fetch.remotes))

(defn layout [] (slurp "resources/public/index.html"))
(defn main-page [] (layout))

; REMOTES
;
; Note, fetch is unable to encode Timespan as JSON, 
; so we have to make sure to remove it.

(defn- dissoc-date [wl]
  (dissoc wl :created_at))

(defremote create-wishlist [wishlist]
  (dissoc-date 
    (model/create-wishlist wishlist)))

(defremote update-wishlist [wishlist]
  (not (nil?
    (model/update-wishlist wishlist))))

(defremote read-wishlist [code]
  (model/read-wishlist code))

(defremote create-wish [wish]
  (dissoc-date
    (model/create-wish wish)))

(defremote update-wish [wish]
  (not (nil?
    (model/update-wish wish))))

(defremote delete-wish [id]
  (not (nil?
    (model/delete-wish id))))
