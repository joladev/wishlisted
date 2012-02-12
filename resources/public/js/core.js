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

wishlist.prototype.wishlistAsHTML = function(box) {
  box.append($('<input type="text" class="title">').val(this.data.title));
  var ul = $('<ul>');
  box.append(ul);
  if(this.data.wishes) {
    $.each(this.data.wishes, function (i, v) {
      var li = $('<li class="wish">');
      var desc = $('<input type="text" class="description">').val(v.description);
      var url = $('<input type="text" class="url">').val(v.url);
      ul.append(li);
      li.append(desc);
      li.append(url);
    });    
  }

  // Make one last empty set of boxes
  desc = $('<input type="text" class="description" value="">');
  url = $('<input type="text" class="url">');
  li = $('<li class="wish last">');
  ul.append(li);
  li.append(desc);
  li.append(url);

  return box;
}

wishlist.prototype.wishlistFromHTML = function ($content) {
  var result = {};
  result.title = $content.find('.title').val();
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
  this.$content = $('div.span10');
  this.$create = $('#create-wishlist');
  this.$save = $('#save-wishlist');
  this.clickers();
  this.wishClickers();
};

app.prototype.newWishlist = function () {
  var _this = this;
  this.wishlist = new wishlist();
  this.wishlist.createNew(function () {
    _this.$content.empty();
    _this.wishlist.wishlistAsHTML(_this.$content);
    _this.wishClickers(); // reload the change events on wish items
    window.history.pushState(null, "lol", _this.wishlist.data.code);
  });
};

app.prototype.saveWishlist = function () {
  var _this = this;
  var data = this.wishlist.wishlistFromHTML(this.$content);
  this.wishlist.save(data, function() {});
};

app.prototype.loadWishlist = function (code) {
  var _this = this;
  this.wishlist = new wishlist();
  this.wishlist.load(code, function (data) {
    _this.$content.empty();
    _this.wishlist.wishlistAsHTML(_this.$content);
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
  
  var $title = this.$content.find('.title');
  $title.data('oldVal', $title.val());
  $title.change(function () {
    if($(this).data('oldVal') !== $(this).val()) {
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
            desc = $('<input type="text" class="description" value="">');
            url = $('<input type="text" class="url">');
            li = $('<li class="wish last">');
            $(this).parent().after(li);
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
