import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  kind: DS.attr('string'),
  price_range: DS.attr('string'),
  style: DS.attr('string'),
  hours: DS.attr('string'),
  dates: DS.attr('string'),
  phone: DS.attr('string'),
  card: DS.attr('boolean'),
  image_url: DS.attr('string'),
  nearbys: DS.attr()
});
