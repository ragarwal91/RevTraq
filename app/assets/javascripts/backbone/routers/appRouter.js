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
    App.Models.user      = new App.Models.User();
    App.Models.business  = new App.Models.BusinessInfo();
    App.Collections.sale = new App.Collections.SalesCollection();
    App.Models.sale      = new App.Models.Sale();
    App.Views.saleForm   = new App.Views.NewSaleForm({
      collection: App.Collections.sale
    });

    // App.salesInfoView = new App.Views.SaleList({
    //   collection: App.Collections.sale
    // });

    App.Views.graph   = new App.Views.GraphView({
      collection: App.Collections.sale
    });

  },

  events: {
    'click .edit-button': 'showUser',
    'click .business-info-button': 'showBusinessInfo',
    // 'click .sales-button': 'showSales'
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
    App.businessInfoView.model.fetch({url: '/businesses/'+ id});
    
    // console.log('sales info');
    // App.salesInfoView = new App.Views.SaleList({
    //   collection: App.Collections.sale
    // });
    // console.log(App.salesInfoView.collection);
    // debugger;
    // App.salesInfoView.collection.fetch({url: '/businesses/'+ id + '/sales'});
    App.Views.graph.collection.fetch({url: '/businesses/' + id + '/sales'});
    // console.log(App.salesInfoView.collection.fetch({url: '/businesses/'+ id + '/sales'}));
    // App.salesInfoView.collectionOh.fetch({url: '/businesses/'+ id + '/sales'})
  

  },

  newSale: function(id) {
    console.log('render new sale');
  } 

// App.salesInfoView.model.fetch({url: '/businesses/'+ id + '/sales'}, success: function(){console.log(App.salesInfoView.model)})

  // showSales: function(id) {
  //   console.log('sales info');
  //   App.salesInfoView = new App.Views.SaleList({
  //     collection: App.Collections.sale
  //   });
  //   console.log(App.salesInfoView.collection);
  //   // debugger;
  //   App.salesInfoView.collection.fetch({url: '/businesses/'+ id + '/sales'});
  //   console.log(App.salesInfoView.collection.fetch({url: '/businesses/'+ id + '/sales'}));
  //   // App.salesInfoView.collectionOh.fetch({url: '/businesses/'+ id + '/sales'})
  // }

});