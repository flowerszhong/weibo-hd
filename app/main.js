require([
  "app",
  "router",
  "modules/login",
  "modules/product"
],
function(app,Router,Login,Product) {
  app.router = new Router();
  
  var flag = window.localStorage.getItem("pass");

  if(!flag){
    var loginView = new Login.Views.Layout();
    loginView.render();
  }else{
    var productLayout = new Product.Views.Layout();
    productLayout.$el.appendTo("#main");
    productLayout.render();
    Backbone.history.start({ pushState: true, root: app.root });
  }
  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
    var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
    var root = location.protocol + "//" + location.host + app.root;
    // Ensure the root is part of the anchor href, meaning it's relative.
    if (href.prop.slice(0, root.length) === root) {
      evt.preventDefault();
      Backbone.history.navigate(href.attr, true);
    }
  });

});
