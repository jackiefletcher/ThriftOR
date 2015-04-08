import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSpot: function() {
      var name = this.get('name');
      var location = this.get('location');
      var kind = this.get('kind');
      var price_range = this.get('price_range');
      var style = this.get('style');
      var hours = this.get('hours');
      var dates = this.get('dates');
      var phone = this.get('phone');
      var card = this.get('card');

      var newSpot = this.store.createRecord('spot', {
        name: name,
        location: location,
        kind: kind,
        price_range: price_range,
        style: style,
        hours: hours,
        dates: dates,
        phone: phone,
        card: card
      });

      this.set('name', "");
      this.set('location', "");
      this.set('kind', "");
      this.set('price_range', "");
      this.set('style', "");
      this.set('hours', "");
      this.set('dates', "");
      this.set('phone', "");
      this.set('card', "");

      newSpot.save();

      this.transitionToRoute('spots');
    }
  }
});


// export default Ember.ArrayController.extend ({
//   actions: {
//     createPet: function() {
//       var name = this.get("name");
//       var breed = this.get("breed");
//       var age = this.get("age");
//       var description = this.get("description");
//       var chipNumber = this.get("chip_number");
//
//       var pet = this.store.createRecord('pet', {
//         name: name,
//         breed: breed,
//         age: age,
//         description: description,
//         chip_number: chipNumber
//       });
//
//       this.set('name', "");
//       this.set('age', "");
//       this.set('description', "");
//       this.set('breed', "");
//       this.set('chip_number', "");
//       pet.save();
//       this.transitionToRoute('pets');
//
//     }
//   }
// });
