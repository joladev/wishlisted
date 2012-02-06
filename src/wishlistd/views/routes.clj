(ns wishlistd.views.routes
  (:require [wishlistd.views.wishlist :as wishlist])
  (:use noir.core))

(defpage "/" []
  (wishlist/main-page))

(defpage "/wishlist/:code" {:keys [code]}
  (wishlist/get-wishlist-json code))

(defpage [:post "/wishlist/"] []
  (wishlist/create-wishlist-json))

(defpage "/:dontcare" [] ; catchall! kinda...
  (wishlist/main-page))