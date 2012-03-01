(defproject wishlistd "0.1.0-SNAPSHOT"
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.3.0"]
                           [noir "1.3.0-alpha10"]
                           [cheshire "2.2.0"]
                           [jayq "0.1.0-SNAPSHOT"]
                           [crate "0.1.0-SNAPSHOT"]
                           [fetch "0.1.0-SNAPSHOT"]
                           [org.clojars.tavisrudd/redis-clojure "1.3.1"]]
            :plugins [[lein-cljsbuild "0.1.2"]]
            :cljsbuild
              {:builds
               [{:source-path "src",
                 :compiler
                 {:output-dir "resources/public/cljs/",
                  :output-to "resources/public/cljs/cljs.js",
                  :optimizations :simple,
                  :pretty-print true}}]}
            :main wishlistd.server)

