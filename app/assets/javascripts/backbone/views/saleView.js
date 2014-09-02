// App.Views.SalesView = Backbone.View.extend({
//   className: 'sales',
//   el: '#sales',

//   initialize: function() {
//     console.log('sale view init')
//     this.template = HandlebarsTemplates['sales/sale'];
//     this.render();
//   },

//   render: function() {
//     console.log('sale view render');
//     // debugger;
//     this.$el.html(this.template(this.collection.toJSON()));
//   }

// });




App.Views.Sale = Backbone.View.extend({
  className: 'sales',

  initialize: function() {
    console.log('sale view init');
    this.template = HandlebarsTemplates['sales/sale'];
    this.render();
  },

  render: function() {
    console.log('sale view render');
    this.$el.html(this.template(this.model.toJSON()))
  }
});