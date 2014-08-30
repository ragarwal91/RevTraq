App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'users/:id': 'showUser',
    'users/:id/edit': 'editUser',
    'businesses/:id': 'showBusinessInfo'
  },

  initialize: function() {
    console.log('initialize');
    App.Models.user = new App.Models.User();
    App.Models.business = new App.Models.BusinessInfo();
    
  },

  events: {
    'click .edit-button': 'showUser',
    'click .business-info-button': 'showBusinessInfo'
  },

  showUser: function(id) {
    App.usersView = new App.Views.UsersView({
      model: App.Models.user
    });
    App.usersView.model.fetch({url: '/users/'+ id})
    // console.log('user route view');
    // var user = new User({id: id});
    // user.fetch();
  },

  editUser: function(id) {
    console.log('edit route');
  },

  showBusinessInfo: function(id) {
    console.log('business info');
    App.businessInfoView = new App.Views.BusinessInfoView({
      model: App.Models.business
    });
    App.businessInfoView.model.fetch({url: '/businesses/'+ id})
  }

});