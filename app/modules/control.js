// Control module
define([
  // Application.
  "app",
  "modules/create",
  "jquery",
  "css!styles/control.css"
],

// Map dependencies from above array.
function(app,Create,$) {

  // Create a new module.
  var Control = app.module();

  // Default Model.
  Control.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Control.Collection = Backbone.Collection.extend({
    model: Control.Model
  });

  Control.View = Backbone.Layout.extend({
    el : false,
    template: "control",
    events : {
      "click li#log-out" : "logout",
      "click li#create-new" : "create",
      "click li" : "active"
    },

    initialize : function  () {
    },
     // Override the render method with a custom syntax.
    render: function(template, context) {
      return template(context);
    },
    //dom events
    active : function  (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
    },
    
    // Once the View has finished render, stick it in the Document.
    afterRender: function() {
        // this.bindEvents();
    },
    logout : function () {
      window.localStorage.removeItem("pass");
      window.location.replace(window.location.href);
    },
    create : function  () {
      new Create.Views.Layout().render();
    }
  });

  // Return the module for AMD compliance.
  return Control;

});
