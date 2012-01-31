var wishlist = function () {
  var data = null;
};

wishlist.prototype.load = function(key, callback) {
  var _this = this;
  $.get("/wishlist/" + key, function (data) {
    _this.data = $.parseJSON(data);
    _this.key = key;
    callback(data);
  });
};

wishlist.prototype.save = function(data, callback) {
  var _this = this;
  $.post("/wishlist/", data, function () {
    // some form of feedback
  });
};

var app = function () {
  this.$content = $('div.span10');
};
