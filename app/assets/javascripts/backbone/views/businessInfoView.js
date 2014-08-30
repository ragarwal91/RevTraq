App.Views.BusinessInfoView = Backbone.View.extend({
  el: '#business-info',

  initialize: function() {
    console.log('business-info view');
    this.template = HandlebarsTemplates['businesses/businessInfo'];
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },

  render: function() {
    this.$el.empty();
    console.log('business info view render');
    this.$el.html(this.template(this.model.toJSON()));
  }
});



// App.Views.UsersView = Backbone.View.extend({

//   el: "#user-info",

//   initialize: function() {
//     console.log('user view init')
//     this.template = HandlebarsTemplates['users/user'];
//     this.listenTo(this.model, 'change', this.render)
//     this.render();
//   },

//   render: function() {
//     this.$el.empty();
//     console.log('user view render');
//     this.$el.html(this.template(this.model.toJSON()));
//   },

//   events: {
//     'click .edit-button': 'edit'
//   },

//   edit: function() {
//     this.$el.empty();
//     // App.Routers.users.navigate('users/' + this.model.id + '/edit');
//     console.log('edit user');
//     this.editTemplate = HandlebarsTemplates['users/editUserForm'];
//     this.$el.append(this.editTemplate);
//   }

// });