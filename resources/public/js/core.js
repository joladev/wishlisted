var wishlist = function () {
  this.data;
  this.key;
};

wishlist.prototype.load = function(key, callback) {
  var _this = this;
  $.get("/wishlist/" + key, function (data) {
    _this.data = data;
    callback(_this.data);
  });
};

wishlist.prototype.save = function(data, callback) {
  $.post("/wishlist/", data, function () {
    callback();
  });
};

wishlist.prototype.createNew = function(callback) {
  var _this = this;

  var def = {
    title : "Default"
  };

  $.post("/wishlist/", def, function(data) {
    _this.data = data;
    callback();
  });
};

wishlist.prototype.wishlistAsHTML = function(box) {
  box.append($('<h3>').text(this.data.title));
  var ul = $('<ul>');
  box.append(ul);
  $.each(this.data.wishes, function (i, v) {
    var li = $('<li>');
    var desc = $('<p>').text(v.description);
    ul.append(li);
    li.append(desc);
  });

  return box;
}

var app = function () {
  this.$content = $('div.span10');
  this.$create = $('#create-wishlist');
  this.clickers();
};

app.prototype.newWishlist = function () {
  _this = this;
  this.$content.empty();
  this.wishlist = new wishlist();
  this.wishlist.createNew(function () {
    _this.wishlist.wishlistAsHTML(_this.$content);
    window.history.pushState(null, "lol", _this.wishlist.data.code);
  });
};

app.prototype.clickers = function () {
  var _this = this;
  this.$create.click(function () {
    _this.newWishlist();
  });
};