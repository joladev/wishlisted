(ns wishlistd.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpartial layout [& content]
            (html5
              [:head
               [:title "wishlistd"]
               (include-css "/css/reset.css")
               (include-css "http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css")]
              [:body
               [:div#wrapper
                content]]))
