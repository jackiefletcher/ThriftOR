import Ember from 'ember';

export default Ember.Route.extend({
// ThriftOR.NewSpotRoute = Ember.Route.extend({
  model: function(params) {
    var spot = this.store.createRecord('spot');
  }
});
