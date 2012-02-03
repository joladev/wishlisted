(ns wishlistd.models.queries
  (:require [clojure.java.jdbc :as sql])
  (:use wishlistd.code))

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

(defn get-wishlist [code] ; code is unique
  (sql/with-connection db
    (sql/with-query-results results
      ["select * from wishlist where code=?" code]
      (first (into [] results)))))

(defn update-wishlist [{:keys [id] :as wishlist}]
  (sql/with-connection db
    (sql/update-values :wishlist ["id=?" id] wishlist)))

(defn- helper-insert-wishlist [wishlist]
  (first
    (sql/with-connection db
      (sql/insert-records :wishlist wishlist))))

(defn insert-wishlist [wishlist]
  (let [code (random-code code-length)
        finished (assoc wishlist :code code)]
    (try 
      (helper-insert-wishlist finished)
      (catch Exception _
        (insert-wishlist wishlist))))) ; simply try again if it fails

(defn delete-wishlist [{:keys [code]}] ; code is unique
  (first
    (sql/with-connection db
      (sql/delete-rows :wishlist ["code=?" code]))))

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

(defn update-wish [wish]
  (let [{:keys [id]} wish]
    (sql/with-connection db
      (sql/update-values :wish ["id=?" id] wish))))

;; ADVANCED STUFF

(defn create-wishlist-with-wishes []
  (let [wishlist (insert-wishlist {:title "Default"})]
    (assoc wishlist :wishes [])))

(defn get-wishlist-with-wishes [code]
  (when-let [wishlist (get-wishlist code)]
    (assoc wishlist :wishes (get-wishes-for-wishlist wishlist))))