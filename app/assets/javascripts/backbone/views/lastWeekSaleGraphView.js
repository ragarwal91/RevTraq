App.Views.LastWeekSaleGraphView = Backbone.View.extend({
  el: '#graph-info',

  events: {
    'click .last-week': 'render'
  },
  
  initialize: function() {
    console.log('new week graph view');
    this.template = HandlebarsTemplates['businesses/graph'];
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
  },

  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.collection.toJSON()));
    console.log('graph render');
    var chart = c3.generate({
      data: {
        x: 'x',
        columns: [
          ["x"].concat(App.Views.lastWeekGraph.collection.map(function(sale) {
            return sale.get('sale_date') 
          })),
          
          ["Sale"].concat(App.Views.lastWeekGraph.collection.map(function(sale) {
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
    
  }
});