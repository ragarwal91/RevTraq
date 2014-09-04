App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'users/:id': 'showUser',
    'users/:id/edit': 'editUser',
    'businesses/:id': 'showBusinessInfo',
    'businesses/:id/sales/new': 'newSale'
  },

  initialize: function() {
    App.Models.user           = new App.Models.User();
    App.Models.business       = new App.Models.BusinessInfo();
    App.Collections.sale      = new App.Collections.SalesCollection();
    App.Collections.daySale   = new App.Collections.LastDaySaleCollection();
    App.Collections.weekSale  = new App.Collections.LastWeekSaleCollection();
    App.Collections.monthSale = new App.Collections.LastMonthSaleCollection();
    App.Models.sale           = new App.Models.Sale();
    
    
  },

  events: {
    'click .edit-button': 'editUser',
    'click .business-info-button': 'showBusinessInfo',
    'click .last-week': 'showWeekSaleGraph',
    'click .last-month': 'showMonthSaleGraph'
  },

  showUser: function(id) {
    $('#user-container').show();
    $('#business-container').hide();
    App.usersView = new App.Views.UsersView({
      model: App.Models.user
    });
    App.usersView.model.fetch({url: '/users/'+ id})
  },

  editUser: function(id) {
  },

  showBusinessInfo: function(id) {
    App.businessInfoView = new App.Views.BusinessInfoView({
      model: App.Models.business
    });
    App.businessInfoView.model.fetch({url: '/businesses/'+ id});
    App.Views.saleForm  = new App.Views.NewSaleForm({
      collection: App.Collections.sale
    });

    App.Views.lastDay  = new App.Views.LastDay({
      collection: App.Collections.daySale
    });
    App.Views.lastDay.collection.businessId = id;
    App.Collections.weekSale.businessId = id;
    App.Collections.monthSale.businessId = id;
    App.Views.lastDay.collection.fetch();

    App.Views.graph    = new App.Views.GraphView({
      collection: App.Collections.sale
    });

    App.Views.graph.collection.businessId = id;
    App.Views.graph.collection.fetch({reset: true});
    App.Collections.weekSale.fetch({reset: true});
    App.Collections.monthSale.fetch({reset: true});
    $('#business-container').show();
    $('#user-container').hide();
  },

  showMonthSaleGraph: function() {
    App.Views.lastMonthGraph   = new App.Views.LastMonthSaleGraphView({
      collection: App.Collections.monthSale
    });
  },

  showWeekSaleGraph: function() {
    App.Views.lastWeekGraph   = new App.Views.LastWeekSaleGraphView({
      collection: App.Collections.weekSale
    });
  }

});