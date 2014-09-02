App.Collections.SalesCollection = Backbone.Collection.extend({
  model: App.Models.Sale,
  url: "/businesses/3/sales",

  initialize: function() {
    console.log('sale collection init');  
  },

  save: function() {
    this.each(function(sale) {
      if (!model.has('id') || model.hasChanged()) {model.save();}
    }, this)
  }


  // url: function() {
  //   var currentBusinessID = window.location.pathname.match("/businesses/")[0].replace("/","");
  //   return "/businesses/" + currentBusinessID + "/sales";
  // }

});