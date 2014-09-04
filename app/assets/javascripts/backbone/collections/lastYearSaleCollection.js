App.Collections.LastYearSaleCollection = Backbone.Collection.extend({
  model: App.Models.Sale,

  url: function(){
    return "/businesses/"+ this.businessId +"/sales/last_year";
  }
});