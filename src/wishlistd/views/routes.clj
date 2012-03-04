(ns wishlistd.views.routes
  (:use noir.core
        wishlistd.views.wishlist))

(defpage "/" []
  (main-page))

(defpage "/:dontcare" [] ; catchall! kinda...
  (main-page))