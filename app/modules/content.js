// Content module
define([
// Application.
"app",
"modules/weibo"
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
        
        events: {

        },

        render: function(template, context) {
            return template(context);
        },

        afterRender: function() {
            this.setView("#list",new weibo.Views.List());
        }
       
    });

    // Return the module for AMD compliance.
    return Content;

});