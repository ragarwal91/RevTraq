App.Views.SaleList = Backbone.View.extend({
  el: '#sales',

  initialize: function() {
    console.log('sale list view initialized');
    this.render();
  },

  render: function() {
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