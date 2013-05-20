// Create module
define([
  // Application.
  "app",
  "modules/weibo",
  "lodash",
  "css!styles/create.css"
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
    beforeRender : function  () {
      // this.$el.width(1000).height(1000);
    },
    render : function  (template,context) {
        return template(context);
    },
    afterRender : function  () {
        var self = this;
        $('body').append(this.$el);
        this.$content = this.$el.find('#new-weibo-content');
        $(document).on("keydown.create",function(e){
            if(e.keyCode === 27){
                self.remove();
            }
        })
    },
    events:{
        "click #send" : "send",
        "click #cancel": "cancel"
    },
    send : function  () {
        var weibo = {
            "id" : _.uniqueId('_weibo'),
            "createTime" : Date.now(),
            "content" : this.$content.val()
        };

        var _weibo = new Weibo.Model(weibo);
        window.weiboCollection.create(_weibo);
        window.weiboCollection.fetch();
    },
    cancel : function  () {
        $(document).off("keydown.create");
        this.remove();
    }
  });

  // Return the module for AMD compliance.
  return Create;

});
