App.Collections.BusinessesCollection = Backbone.Collection.extend({
  model: App.Models.BusinessInfo,

  save: function() {
    this.each(function(sale) {
      if (!model.has('id') || model.hasChanged()) {model.save();}
    }, this)
  }
  
});