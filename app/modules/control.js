// Control module
define([
  // Application.
  "app",
  "modules/create"
],

// Map dependencies from above array.
function(app,Create) {

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
    // el : "#control",
    template: "control",
    events : {
      "click li#log-out" : "logout",
      "click li#create-new" : "create"
    },

    initialize : function  () {
        
    },
     // Override the render method with a custom syntax.
    render: function(template, context) {
      return template(context);
    },
    
    // Once the View has finished render, stick it in the Document.
    afterRender: function() {
      
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
