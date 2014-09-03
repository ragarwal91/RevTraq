App.Collections.LastDaySaleCollection = Backbone.Collection.extend({
  model: App.Models.Sale,

  url: function(){
    return "/businesses/19/sales/last_day";
  },

  initialize: function() {
    console.log('sale day collection init');  
  }

});