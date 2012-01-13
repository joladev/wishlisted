(ns wishlistd.views.routes
  (:require [wishlistd.views.wishlist :as wishlist]
	        [wishlistd.models.queries :as queries])
  (:use noir.core))

(defpage "/" [] (wishlist/main-page))
(defpage "/create-wishlist" [] (wishlist/wishlist-as-html (queries/create-wishlist-with-wishes)))