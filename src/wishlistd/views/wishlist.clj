(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common]
            [noir.response :as response])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers
        wishlistd.models.queries))

(defn main-page []
  (common/layout ""))

(defn create-wishlist-json []
  (let [wishlist (insert-wishlist {:title "Default"})
        with-wishes (assoc wishlist :wishes (get-wishes-for-wishlist wishlist))]
    (response/json (dissoc with-wishes :created_at))))

(defn create-wishlist []
  (let [wishlist (insert-wishlist {:title "Default"})
        with-wishes (assoc wishlist :wishes (get-wishes-for-wishlist wishlist))]
    (wishlist-as-html with-wishes)))

(defpartial wishlist-as-html [wishlist]
  [:h1 (:title wishlist)]
  [:p "LOLOLOLOL"])
