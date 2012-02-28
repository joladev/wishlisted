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
  data.code = this.data.code;
  $.post("/wishlist/", data, function () {
    callback();
  });
};

wishlist.prototype.createNew = function(callback) {
  var _this = this;
  var def = { title : "Default" };

  $.post("/wishlist/", def, function(data) {
    _this.data = data;
    callback();
  });
};

wishlist.prototype.wishlistAsHTML = function($header, $box) {
  $header.append($('<input type="text" class="title">').val(this.data.title));
  var ul = $('<ul class="wishes">');
  $box.append(ul);
  if(this.data.wishes) {
    $.each(this.data.wishes, function (i, v) {
      var li = $('<li class="wish">');
      var del = $('<div class="delete">');
      var desc = $('<input type="text" class="description">').val(v.description);
      var url = $('<input type="text" class="url">').val(v.url);
      ul.append(li);
      li.append(del);
      li.append(desc);
      li.append(url);
    });    
  }

  // Make one last empty set of boxes
  var desc = $('<input type="text" class="description" value="">');
  var url = $('<input type="text" class="url">');
  var li = $('<li class="wish last">');
  var del = $('<div class="delete">');
  ul.append(li);
  li.append(del);
  li.append(desc);
  li.append(url);

  return box;
};

wishlist.prototype.wishlistFromHTML = function ($header,$content) {
  var result = {};
  result.title = $header.find('.title').val();
  var $wishes = $('.wish');
  result.wishes = [];
  
  $.each($wishes, function (i) {
    var description = $(this).find('.description').val();
    var url = $(this).find('.url').val();
    
    if (description) {
      result.wishes.push({
        "description": description,
        "url": url
      });
    }
  });
  
  return result;
};

var app = function () {
  this.$content = $('div#box');
  this.$header = $('div#title-box');
  this.$content.empty(); // remove the "activate javascript" message
  this.$create = $('#create-wishlist');
  this.clickers();
};

app.prototype.newWishlist = function () {
  var _this = this;
  this.wishlist = new wishlist();
  this.wishlist.createNew(function () {
    _this.$content.empty();
    _this.$header.empty();
    _this.wishlist.wishlistAsHTML(_this.$header,_this.$content);
    _this.wishClickers(); // set the change events on wish items
    window.history.pushState(null, "lol", _this.wishlist.data.code);
  });
};

app.prototype.saveWishlist = function () {
  var _this = this;
  var data = this.wishlist.wishlistFromHTML(this.$header,this.$content);
  this.wishlist.save(data, function() {});
};

app.prototype.loadWishlist = function (code) {
  var _this = this;
  this.wishlist = new wishlist();
  this.wishlist.load(code, function (data) {
    _this.$content.empty();
    _this.$header.empty();
    _this.wishlist.wishlistAsHTML(_this.$header,_this.$content);
    _this.wishClickers(); // reload the change events on wish items
  });
};

app.prototype.clickers = function () {
  var _this = this;
  this.$create.click(function () {
    _this.newWishlist();
  });
};

app.prototype.wishClickers = function () {
  var _this = this;
  
  var $title = this.$header.find('.title');
  $title.data('oldVal', $title.val());
  $title.unbind('change');
  $title.change(function () {
    if($(this).data('oldVal') !== $(this).val() && $(this).val()) {
      _this.saveWishlist();
    }
  });
  
  this.$content.find('.wish').each(function () {
    var $desc = $(this).find('.description');
    var $url = $(this).find('.url');
    $desc.data('oldVal', $desc.val());
    $url.data('oldVal', $url.val());
    
    $desc.unbind('change');
    $desc.change(function () {
      if ($(this).data('oldVal') !== $(this).val()) {
        $(this).data('oldVal', $(this).val());
        
        if ($(this).val()) {
          _this.saveWishlist();
          
          if($(this).parent().hasClass('last')) {
            var desc = $('<input type="text" class="description">');
            var url = $('<input type="text" class="url">');
            var li = $('<li class="wish last">');
            var del = $('<div class="delete">');
            $(this).parent().after(li);
            li.append(del);
            li.append(desc);
            li.append(url);
            _this.wishClickers();
            
            $(this).parent().removeClass('last');
          }
        }
        else {
          if (!$(this).parent().hasClass('last')) {
            $(this).parent().remove();
            _this.saveWishlist();
          }
        }
      }
    });
    
    $url.unbind('click');
    $url.change(function () {
      if ($(this).data('oldVal') !== $(this).val()) {
        $(this).data('oldVal', $(this).val());
        
        if ($(this).prev().val()){
          _this.saveWishlist();
        }
      }
    });
  });
};
