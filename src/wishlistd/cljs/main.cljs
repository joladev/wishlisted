(ns wishlistd.client.main
  (:require [crate.core :as crate])
  (:use [jayq.core :only [$ append empty delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

(def $create  ($ "#create-wishlist"))
(def $content ($ "#box"))
(def $header  ($ "#title-box"))

(defpartial wish-li [{:keys [description url]}]
  [:li.wish
   [:div.delete]
   [:input {:type "text" :class "description" :value description}]
   [:input {:type "text" :class "url" :value url}]])

(defpartial wish-li-last []
  [:li.wish.last
   [:div.delete]
   [:input {:type "text" :class "description"}]
   [:input {:type "text" :class "url"}]])

(defpartial wish-ul [wishes]
  [:ul.wishes
    (for [wish wishes]
      (wish-li wish))
    (wish-li-last)])

(defpartial wishlist-title [title]
  [:input {:type "text" :class "title" :value title}])

(defn get-path []
  (.pop 
    (.split js/window.location.pathname "/")))

(defn show-wishlist [{:keys [wishes title] :as wishlist}]
  (empty $content)
  (empty $header)
  (append $content (wish-ul wishes))
  (append $header  (wishlist-title title)))


