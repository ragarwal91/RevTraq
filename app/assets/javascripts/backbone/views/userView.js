App.Views.UsersView = Backbone.View.extend({

  el: "#user-info",

  initialize: function() {
    console.log('user view init')
    this.template = HandlebarsTemplates['users/user'];
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },

  render: function() {
    console.log('user view render');

    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click .edit-button': 'edit'
  },

  edit: function() {
    // App.Routers.users.navigate('users/' + this.model.id + '/edit');
    console.log('edit user');
    this.editTemplate = HandlebarsTemplates['users/editUserForm'];
    this.$el.append(this.editTemplate);
  }

});