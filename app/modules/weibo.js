// Weibo module
define([
    "app",
    "jquery",
    "text!templates/weibo.html"],

// Map dependencies from above array.

function(app, $, _weiboHTML) {

    // Create a new module.
    var Weibo = app.module();

    // Default Model.
    Weibo.Model = Backbone.Model.extend({
        defaults: {
            "content": null,
            "authorId": null,
            "createTime": null,
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
        tagName: "div",
        className: "_weibo",
        template : "weibo",
        events: {},
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
        initialize: function() {
            weiboCollection.bind("add", this.addOne, this);
            weiboCollection.bind("reset", this.addAll, this);
            weiboCollection.bind("all", this.render, this);

            weiboCollection.fetch();
        },
        // serialize: function() {
        //     return { collection: weiboCollection};
        // },
        add: function() {

        },

        // beforeRender: function() {
        //     weiboCollection.each(function(_weibo) {
        //         this.insertView("ul", new Weibo.Views.Item({
        //             model: _weibo
        //         }));
        //     }, this);
        // },
        addOne: function(_model) {
            this.insertView("div",new Weibo.Views.Item({
                model : _model
            }));
        },
        addAll: function() {
            // weiboCollection.each(this.addOne);
        }
    });

    // Return the module for AMD compliance.
    return Weibo;

});