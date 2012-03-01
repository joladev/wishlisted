(ns wishlistd.client.main
  (:require [crate.core :as crate])
  (:use [jayq.core :only [$ append delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

(def $create ($ "#create-wishlist"))
(def $content ($ "#box"))
(def $header ($ "#title-box"))

(defpartial wish-li [{:keys [desc url]}]
  [:li.wish
   [:div.delete]
   [:input {:type "text" :class "description" :value desc}]
   [:input {:type "text" :class "url" :value url}]])

(defpartial wish-li-last []
  [:li.wish.last
   [:div.delete]
   [:input {:type "text" :class "description" :value desc}]
   [:input {:type "text" :class "url" :value url}]])

