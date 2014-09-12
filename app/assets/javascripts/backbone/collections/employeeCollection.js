App.Collections.EmployeesCollection = Backbone.Collection.extend({
  model: App.Models.Employee,

  url: function(){
    return "/businesses/" + this.businessId + "/employees";
  }
  
});