(ns wishlistd.views.routes
  (:require [wishlistd.views.wishlist :as wishlist])
  (:use noir.core))

(defpage "/" [] (wishlist/main-page))
(defpage "/create-wishlist" [] (wishlist/create-wishlist))