App.Views.LastDay = Backbone.View.extend({
  el: '#day-sale',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.collection.each(function(sale) {
      var daySaleView = new App.Views.DailySale({
        model: sale
      });
      this.$el.prepend(daySaleView.$el);
    }, this);
  }
});