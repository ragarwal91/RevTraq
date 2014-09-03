App.Views.DailySale = Backbone.View.extend({

  initialize: function() {
    this.template = HandlebarsTemplates['sales/daySale'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()))
  }
});