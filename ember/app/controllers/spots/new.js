import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSpot: function() {
      this.get('model').save();
      this.transitionToRoute('spots');
    }
  }
});
