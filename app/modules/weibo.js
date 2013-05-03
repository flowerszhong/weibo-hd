// Weibo module
define([
  "app",
  "jquery"
],

// Map dependencies from above array.
function(app,$) {

  // Create a new module.
  var Weibo = app.module();

  // Default Model.
  Weibo.Model = Backbone.Model.extend({
      defaults:{
        "content" : null,
        "authorId" : null,
        "createTime" : null,
        "updateTime" : null,
        "image": null,
        "video" : null,
        "music" : null
      }
  });

  var weiboListStoragePool = window.weiboListStoragePool = new Store("weibo-collection");

  // Default Collection.
  Weibo.Collection = Backbone.Collection.extend({
    model: Weibo.Model,
    localStorage : weiboListStoragePool
  });

  // Default View.
  Weibo.Views.Layout = Backbone.Layout.extend({
    tagName : "div",
    className : "_weibo",
    template: "weibo",
    initialize: function() {
      console.log(this.model);
      _.bindAll(this, "render");
      // this.model.bind('change', this.render, this);
      // this.model.bind('destroy', this.remove, this);
      this.render();
    },
    render: function(template, context) {
        $.ajax({
          "url" :"error"
        });

        console.log(this.el);
        console.log(this.$el);
        console.log(this.model);
        console.log(this.template);

        $(this.el).html(this.template(this.model.toJSON()));
        // return template(this.model.toJSON());
        return this;
        return template(context);
    }

  });

  // Weibo.Views.Layout = Backbone.View.extend({
  //     tagName : "div",
  //     className : "_weibo",
  //     template: "weibo",
  //     events : {
  //     },
  //     render: function(template, context) {
  //         var self = this;
  //         return template(self.model.toJSON());
  //     }
  // });

  // Return the module for AMD compliance.
  return Weibo;

});
