import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    deleteSpot: function() {
      var model = this.get('model');
      model.destroyRecord();
      this.transitionToRoute('spots');
    }
  }


});
