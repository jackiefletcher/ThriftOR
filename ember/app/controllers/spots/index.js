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


  search: '',

  arrangedContent: function() {
    var search = this.get('search');
    if (!search) { return this.get('content'); }

    return this.get('content').filter(function(spot) {
      return spot.get('name').indexOf(search) !== -1;
    });
  }.property('content', 'search')
});
