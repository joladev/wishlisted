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
   [:input {:type "text" :class "description last"}]
   [:input {:type "text" :class "url last"}]])

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

(defn set-path! [code]
  (.pushState js/window.history nil "lol" code))

(defn show-wishlist! [{:keys [wishes title code] :as wishlist}]
  (empty $content)
  (empty $header)
  (append $content (wish-ul wishes))
  (append $header  (wishlist-title title))
  (set-path! code))

(defn title-from-html []
  (val wishlist-title))

(defn wishlist-from-html []
  {:title  (title-from-html)
   :wishes (wishes-from-html)
   :code   (get-path)})

; REMOTES

(defn create-wishlist-rem []
  (letrem [neu (create-wishlist {:title "Default"})]
    (show-wishlist! neu)))

(defn update-wishlist-rem [wishlist]
  (letrem [neu (update-wishlist wishlist)]
    (show-wishlist! neu)))

; DELEGATES

(defn create-wishlist-clicker []
  (delegate $body "#create-wishlist" :click
    (fn [e]
      (create-wishlist-rem))))

(defn wishlist-title-changer []
  (delegate $header wishlist-title :change
    (fn [e]
      (let [wishlist (wishlist-from-html)]
        (update-wishlist-rem wishlist)))))
