(defproject wishlistd "0.1.0-SNAPSHOT"
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.2.1"]
                           [noir "1.1.0"]
                           [cheshire "2.1.0"]
                           [org.clojars.tavisrudd/redis-clojure "1.3.1-SNAPSHOT"]]
            :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}
            :main wishlistd.server)

