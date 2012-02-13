(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common]
            [wishlistd.json :as response])
  (:use noir.core
        wishlistd.models.redis))

(defn main-page []
  (common/layout ""))

(defn create-wishlist-json [wishlist]
  (let [wishlist (create-wishlist wishlist)]
    (response/json wishlist)))

(defn get-wishlist-json [code]
  (let [wishlist (read-wishlist code)]
    (response/json wishlist)))

(defn update-wishlist-json [wishlist]
  (response/json (update-wishlist wishlist)))