App.Views.UsersView = Backbone.View.extend({

  el: "#user-info",

  initialize: function() {
    this.template = HandlebarsTemplates['users/user'];
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click .edit-button': 'edit'
  },

  edit: function() {
    this.$el.empty();
    this.editTemplate = HandlebarsTemplates['users/editUserForm'];
    this.$el.append(this.editTemplate);
  }

});