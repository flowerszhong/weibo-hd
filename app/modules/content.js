// Content module
define([
  // Application.
  "app",
  "modules/weibo"
],

// Map dependencies from above array.
function(app,weibo) {

  // Create a new module.
  var Content = app.module();

  // Default Model.
  Content.Model = Backbone.Model.extend({
  
  });

  // Default Collection.
  Content.Collection = Backbone.Collection.extend({
    model: Content.Model
  });

  window.weiboCollection = new weibo.Collection();
  // Default View.
  Content.View = Backbone.Layout.extend({
    template: "content",
    initialize : function () {
        weiboCollection.bind("add", this.addOne, this);
        weiboCollection.bind("reset", this.addAll, this);
        weiboCollection.bind("all", this.render, this);

        weiboCollection.fetch();
    },
    events : {

    },
    views : {
      
    },
    render : function  (template,context) {
        return template(context);
    },
    afterRender : function  () {
        this.$list = this.$el.find('#list');
    },
    add : function () {
        
    },
    addOne : function (_model) {
        // _model.set({
        //     "isNew" : true
        // });
        // _model.save();
        var _weibo = new weibo.Views.Layout({
            model : _model
        });
        this.$list.append(_weibo.render().$el);
    },
    addAll : function () {
        weiboCollection.each(this.addOne);
    }
  });

  // Return the module for AMD compliance.
  return Content;

});
