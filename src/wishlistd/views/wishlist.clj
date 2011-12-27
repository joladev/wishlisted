(ns wishlistd.views.wishlist
  (:require [wishlistd.views.common :as common])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpage "/" []
         (common/layout
           [:h1 "STUFF HERE"]))