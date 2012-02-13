(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common]
            [wishlistd.json :as response])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers
        wishlistd.models.redis))

(defn main-page []
  (common/layout ""))

(defn create-wishlist-json []
  (let [wishlist (create-wishlist {:title "Default"})] ; will in the future get a wishlist from the client
    (response/json wishlist)))

(defn get-wishlist-json [code]
  (let [wishlist (read-wishlist code)]
    (response/json wishlist)))

(defn update-wishlist-json [wishlist]
  (response/json (update-wishlist wishlist)))