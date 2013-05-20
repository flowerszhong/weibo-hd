// Product module
define([
  // Application.
  "app",
  "modules/control",
  "modules/content",
  "modules/square",
  "css!styles/product.css"
],

// Map dependencies from above array.
function(app,Control,Content,Square) {

  // Create a new module.
  var Product = app.module();

  var controlView = Control.View,
      contentView = Content.View,
      squareView = Square.View;

  // Default View.
  Product.Views.Layout = Backbone.Layout.extend({
    template: "product",
    views : {
      "#control" : new controlView(),
      '#content' : new contentView(),
      '#square' : new squareView()
    },
    afterRender : function () {
      var _h = $(this.el).height();
      this.$el.find("#container").height(_h);
      var self = this;
      $(window).on("resize",function () {
          var _h = $(self.el).height();
          self.$el.find("#container").height(_h);
      })
    }
  });

  // Return the module for AMD compliance.
  return Product;
});
