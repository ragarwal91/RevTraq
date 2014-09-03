App.Views.GraphView = Backbone.View.extend({
  el: '#graph-info',
  
  initialize: function() {
    console.log('new graph view');
    this.template = HandlebarsTemplates['businesses/graph'];
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },



  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.collection.toJSON()));
    console.log('graph render');
    var chart = c3.generate({
      data: {
        x: 'x',
        columns: [
          ["x"].concat(this.collection.map(function(sale) {
            return sale.get('sale_date') 
          })),
          
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
    console.log(chart);
  },

  events: {
    'click .last-month': 'showLastMonth',
    'click .last-week': 'showLastWeek'
  },

  showLastMonth: function() {
    this.collection = App.Collections.monthSale;
    this.listenTo(this.collection, 'reset', this.render);
    this.collection.fetch({reset: true});
  },

  showLastWeek: function() {
    this.collection = App.Collections.weekSale;
    this.listenTo(this.collection, 'reset', this.render);
    this.collection.fetch({reset: true});
  },


});