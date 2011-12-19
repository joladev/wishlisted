(ns wishlistd.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpartial layout [& content]
            (html5
              [:head
               [:title "wishlistd"]
               (include-css "/css/reset.css")]
              [:body
               [:div#wrapper
                content]]))
