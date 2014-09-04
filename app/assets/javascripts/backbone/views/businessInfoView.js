App.Views.BusinessInfoView = Backbone.View.extend({
  el: '#business-info',

  initialize: function() {
    this.template = HandlebarsTemplates['businesses/businessInfo'];
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
