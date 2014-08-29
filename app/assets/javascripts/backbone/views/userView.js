App.Views.UserView = Backbone.View.extend({
  initialize: function() {
    this.template = HandlebarsTemplates['users/user'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});