(ns wishlistd.models.create
  (:require [clojure.java.jdbc :as sql]))

(def db {:classname "org.postgresql.Driver"
		 :subprotocol "postgresql"
		 :subname "//localhost:5432/cwl"
		 :user "cwl"
		 :password "wish"})

(defn create-wishlist []
  (sql/with-connection db
    (sql/create-table :wishlist
    	              [:id :serial "PRIMARY KEY"]
    	              [:code :varchar "NOT NULL"]
	                  [:title :varchar "NOT NULL"]
	                  [:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"])))

(defn create-wish []
  (sql/with-connection db
	(sql/create-table :wish
		              [:id :serial "PRIMARY KEY"]
		              [:description :varchar "NOT NULL"]
		              [:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
		              [:url :varchar]
		              [:wishlist :int]
		              ["constraint fk_wish_wishlist foreign key(wishlist) references Wishlist(id)"])))

(defn drop-tables []
  (sql/with-connection db
	(sql/drop-table :wish)
	(sql/drop-table :wishlist)))

(defn -main []
  (print "Migrating database...") (flush)
  (drop-tables)
  (create-wishlist)
  (create-wish)
  (println " done"))