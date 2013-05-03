// Logout module
define([
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Logout = app.module();

  // Default Model.
  Logout.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Logout.Collection = Backbone.Collection.extend({
    model: Logout.Model
  });

  // Default View.
  Logout.Views.Layout = Backbone.Layout.extend({
    template: "logout"
  });

  // Return the module for AMD compliance.
  return Logout;

});
