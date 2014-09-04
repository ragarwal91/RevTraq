App.Views.LastYear = Backbone.View.extend({
  el: '#year-sale',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.collection.each(function(sale) {
      var yearSaleView = new App.Views.YearSale({
        model: sale
      });
      this.$el.prepend(yearSaleView.$el);
    }, this);
  }
});