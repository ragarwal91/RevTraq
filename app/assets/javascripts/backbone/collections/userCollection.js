App.Collections.UsersCollection = Backbone.Collection.extend({
  model: App.Models.User,
  url: '/users'
});