App.Collections.LastMonthSaleCollection = Backbone.Collection.extend({
  model: App.Models.Sale,

  url: function(){
    return "/businesses/19/sales/last_month";
  },

  initialize: function() {
    console.log('sale month collection init');  
  }
  
});