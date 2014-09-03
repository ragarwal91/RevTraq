App.Views.LastSaleInfo = Backbone.View.extend({
  el : '#last-sale-info',
  
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
  }
});