App.Views.Sale = Backbone.View.extend({
  className: 'sales',

  initialize: function() {
    this.template = HandlebarsTemplates['sales/sale'];
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()))
  }

});