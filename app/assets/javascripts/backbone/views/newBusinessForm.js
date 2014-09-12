App.Views.NewBusinessForm = Backbone.View.extend({
  el: '#new-business-form',

  initialize: function() {
    this.template = HandlebarsTemplates['businesses/newBusinessForm'];
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
  },

  events: {
    'click button.new-business': 'newBusiness'
  },

  newBusiness: function() {
    console.log('new business')
    var formData = {
      name      : $('input[name="new-business-name"]').val(),
      address   : $('input[name="new-business-address"]').val(),
      city      : $('input[name="new-business-city"]').val(),
      zip_code  : $('input[name="new-business-zip"]').val(),
      logo      : $('input[name="new-business-logo"]').val()
    }
    console.log(App.Collections.business);
    App.Collections.business.create(formData);
  }
});