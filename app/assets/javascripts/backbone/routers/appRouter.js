App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'users/:id': 'showUser',
    'users/:id/edit': 'editUser',
    'businesses/:id': 'showBusinessInfo',
    'businesses/:id/sales/new': 'newSale'
    // 'businesses/:id/sales': 'showSales'
  },

  initialize: function() {
    console.log('app initialize');
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
    // 'click .new_sale': 'showLastSale'
    // 'click .sales-button': 'showSales'
  },

  showUser: function(id) {
    App.usersView = new App.Views.UsersView({
      model: App.Models.user
    });
    App.usersView.model.fetch({url: '/users/'+ id})
  },

  editUser: function(id) {
    console.log('edit route');
  },

  showBusinessInfo: function(id) {
    console.log('business info');
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
    console.log(App.Views.lastDay.collection.fetch({url: '/businesses/'+ id + '/sales/last_day'}));
    App.Views.lastDay.collection.fetch({url: '/businesses/'+ id + '/sales/last_day'});

    App.Views.graph    = new App.Views.GraphView({
      collection: App.Collections.sale
    });

    App.Views.graph.collection.businessId = id;
    App.Views.graph.collection.fetch({reset: true});
    App.Collections.weekSale.fetch({reset: true});
    App.Collections.monthSale.fetch({reset: true});

  },

  showMonthSaleGraph: function() {
    console.log('last month');
    App.Views.lastMonthGraph   = new App.Views.LastMonthSaleGraphView({
      collection: App.Collections.monthSale
    });
  },

  showWeekSaleGraph: function() {
    console.log('last week');
    App.Views.lastWeekGraph   = new App.Views.LastWeekSaleGraphView({
      collection: App.Collections.weekSale
    });
  }

});