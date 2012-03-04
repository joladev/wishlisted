(ns wishlistd.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ remove append empty find val delegate data]])
  (:use-macros [crate.macros :only [defpartial]]
               [fetch.macros :only [letrem]]))

; ACCESS VARIABLES FOR IMPORTANT ELEMENTS

(def $create  ($ "#create-wishlist"))
(def $content ($ "#box"))
(def $header  ($ "#title-box"))
(def $body    ($ "body"))

; HTML PARTIALS

(defpartial wish-li [{:keys [id description url]}]
  [:li {:class "wish" :id id}
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
  (.pop (.split js/window.location.pathname "/")))

(defn set-path! [code]
  (.pushState js/window.history nil "" code))

(defn show-wishlist! [{:keys [wish title code] :as wishlist}]
  (empty $content)
  (empty $header)
  (append $content (wish-ul wish))
  (append $header  (wishlist-title title))
  (set-path! code))

(defn title-from-html []
  (val (find $header ".title")))

(defn wish-from-elem [$elem]
  {:id (.attr $elem "id")
   :description (val (find $elem ".description"))
   :url (val (find $elem ".url"))
   :wishlist_code (get-path)})

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

(defn read-wishlist-rem [code]
  (letrem [neu (read-wishlist code)]
    (show-wishlist! neu)))

(defn update-wishlist-title-rem []
  (let [wishlist {:code (get-path) :title (title-from-html)}]
    (letrem [neu (update-wishlist wishlist)]
      (fn [e] nil))))



; DELEGATES

(defn create-wishlist-clicker []
  (delegate $body "#create-wishlist" :click
    (fn [e]
      (.preventDefault e)
      (create-wishlist-rem))))

(defn wishlist-title-changer []
  (delegate $header wishlist-title :change
    (fn [e]
      (update-wishlist-title-rem))))

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


