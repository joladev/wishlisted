(ns wishlistd.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append empty delegate data]])
  (:use-macros [crate.macros :only [defpartial]]
               [fetch.macros :only [letrem]]))

; ACCESS VARIABLES FOR IMPORTANT ELEMENTS

(def $create  ($ "#create-wishlist"))
(def $content ($ "#box"))
(def $header  ($ "#title-box"))
(def $body    ($ "body"))

; HTML PARTIALS

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

; GETTING AND SETTING

(defn get-path []
  (.pop 
    (.split js/window.location.pathname "/")))

(defn show-wishlist! [{:keys [wishes title] :as wishlist}]
  (empty $content)
  (empty $header)
  (append $content (wish-ul wishes))
  (append $header  (wishlist-title title)))

(defn title-from-html []
  (val wishlist-title))

(defn wishlist-from-html []
  {:title  (title-from-html)
   :wishes (wishes-from-html)
   :code   (get-path)})

(defn create-wishlist-rem []
  (letrem [wishlist (create-wishlist {:title "Default"})]
    (show-wishlist! wishlist)))
