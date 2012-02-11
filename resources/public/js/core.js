var wishlist = function () {
  this.data;
};

wishlist.prototype.load = function(code, callback) {
  var _this = this;
  $.get("/wishlist/" + code, function (data) {
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
  box.append($('<input type="text" class="title">').val(this.data.title));
  var ul = $('<ul>');
  box.append(ul);
  if(this.data.wishes) {
    $.each(this.data.wishes, function (i, v) {
      var li = $('<li>');
      var desc = $('<input type="text" class="description">').val(v.description);
      var url = $('<input type="text" class="url">').val(v.url);
      ul.append(li);
      li.append(desc);
      li.append(url);
    });    
  }


  // Make one last empty set of boxes
  desc = $('<input type="text" class="description last">');
  url = $('<input type="text" class="url last">');
  li = $('<li>');
  ul.append(li);
  li.append(desc);
  li.append(url);

  return box;
}

var app = function () {
  this.$content = $('div.span10');
  this.$create = $('#create-wishlist');
  this.clickers();
};

app.prototype.newWishlist = function () {
  var _this = this;
  this.wishlist = new wishlist();
  this.wishlist.createNew(function () {

    _this.$content.empty();
    _this.wishlist.wishlistAsHTML(_this.$content);
    window.history.pushState(null, "lol", _this.wishlist.data.code);
  });
};

app.prototype.saveWishlist = function () {
  var _this = this;
  
};

app.prototype.loadWishlist = function (code) {
  var _this = this;
  this.wishlist = new wishlist();
  this.wishlist.load(code, function (data) {
    _this.$content.empty();
    _this.wishlist.wishlistAsHTML(_this.$content);
  });
};

app.prototype.clickers = function () {
  var _this = this;
  this.$create.click(function () {
    _this.newWishlist();
  });
};