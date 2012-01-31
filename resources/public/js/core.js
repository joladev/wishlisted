var wishlist = function () {
  var data = null;
}

wishlist.prototype.load = function(key, callback) {
  var _this = this;
  $.get("wishlist/" + key, function(data) {
    _this.data = $.parseJSON(data);
    _this.key = key;
    callback(data);
  });
};



var app = function () {
  this.$content = $('div.span10');
};
