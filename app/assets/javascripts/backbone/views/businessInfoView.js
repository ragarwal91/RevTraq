App.Views.BusinessInfoView = Backbone.View.extend({
  el: '#business-info',

  initialize: function() {
    console.log('business-info view');
    this.template = HandlebarsTemplates['businesses/businessInfo'];
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },

  render: function() {
    console.log('business info view render');
    this.$el.html(this.template(this.model.toJSON()));
  }
});
