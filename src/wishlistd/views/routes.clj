(ns wishlistd.views.routes
  (:use noir.core
        wishlistd.views.wishlist))

(defpage "/" []
  (main-page))

(defpage "/wishlist/:code" {:keys [code]}
  (get-wishlist-json code))

(defpage [:post "/wishlist/"] {:keys [code] :as wishlist}
  (if (nil? code)
    (create-wishlist-json wishlist)
    (update-wishlist-json wishlist)))
  
(defpage "/:dontcare" [] ; catchall! kinda...
  (main-page))