// Square module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Square = app.module();

  // Default Model.
  Square.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Square.Collection = Backbone.Collection.extend({
    model: Square.Model
  });

  // Default View.
  Square.View = Backbone.Layout.extend({
    template: "square",
    events : {

    },
    render : function  (template,context) {
      return template(context);
    },
    afterRender : function  () {
      
    }
  });

  // Return the module for AMD compliance.
  return Square;

});
