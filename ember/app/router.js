import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


export default Router.map(function() {
});

Router.map(function() {
  this.route('about');
  this.resource('spots', function() {
    this.route('show', {path: ':spot_id'});
  });
});
