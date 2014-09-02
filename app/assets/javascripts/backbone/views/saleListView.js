App.Views.SaleList = Backbone.View.extend({
  el: '#sales',

  initialize: function() {
    console.log('sale list view initialized');
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    console.log('sale list view rendered');
    // debugger;
    this.collection.each(function(sale) {
      var saleView = new App.Views.Sale({
        model: sale
      });
      this.$el.prepend(saleView.$el);
    }, this);
      

      
      // this.collection.each(function(model) {
      //    model.attributes.daily_sale
      // });
    // var sale_amount = [];
    // var sale_date = [];
    // this.collection.each(function(model) {
    //   sale_date.push(model.attributes.sale_date);
    // });

    //     var chart = c3.generate({

    //     data: {
    //         x: 'x',
    // //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    //         columns: [
    //             ['x',],
    // //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                


    //             ['data1',],
    //         ]
    //     },

    //     colors: {
    //       pattern: "#3aa4c4"
    //     },

    //     axis: {
    //         x: {
    //             type: 'timeseries',
    //             tick: {
    //                 format: '%Y-%m-%d'
    //             }
    //         }
    //     }
    // });
  }
});