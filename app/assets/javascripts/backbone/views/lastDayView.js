App.Views.LastDay = Backbone.View.extend({
  el: '#day-sale',

  initialize: function() {
    console.log('daily sale initialized');
    this.template = HandlebarsTemplates['sales/daySale'];
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
    console.log(this.collection);
  }
});