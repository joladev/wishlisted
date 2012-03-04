(ns wishlistd.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append empty find val delegate data]])
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

(defn set-path! [code]
  (.pushState js/window.history nil "lol" code))

(defn show-wishlist! [{:keys [wishes title code] :as wishlist}]
  (empty $content)
  (empty $header)
  (append $content (wish-ul wishes))
  (append $header  (wishlist-title title))
  (set-path! code))

(defn title-from-html []
  (val ($ ".title")))

(defn wishes-from-html []
  (for [el wish-li]
    {:description (val (find el ".description"))
     :url (val (find el ".url"))}))

(defn wishlist-from-html []
  {:title  (title-from-html)
   :wishes (wishes-from-html)
   :code   (get-path)})

(defn value-changed?! [$this]
  (if (= (data $this :old-val) (val $this))
    false
    (do
      (data $this :old-val (val $this))
      true)))

; REMOTES

(defn create-wishlist-rem []
  (letrem [neu (create-wishlist {:title "Default"})]
    (show-wishlist! neu)))

(defn update-wishlist-rem []
  (let [wishlist (wishlist-from-html)]
    (letrem [neu (update-wishlist wishlist)]
      (show-wishlist! neu))))

(defn read-wishlist-rem [code]
  (letrem [neu (read-wishlist code)]
    (show-wishlist! neu)))

; DELEGATES

(defn create-wishlist-clicker []
  (delegate $body "#create-wishlist" :click
    (fn [e]
      (.preventDefault e)
      (create-wishlist-rem))))

(defn wishlist-title-changer []
  (delegate $header wishlist-title :change
    (fn [e]
      (update-wishlist-rem))))

(defn wishlist-wish-description-changer []
  (delegate $content ".description" :change
    (fn [e]
      (this-as me
        (when (value-changed?! me)
          (when (empty? (val me))
            (when-not (.hasClass (.parent me) "last")
              (remove (.parent me))))
          (update-wishlist-rem))))))

(defn wishlist-wish-url-changer []
  (delegate $content ".url" :change
    (fn [e]
      (this-as me
        (when-not (empty? (val me)) 
          (update-wishlist-rem))))))

(defn wishlist-delete-clicker []
  (delegate $content ".delete" :click
    (fn [e]
      (this-as me
        (remove (.parent ($ me)))
        (update-wishlist-rem)))))

; START IT UP

(let [code (get-path)]
  (when-not (empty? code)
    (read-wishlist-rem code)))


