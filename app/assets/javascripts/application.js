// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require d3.min
//= require d3.layout.min
//= require rickshaw.min
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require handlebars
//= require_self 
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .

console.log('hello bro');
App = {
  Models:      {},
  Views:       {},
  Collections: {},
  Routers:     {}
};

$(document).ready(function() {
  console.log('document load')
  App.Routers.appRouter = new App.Routers.AppRouter();
  Backbone.history.start();

});