App.Collections.LastWeekSaleCollection = Backbone.Collection.extend({
  model: App.Models.Sale,

  url: function(){
    return "/businesses/19/sales/last_week";
  },

  initialize: function() {
    console.log('sale week collection init');  
  }

});