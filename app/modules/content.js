// Content module
define([
// Application.
"app",
"modules/weibo",
"css!styles/content.css"
],

// Map dependencies from above array.

function(app, weibo) {

    // Create a new module.
    var Content = app.module();

    // Default Model.
    Content.Model = Backbone.Model.extend({

    });

    // Default Collection.
    Content.Collection = Backbone.Collection.extend({
        model: Content.Model
    });

    // Default View.
    Content.View = Backbone.Layout.extend({
        template: "content",

        views : {
            "#list" : new weibo.Views.List()
        },

        afterRender: function() {
            // new weibo.Views.List().render();
        }
       
    });

    // Return the module for AMD compliance.
    return Content;

});