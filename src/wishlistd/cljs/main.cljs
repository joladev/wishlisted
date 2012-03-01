(ns overtoneinterface.client.main
(ns wishlistd.client.main
  (:require [crate.core :as crate])
  (:use [jayq.core :only [$ append delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

(defpartial wish-li [desc url]
(def $create ($ "#create-wishlist"))
(def $content ($ "#box"))
(def $header ($ "#title-box"))
  [:li.wish
   [:div.delete]
   [:input {:type "text" :class "description" :value desc}]
   [:input {:type "text" :class "url" :value url}]])
