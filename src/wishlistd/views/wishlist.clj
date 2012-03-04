(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common]
            [wishlistd.models.sql :as model])
  (:use noir.fetch.remotes))

(defn main-page []
  (common/new-layout))

(defremote create-wishlist [wishlist]
  (model/create-wishlist wishlist))

(defremote update-wishlist [wishlist]
  (model/update-wishlist wishlist))

(defremote read-wishlist [code]
  (model/read-wishlist code))

(defremote update-wish [wish]
  (model/update-wish wish))

(defremote delete-wish [id]
  (model/delete-wish id))
