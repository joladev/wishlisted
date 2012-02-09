(ns wishlistd.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(def initialize-js 
"
var s = null;
// Handle pops
var handlePop = function(evt) {
  var path = evt.target.location.pathname;
  if (path !== '/') { s.loadWishlist(path.substring(1,path.length)); }
};
// Set up the pop state to handle loads, skipping the first load
// to make chrome behave like others:
// http://code.google.com/p/chromium/issues/detail?id=63040
setTimeout(function() {
  window.onpopstate = function(evt) {
    try { handlePop(evt); } catch(err) { /* not loaded yet */ }
  };
}, 1000);
// Construct s and load initial path
$(function() {
  s = new app();
  handlePop({ target: window });
});
")

(defpartial layout [& content]
            (html5
              [:head
               [:title "wishlistd"]
               [:meta {:charset "utf-8"}]
               (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
               (include-js "/js/core.js")
               (include-css "/css/reset.css")
               (include-css "http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css")
               (include-css "/css/core.css")
               [:script {:type "text/javascript"} initialize-js]]
              [:body
               [:div.container 
                [:div.content
                 [:div.page-header
                  [:h1 "Wishlistd"]
                  [:input {:id "save-wishlist" :class "btn primary" :type "submit" :value "Save" :style "margin-left:550px;margin-right:-100px"}]
                  [:input {:id "create-wishlist" :class "btn primary" :type "submit" :value "Create wishlist" :style "margin-left:550px;margin-right:-100px"}]]
                [:div.row
                 [:div.span10
                  content]]]
                [:footer
                 [:p "&copy; _ME_ 2011"]]]]))

                  