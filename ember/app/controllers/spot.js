import Ember from 'ember';

export default Ember.Controller.extend({
  kindIsEstate: function() {
    return this.get('model.kind') === 'Estate Sale';
  }.property('kind'),
  kindIsGarage: function() {
    return this.get('model.kind') === 'Yard Sale';
  }.property('kind'),
  kindIsThrift: function() {
    return this.get('model.kind') === 'Thrift';
  }.property('kind'),


});
