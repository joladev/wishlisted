(ns wishlistd.models.init
  (:require [clojure.java.jdbc :as sql]))

(def db {:classname "org.postgresql.Driver"
         :subprotocol "postgresql"
         :subname "//localhost:5432/cwl"
         :user "cwl"
         :password "wish"})

(defn create-wishlist []
  (sql/with-connection db
    (sql/create-table :wishlist
      [:code :varchar "PRIMARY KEY"]
      [:title :varchar "NOT NULL"]
      [:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"])))

(defn create-wish []
  (sql/with-connection db
    (sql/create-table :wish
      [:id :serial "PRIMARY KEY"]
      [:description :varchar "NOT NULL"]
      [:created_at :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
      [:url :varchar]
      [:wishlist_code :varchar]
      ["constraint fk_wish_wishlist foreign key(wishlist_code) references wishlist(code) on delete cascade"])))

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
