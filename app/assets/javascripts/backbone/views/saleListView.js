App.Views.SaleList = Backbone.View.extend({
  el: '#sales',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.collection.each(function(sale) {
      var saleView = new App.Views.Sale({
        model: sale
      });
      this.$el.prepend(saleView.$el);
    }, this);
  }
});