App.Collections.LastWeekSaleCollection = Backbone.Collection.extend({
  model: App.Models.Sale,

  url: function(){
    return "/businesses/"+this.businessId+"/sales/last_week";
  }
  
});