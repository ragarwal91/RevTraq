App.Views.LastDay = Backbone.View.extend({
  el: '#day-sale',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    console.log(this.collection);
    this.$el.empty();
    this.collection.each(function(sale) {
      var daySaleView = new App.Views.DailySale({
        model: sale
      });
      this.$el.prepend(daySaleView.$el);
    }, this);
  },

  events: {
    'click .edit-sale': 'edit',
    'click button.edit-a-sale': 'editSale'
  },

  edit: function() {
    console.log('edit sale');
    this.$el.empty();
    this.editTemplate = HandlebarsTemplates['sales/editSalesForm'];
    this.$el.append(this.editTemplate);
  },

  editSale: function() {
    var editSaleData = {
      daily_sale: $('input[name="edit-sale"]').val(),
      notes:      $('textarea[name="edit-notes"]').val()
    }
    console.log(this.collection);
    console.log(editSaleData);
    this.collection.save(editSaleData);
    // App.Routers.sales.navigate('');
  }
  
});