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
  (let [wishlist (create-wishlist-with-wishes)]
    (response/json (dissoc wishlist :created_at)))) ; not serializable into json

(defpartial wish-as-li [wish]
  [:label "Description " [:input {:type "text"} (:description wish)]]
  [:label "URL" [:input {:type "text"} (:url wish)]])

(defpartial wishlist-as-html [wishlist]
  [:h3 {:class "wishlist-title"} (:title wishlist)]
  [:ul
   (wish-as-li nil)
   (map wish-as-li (:wishes wishlist))])

(defn create-wishlist []
  (let [wishlist (insert-wishlist {:title "Default"})
        with-wishes (assoc wishlist :wishes (get-wishes-for-wishlist wishlist))]
    (wishlist-as-html with-wishes)))