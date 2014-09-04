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

    // New Collection for single day sales
    App.Collections.daySale   = new App.Collections.LastDaySaleCollection();

    // New Collection for last week sales
    App.Collections.weekSale  = new App.Collections.LastWeekSaleCollection();

    // New Collection for last month sales
    App.Collections.monthSale = new App.Collections.LastMonthSaleCollection();

    // New Collection for last year sales
    App.Collections.yearSale  = new App.Collections.LastYearSaleCollection();

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

    // Getting View for last day sale
    App.Views.lastDay  = new App.Views.LastDay({
      collection: App.Collections.daySale
    });

    // Getting View for last year sale
    App.Views.lastYear  = new App.Views.LastYear({
      collection: App.Collections.yearSale
    });

    // Adding ID to last day collection
    App.Views.lastDay.collection.businessId = id;
    // Adding ID to last week collection
    App.Collections.weekSale.businessId = id;
    // Adding ID to last month collection
    App.Collections.monthSale.businessId = id;

    // Adding ID to last year collection
    App.Collections.yearSale.businessId = id;
    App.Views.lastYear.collection.fetch();

    // Fetching last day sale from /businesses/:id/sales/last_day
    App.Views.lastDay.collection.fetch();


    App.Views.graph    = new App.Views.GraphView({
      collection: App.Collections.sale
    });

    // Adding ID to graph collection
    App.Views.graph.collection.businessId = id;

    // Fetching all sales points for business
    App.Views.graph.collection.fetch({reset: true});

    // Fetching last week sales points for business
    App.Collections.weekSale.fetch({reset: true});

    // Fetching last month sales points for business
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