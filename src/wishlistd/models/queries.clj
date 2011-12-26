(ns wishlistd.models.queries
  (:require [clojure.java.jdbc :as sql]))

(def db {:classname "org.postgresql.Driver"
         :subprotocol "postgresql"
         :subname "//localhost:5432/cwl"
         :user "cwl"
         :password "wish"})
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

(defn get-wishlist-by-code [{:keys [code]}] ; code is unique not null
  (sql/with-connection db
    (sql/with-query-results results
      ["select * from wishlist where code=?" code]
      (first (into [] results)))))

(defn get-wishlist-by-id [{:keys [id]}]
  (sql/with-connection db
    (sql/with-query-results results
      ["select * from wishlist where id=?" id]
      (first (into [] results)))))

(defn insert-wishlist [wishlist]
  (sql/with-connection db
    (sql/insert-records :wishlist wishlist)))

(defn delete-wishlist [{:keys [code]}] ; code is unique not null
  (sql/with-connection db
    (sql/delete-rows :wishlist ["code=?" code])))

(defn update-wishlist [wishlist]
  (let [{:keys [id]} wishlist]
    (sql/with-connection db
      (sql/update-values :wishlist ["id=?" id] wishlist))))

(defn get-wishes-for-wishlist [{:keys [id]}]
  (sql/with-connection db
    (sql/with-query-results results
      ["select * from wish where wishlist=?" id]
      (into [] results))))

(defn insert-wish [wish {:keys [id]}]
  (sql/with-connection db
    (sql/insert-records :wish (assoc wish :wishlist id))))

(defn delete-wish [{:keys [id]}]
  (sql/with-connection db
    (sql/delete-rows :wish ["id=?" id])))

(defn update-wishlist [wish]
  (let [{:keys [id]} wish]
    (sql/with-connection db
      (sql/update-values :wish ["id=?" id] wish))))
