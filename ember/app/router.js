import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


export default Router.map(function() {
});

Router.map(function() {
  this.resource('home', {path: '/'});
  this.route('about');
  this.resource('spots', function() {
    this.route('new', {path: 'new'});
    this.route('edit', {path: 'edit/:spot_id'});
    this.route('show', {path: ':spot_id'});
  });
});
