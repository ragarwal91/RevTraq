App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'users/:id': 'showUser'
  },

  initialize: function() {
    console.log('initialize');
    App.Models.user = new App.Models.User();
    App.usersView = new App.Views.UsersView({
      model: App.Models.user
    });
  },

  showUser: function(id) {
    App.usersView.model.fetch({url: '/users/'+ id})
    // console.log('user route view');
    // var user = new User({id: id});
    // user.fetch();
  }

});