(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common]
            [wishlistd.json :as response])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers
        wishlistd.models.queries))

(defn main-page []
  (common/layout ""))

(defn create-wishlist-json []
  (let [wishlist (create-wishlist-with-wishes)]
    (response/json wishlist)))

(defn get-wishlist-json [code]
  (let [wishlist (get-wishlist-with-wishes code)]
    (response/json wishlist)))