(ns wishlistd.views.routes
  (:require [wishlistd.views.wishlist :as wishlist])
  (:use noir.core))

(defpage "/" []
  (wishlist/main-page))

(defpage "/wishlist/:code" {:keys [code]}
  (wishlist/get-wishlist-json code))

(defpage [:post "/wishlist/"] {:keys [code] :as wishlist}
  (if (nil? code)
    (wishlist/create-wishlist-json wishlist)
    (wishlist/update-wishlist-json wishlist)))
  
(defpage "/:dontcare" [] ; catchall! kinda...
  (wishlist/main-page))