(ns wishlistd.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpartial layout [& content]
            (html5
              [:head
               [:title "wishlistd"]
               [:meta {:charset "utf-8"}]
               (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
               (include-js "/js/core.js")
               (include-css "/css/reset.css")
               (include-css "http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css")]
               (include-css "/css/core.css")
              [:body
               [:div.container 
                [:div.content
                 [:div.page-header
                  [:h1 "Wishlistd"]]
                [:div.row
                 [:div.span10
                  content]]]
                [:footer
                 [:p "&copy; _ME_ 2011"]]]]))

                  