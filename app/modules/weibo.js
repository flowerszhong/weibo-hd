// Weibo module
define([
    "app",
    "jquery",
    "css!styles/weibo.css"
    ],

// Map dependencies from above array.

function(app, $) {

    // Create a new module.
    var Weibo = app.module();

    // Default Model.
    Weibo.Model = Backbone.Model.extend({
        defaults: {
            "content": null,
            "authorId": null,
            "createTime": Date.now(),
            "updateTime": null,
            "image": null,
            "video": null,
            "music": null
        }
    });

    weiboListStoragePool = window.weiboListStoragePool || new Store("weibo-collection");

    // Default Collection.
    Weibo.Collection = Backbone.Collection.extend({
        model: Weibo.Model,
        localStorage: weiboListStoragePool
    });

    weiboCollection = window.weiboCollection || new Weibo.Collection();


    Weibo.Views.Item = Backbone.View.extend({
        template : "weibo",
        el: false,
        serialize: function() {
            return {
                model: this.model
            }
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        }
    });

    Weibo.Views.List = Backbone.View.extend({
        template : "list",
        el : false,
        serialize: function() {
          // return { collection: weiboCollection };
        },
        initialize: function() {
          this.listenTo(weiboCollection, {
            "reset": this.render,
          });
          weiboCollection.fetch();
        },
        beforeRender: function() {
          weiboCollection.each(function(_weibo) {
            console.log(_weibo);
            this.insertView("ul",new Weibo.Views.Item({
              model: _weibo
            }));
          }, this);
        }
    });

    // Return the module for AMD compliance.
    return Weibo;

});