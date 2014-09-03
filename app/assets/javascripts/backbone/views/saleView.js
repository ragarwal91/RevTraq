
App.Views.Sale = Backbone.View.extend({
  className: 'sales',

  initialize: function() {
    this.template = HandlebarsTemplates['sales/sale'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()))
  }
});