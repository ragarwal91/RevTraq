App.Collections.BusinessesCollection = Backbone.Collection.extend({
  model: App.Models.Business,
  url: '/businesses'
});