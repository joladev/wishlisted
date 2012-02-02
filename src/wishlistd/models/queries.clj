(ns wishlistd.models.queries
  (:require [clojure.java.jdbc :as sql])
  (:use wishlistd.code)) ; generate-code

(def db {:classname "org.postgresql.Driver"
         :subprotocol "postgresql"
         :subname "//localhost:5432/cwl"
         :user "cwl"
         :password "wish"})

(def code-length 8)

;wishlist
;[:id :serial "PRIMARY KEY"]
;[:title :varchar "NOT NULL"]
;[:code :varchar :unique]
;[:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"])))

;wish
;[:id :serial "PRIMARY KEY"]
;[:description :varchar "NOT NULL"]
;[:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
;[:url :varchar]
;[:wishlist :int]
;["constraint fk_wish_wishlist foreign key(wishlist) references Wishlist(id) on delete cascade"])))


;; CRUD

(defn get-wishlist [{:keys [code]}] ; code is unique
  (sql/with-connection db
    (sql/with-query-results results
      ["select * from wishlist where code=?" code]
      (first (into [] results)))))

(defn update-wishlist [wishlist]
  (let [{:keys [id]} wishlist]
    (sql/with-connection db
      (sql/update-values :wishlist ["id=?" id] wishlist))))

(defn- helper-insert-wishlist [wishlist]
  (first
    (sql/with-connection db
      (sql/insert-records :wishlist wishlist))))

(defn insert-wishlist [wishlist]
  (let [inserted (helper-insert-wishlist wishlist) ; make wishlist
        code (random-code code-length) ; make code
        finished (assoc inserted :code code)] ; add code to list
    (update-wishlist finished)
    (get-wishlist finished)))

(defn delete-wishlist [{:keys [code]}] ; code is unique
  (first
    (sql/with-connection db
      (sql/delete-rows :wishlist ["code=?" code]))))

(defn get-wishes-for-wishlist [{:keys [id]}]
  (sql/with-connection db
    (sql/with-query-results results
      ["select * from wish where wishlist=?" id]
      (into [] results))))

(defn get-wishes-for-wishlist-no-date [{:keys [id]}]
  (sql/with-connection db
    (sql/with-query-results results
      ["select * from wish where wishlist=?" id]
      (into [] (map #(dissoc % :created_at) results)))))

(defn insert-wish [wish {:keys [id]}]
  (sql/with-connection db
    (sql/insert-records :wish (assoc wish :wishlist id))))

(defn delete-wish [{:keys [id]}]
  (sql/with-connection db
    (sql/delete-rows :wish ["id=?" id])))

(defn update-wish [wish]
  (let [{:keys [id]} wish]
    (sql/with-connection db
      (sql/update-values :wish ["id=?" id] wish))))

; (defn get-code []
;   (sql/with-connection db
;     (sql/with-query-results results
;       ["select last_value+1 as last_value from wishlist_id_seq"]
;       (generate-code (:last_value (first (into [] results)))))))

;; ADVANCED STUFF

(defn create-wishlist-with-wishes []
  (let [wishlist (insert-wishlist {:title "Default"})]
    (assoc wishlist :wishes [])))

(defn get-wishlist-with-wishes [{:keys [code]}]
  (when-let [wishlist (get-wishlist {:code code})]
    (assoc wishlist :wishes (get-wishes-for-wishlist-no-date wishlist))))