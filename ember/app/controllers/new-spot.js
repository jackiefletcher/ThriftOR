ThriftOR.NewSpotController = Ember.Controller.extend({

  actions: {
    save: function() {
      var spot = this.get('model');
      spot.save();
    }
  }
});
