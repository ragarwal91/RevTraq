App.Collections.EmployeesCollection = Backbone.Collection.extend({
  model: App.Models.Employee,

  url: function(){
    return "/businesses/" + this.businessId + "/employees";
  },

  save: function() {
    this.each(function(sale) {
      if (!model.has('id') || model.hasChanged()) {model.save();}
    }, this)
  }
  
});