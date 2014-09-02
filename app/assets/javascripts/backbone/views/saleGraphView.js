App.Views.GraphView = Backbone.View.extend({
  initialize: function() {
    console.log('new graph view');
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
  },

  render: function(){
    console.log('graph render');


    
      // this.collection.each(function(model) {
      //   saleDate = model.attributes.sale_date;
      //   dailySale = model.attributes.daily_sale;
      //   console.log(dailySale);
      //   console.log(saleDate);
      // });
    

    // this.collection.each(function(model) {
    //   dailySale = model.attributes.daily_sale;
    // });
    // console.log(dailySale);
    // this.collection.each(function(model) {
    //   saleDate = model.attributes.sale_date;
    // });
    // console.log(saleDate);
    

    var chart = c3.generate({

        data: {
            x: 'x',
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
            columns: [
                ["x"].concat(App.Views.graph.collection.map(function(sale) {return sale.get('sale_date') })),
    //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                


                ["data1"].concat(App.Views.graph.collection.map(function(sale) {return sale.get('daily_sale') })),
            ]
        },

        colors: {
          pattern: "#3aa4c4"
        },

        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
    });
  }
});