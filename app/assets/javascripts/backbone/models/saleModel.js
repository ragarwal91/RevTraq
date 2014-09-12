App.Models.Sale = Backbone.Model.extend({
  url: function(){
    return "/businesses/"+ this.businessId +"/sales/last_day";
  }
});