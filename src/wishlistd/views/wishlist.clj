(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common]
            [wishlistd.json :as response]
            [wishlistd.models.redis :as model])
  (:use noir.fetch.remotes))

(defn main-page []
  (common/new-layout))

(defn create-wishlist-json [wishlist]
  (let [wishlist (model/create-wishlist wishlist)]
    (response/json wishlist)))

(defn get-wishlist-json [code]
  (let [wishlist (model/read-wishlist code)]
    (response/json wishlist)))

(defn update-wishlist-json [wishlist]
  (response/json (model/update-wishlist wishlist)))

(defremote create-wishlist [wishlist]
  (model/create-wishlist wishlist))

(defremote update-wishlist [wishlist]
  (model/update-wishlist wishlist))

(defremote read-wishlist [code]
  (model/read-wishlist code))
