import Ember from 'ember';

export default Ember.ArrayController.extend({
  search: '',

  arrangedContent: function() {
    var search = this.get('search');
    if (!search) { return this.get('content'); }

    return this.get('content').filter(function(spot) {
      return spot.get('name').indexOf(search) !== -1;
    });
  }.property('content', 'search')

});
