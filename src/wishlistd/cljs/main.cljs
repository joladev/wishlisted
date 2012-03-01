(ns overtoneinterface.client.main
(ns wishlistd.client.main
  (:require [crate.core :as crate])
  (:use-macros [crate.macros :only [defpartial]]))

(defpartial wish-li [desc url]
  [:li.wish
   [:div.delete]
   [:input {:type "text" :class "description" :value desc}]
   [:input {:type "text" :class "url" :value url}]])
