App.Views.GraphView = Backbone.View.extend({
  el: '#graph-info',
  
  initialize: function() {
    this.template = HandlebarsTemplates['businesses/graph'];
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },



  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.collection.toJSON()));
    var chart = c3.generate({
      data: {
        x: 'x',
        columns: [
        // Getting the sale date from the collection
          ["x"].concat(this.collection.map(function(sale) {
            return sale.get('sale_date') 
          })),
          
          // Getting the daily sale from the collection
          ["Sale"].concat(this.collection.map(function(sale) {
            return sale.get('daily_sale') 
          })),
        ]
      },

      color: { pattern: ['#1f77b4'] },

        axis: {
          x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
          }
        }
    });
  },

  events: {
    'click .last-month': 'showLastMonth',
    'click .last-week': 'showLastWeek',
    'click .all-sales': 'showAllSales',
  },

  showLastMonth: function() {
    // Changing the collection to the last month sales
    this.collection = App.Collections.monthSale;
    this.listenTo(this.collection, 'reset', this.render);
    this.collection.fetch({reset: true});
  },

  showLastWeek: function() {
    // Changing the collection to the last week sales
    this.collection = App.Collections.weekSale;
    this.listenTo(this.collection, 'reset', this.render);
    this.collection.fetch({reset: true});
  },

  showAllSales: function() {
    this.collection = App.Collections.sale;
    this.listenTo(this.collection, 'reset', this.render);
    this.collection.fetch({reset: true});
  }


});