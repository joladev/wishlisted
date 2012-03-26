(ns wishlistd.views.routes
  (:use noir.core
        wishlistd.views.wishlist))

(defpage "/" []
  (main-page))

(defpage "/:ajax" [] ; catchall! kinda...
  (main-page))
