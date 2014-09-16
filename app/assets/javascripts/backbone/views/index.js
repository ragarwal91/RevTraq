App.Views.Index = Backbone.View.extend({
  el: '#index',

  show: function() {
    this.$el.fadeIn(500);

  },

  hide: function() {
    this.$el.fadeOut(200);
  }

});
