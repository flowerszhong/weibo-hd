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
        manage : false,
        tagName: "div",
        className: "_weibo",
        template : "<div class='_weibo'><div>",
        events: {},
        // serialize: function() {
        //     return {
        //         model: this.model
        //     }
        // },
        
        initialize : function  () {
            
        },
        render : function () {
            $(this.el).html(this.template);
        },
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        }
    });

    Weibo.Views.List = Backbone.View.extend({
        el : false,
        initialize: function() {
            weiboCollection.bind("add", this.addOne, this);
            weiboCollection.bind("reset", this.addAll, this);
            weiboCollection.bind("all", this.render, this);

            weiboCollection.fetch();
        },
        beforeRender: function() {
              // weiboCollection.each(function(_weibo) {
              //   this.insertView("#list", new Weibo.Views.Item({
              //     model: _weibo
              //   }));
              // }, this);
        },
        afterRender : function  () {
        },

        add: function() {

        },

        addOne: function(_model) {
            console.log("addOne");
            console.log(_model);
            var _v = new Weibo.Views.Item({
                model : _model
            });

            $("#list").append(_v.el);
        },
        addAll: function() {
            console.log("addAll");
            weiboCollection.each(this.addOne);
        }
    });

    // Return the module for AMD compliance.
    return Weibo;

});