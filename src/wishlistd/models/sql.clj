(ns wishlistd.models.sql
  (:use korma.db
        korma.core
        wishlistd.code))

;;;; DB

(defdb prod 
  (postgres {:db "cwl"
             :username "cwl"
             :password "wish"}))

;;;; ENTITIES

(defentity wish)
(defentity wishlist
  (pk :code)
  (has-many wish {:fk "wishlist_code"}))

(defn wish-fields [query]
  (fields query :id :url :description))

(defn wishlist-fields [query]
  (fields query :code :title))

;;;; HELPER

(defn- new-code []
  (let [code (random-code 8)]
    (if (nil? (select wishlist (where {:code code})))
      (new-code)
      code)))

;;;; CRUD

;; WISHLIST

(defn create-wishlist [wl]
  (let [code (new-code)
        neu (assoc wl :code code)]
    (insert wishlist
      (values neu))))

(defn read-wishlist [code]
  (select wishlist (wishlist-fields)
    (with wish (wish-fields))
    (where {:code code})))

(defn update-wishlist [{:keys [code] :as wl}]
  (update wishlist
    (set-fields wl)
    (where {:code code})))

(defn delete-wishlist [code]
  (delete wishlist
    (where {:code code})))

;; WISH

(defn create-wish [w]
  (insert wish
    (values w)))

; No use for read-wish

(defn update-wish [{:keys [id] :as w}]
  (update wish
    (set-fields w)
    (where {:id id})))

(defn delete-wish [id]
  (delete wish
    (where {:id id})))
