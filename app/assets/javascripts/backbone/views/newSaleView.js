App.Views.NewSaleForm = Backbone.View.extend({
  el: '#new-sale-form',

  initialize: function() {
    console.log('new sale form');
    this.template = HandlebarsTemplates['sales/newSaleForm'];
    this.listenTo(this.collection, 'add', this.render);
    // this.listenTo(this.collection, 'change', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
  },

  events: {
    'click button.new-sale': 'newSale'
  },

  newSale: function() {
    console.log('new form');
    var formData = {
      sale_date    : $('input[name="new-sale-date"]').val(),
      daily_sale   : $('input[name="new-daily-sale"]').val(),
      temperature  : $('input[name="new-temperature"]').val(),
      weather_type : $('input[name="new-weather-type"]').val(),
      notes        : $('textarea[name="new-notes"]').val()
    }
    App.Collections.sale.create(formData);
    // App.Routers.appRouter.navigate('/#businesses/3', {trigger:true});
  }
});