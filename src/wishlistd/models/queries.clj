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
;[:code :varchar :unique "NOT NULL"]
;[:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"])))

;wish
;[:id :serial "PRIMARY KEY"]
;[:description :varchar "NOT NULL"]
;[:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
;[:url :varchar]
;[:wishlist :int]
;["constraint fk_wish_wishlist foreign key(wishlist) references Wishlist(id)"])))

(defn get-wishlist [{:keys [code]}]
  (sql/with-connection db
	(sql/with-query-results results
      ["select * from wishlist where code=?" code]
      (into [] results))))

(defn insert-wishlist [wishlist]
  (sql/with-connection db
	(sql/insert-records :wishlist wishlist)))

(defn delete-wishlist [code]
  (sql/with-connection db
    (sql/delete-rows :wishlist ["code=?" code])))

(defn get-wishes-for-wishlist [id]; untested
  (sql/with-connection db
    (sql/with-query-results results
	  ["select * from wish where wishlist=?" id]
	  (into [] results))))

(defn insert-wish [wish id]; untested
  (sql/with-connection db
    (sql/insert-records :wish (assoc wish :wishlist id))))