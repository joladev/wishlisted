(defproject wishlistd "0.1.0-SNAPSHOT"
            :description "Simple application using Clojure, Noir, ClojureScript, Jayq, Fetch, Crate 
                          and Korma to handle easy creation of wishlists in the browser."
            :dependencies [[org.clojure/clojure "1.3.0"]
                           [noir "1.3.0-alpha10"]
                           [jayq "0.1.0-SNAPSHOT"]
                           [crate "0.1.0-SNAPSHOT"]
                           [fetch "0.1.0-alpha2"]
                           [korma "0.3.0-beta5"]
                           [postgresql "9.0-801.jdbc4"]]
            :plugins [[lein-cljsbuild "0.1.2"]]
            :cljsbuild
              {:builds
               [{:source-path "src",
                 :compiler
                 {:output-dir "cljs/",
                  :output-to "resources/public/cljs/cljs.js",
                  :optimizations :simple,
                  :pretty-print true}}]}
            :main wishlistd.server)

