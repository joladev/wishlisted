(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common]
            [wishlistd.models.sql :as model])
  (:use noir.fetch.remotes))

(defn main-page []
  (common/new-layout))

(defn dissoc-date [wl]
  (dissoc wl :created_at))

(defremote create-wishlist [wishlist]
  (dissoc-date 
    (model/create-wishlist wishlist)))

(defremote update-wishlist [wishlist]
  (dissoc-date
    (model/update-wishlist wishlist)))

(defremote read-wishlist [code] ; doesn't need dissoc date
    (model/read-wishlist code))

(defremote update-wish [wish]
  (dissoc-date
    (model/update-wish wish)))

(defremote delete-wish [id]
  (dissoc-date
    (model/delete-wish id)))
