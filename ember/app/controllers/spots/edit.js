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

cards: [
  {card: true},
  {card: false}
],

actions: {
  updateSpot: function() {
    var spot = this.get('model');
    this.get('model').save();
    this.transitionToRoute('spots');
    }
  }
});
