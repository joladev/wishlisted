var wishlist = function () {
  var data;
  var key;
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

wishlist.prototype.createNew = funtion(callback) {
  var _this = this;

  var def = {
    title : "Default"
  };

  $.post("/wishlist/", def, function(data) {
    _this.data = data;
    callback(_this.data);
  });
};

wishlist.prototype.wishlistAsHTML = function() {
  var box = $('<div>');
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
};

app.prototype.newWishlist = function () {
  this.wishlist = new wishlist();
  
};
