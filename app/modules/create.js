// Create module
define([
  // Application.
  "app",
  "modules/weibo",
  "lodash"
],

// Map dependencies from above array.
function(app,Weibo,_) {

  // Create a new module.
  var Create = app.module();

  // Default Model.
  Create.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Create.Collection = Backbone.Collection.extend({
    model: Create.Model
  });

  // Default View.
  Create.Views.Layout = Backbone.Layout.extend({
    // el : "body",
    tagName : "div",
    className : "create-weibo",
    template: "create",
    render : function  (template,context) {
        return template(context);
    },
    afterRender : function  () {
        $('body').append(this.$el);
    },
    events:{
        "click #send" : "send",
        "click #cancel": "cancel"
    },
    send : function  () {
        var weibo = {
            "id" : _.uniqueId('_weibo'),
            "content" : "a new weibo"
        };

        var _weibo = new Weibo.Model(weibo);
        window.weiboCollection.create(_weibo);
    },
    cancel : function  () {
        
    }
  });

  // Return the module for AMD compliance.
  return Create;

});
