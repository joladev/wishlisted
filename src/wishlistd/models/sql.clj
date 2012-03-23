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
  "Used to limit the fields used in select statements."
  (fields query :id :url :description))

(defn wishlist-fields [query]
  "Used to limit the fields used in select statements."
  (fields query :code :title))

;;;; HELPER

(defn- new-code []
  "Generates codes until it finds one not already in use."
  (let [code (random-code 8)]
    (if (nil? (select wishlist (where {:code code})))
      (new-code)
      code)))

;;;; CRUD

;; WISHLIST

(defn create-wishlist [wl]
  "Gets a new code and creates a wishlist using map from client."
  (let [code (new-code)
        neu (assoc wl :code code)]
    (insert wishlist
      (values neu))))

(defn read-wishlist [code]
  "Selects one wishlist row and all corresponding wish rows for a given code."
  (first
    (select wishlist (wishlist-fields)
      (with wish 
        (wish-fields)
        (order :id :asc))
      (where {:code code}))))

(defn update-wishlist [{:keys [code] :as wl}]
  "Updates a wishlist using map from client."
  (update wishlist
    (set-fields wl)
    (where {:code code})))

(defn delete-wishlist [code]
  "Deletes wishlist having the given code."
  (delete wishlist
    (where {:code code})))

;; WISH

(defn create-wish [w]
  "Creates a wish using map from client. 
   Map assumed to have keys [:description :url :wishlist_code]."
  (insert wish
    (values w)))

; No use for read-wish

(defn update-wish [{:keys [id] :as w}]
  "Updates a wish using map from client. Removes :wishlist_code and :id as 
   these will never be modified. Fetch library incorrectly gives us a string, 
   rather than int for id, so we parse it."
  (update wish
    (set-fields (dissoc w :wishlist_code :id))
    (where {:id (Integer/parseInt id)})))

(defn delete-wish [id]
  "Deletes a wish using id from client. Also has to parse id."
  (delete wish
    (where {:id (Integer/parseInt id)})))
