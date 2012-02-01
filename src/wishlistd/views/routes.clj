(ns wishlistd.views.routes
  (:require [wishlistd.views.wishlist :as wishlist])
  (:use noir.core))

(defpage "/" []
  (wishlist/main-page))

(defpage "/wishlist/:code" {:keys [code]}
  (wishlist/get-wishlist-json code))

(defpage "/create-wishlist" []
  (wishlist/create-wishlist-json))
