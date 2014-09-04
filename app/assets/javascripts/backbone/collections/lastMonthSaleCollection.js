App.Collections.LastMonthSaleCollection = Backbone.Collection.extend({
  model: App.Models.Sale,

  url: function(){
    return "/businesses/"+ this.businessId +"/sales/last_month";
  },

  initialize: function() {
    console.log('sale month collection init');  
  }
  
});