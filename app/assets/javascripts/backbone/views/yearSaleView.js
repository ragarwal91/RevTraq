App.Views.YearSale = Backbone.View.extend({

  initialize: function() {
    this.template = HandlebarsTemplates['sales/yearSale'];
    // this.listenTo(this.collection, 'change', this.render);
    // this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()))
  }
});