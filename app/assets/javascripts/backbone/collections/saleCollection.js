App.Collections.SalesCollection = Backbone.Collection.extend({
  model: App.Models.Sale,
  url: "/businesses/:id/sales",

  initialize: function() {
    console.log('sale collection init');  
  }


  // url: function() {
  //   var currentBusinessID = window.location.pathname.match("/businesses/")[0].replace("/","");
  //   return "/businesses/" + currentBusinessID + "/sales";
  // }

});