define([
  "app"
],

function(app,login) {
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "test" : "testRouter",
      "login" : "login",
      "test" : "test"
    },

    index: function() {

    },
    testRouter : function  () {
      console.log("testRouter");
    },
    test : function  () {
      
    }
  });

  return Router;

});
