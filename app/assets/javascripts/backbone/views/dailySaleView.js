App.Views.DailySale = Backbone.View.extend({

  initialize: function() {
    this.template = HandlebarsTemplates['sales/daySale'];
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'add', this.render);
    console.log(this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()))
  }
});