// Login module
define([
  "app",
  "router"
],

function(app,Router) {

  // Create a new module.
  var Login = app.module();

  // Default Model.
  Login.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Login.Collection = Backbone.Collection.extend({
    model: Login.Model
  });

  // Default View.
  Login.Views.Layout = Backbone.Layout.extend({
    el: "#main",
    template: "login",
    events : {
      "click #confirm" : "confirm"
    },

    // Override the render method with a custom syntax.
    render: function(template, context) {
      return template(context);
    },
    
    // Once the View has finished render, stick it in the Document.
    afterRender: function() {
      // this.$el.appendTo("#main");
    },
    confirm: function () {
      window.localStorage.setItem("pass",true);
      window.location.replace(window.location.href);
    }
  });

  // Return the module for AMD compliance.
  return Login;

});
