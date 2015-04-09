import Ember from 'ember';


export default Ember.Controller.extend({
  kinds: [
{kind: 'Thrift'},
{kind: 'Garage Sale'},
{kind: 'Estate Sale'}
],

priceranges: [
{range: '$'},
{range: '$$'},
{range: '$$$'},
{range: '$$$$'}
],
actions: {
  updateSpot: function() {
    var name = this.get('name');
    var location = this.get('location');
    var kind = this.get('kind');
    var price_range = this.get('price_range');
    var style = this.get('style');
    var hours = this.get('hours');
    var dates = this.get('dates');
    var phone = this.get('phone');
    var card = this.get('card');

    this.store.updateRecord('spot', {
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

    this.store.save();

    this.transitionToRoute('spots');
  }
}
});
