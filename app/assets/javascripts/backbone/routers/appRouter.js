App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function() {
    App.Collections.users = new App.Collections.UsersCollection();
    App.usersView = new App.Views.UsersView({
      collection: App.Collections.users
    });
  },

  routes: {
    "users/:id": "showUser"
  },

  showUser: function() {
    var user = new User({id: id});
    user.fetch();
  }

});