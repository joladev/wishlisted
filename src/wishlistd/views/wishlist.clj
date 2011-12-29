(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defn main-page []
  (common/layout
    [:input {:id "create-wishlist" :class "btn primary" :type "submit" :value "Create wishlist" :style "margin-left:350px;margin-top:150px;"}]))

;(defn create-wishlist []
;  ())