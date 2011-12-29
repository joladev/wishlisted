(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers
        wishlistd.models.queries))

(defn main-page []
  (common/layout ""))

(defn- new-wishlist []
  {:title "Default"})

(defn- wish-as-input []
  [:input {:type "text"}])

(defn create-wishlist []
  (let [wishlist (insert-wishlist {:title "Default"})]
    (html
	  [:h3 (str "Title: " (:title wishlist))]
	  (map wish-as-input (get-wishes-for-wishlist wishlist)))))