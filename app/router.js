define([
  "app"
],

function(app,login) {
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "test" : "testRouter",
      "login" : "login"
    },

    index: function() {

    },
    testRouter : function  () {
      console.log("testRouter");
    }
  });

  return Router;

});
