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

    actions: {
        fileLoaded: function(file) {
            // readAs="readAsFile"
            console.log(file.name, file.type, file.size);
            // readAs="readAsArrayBuffer|readAsBinaryString|readAsDataURL|readAsText"
            console.log(file.filename, file.type, file.data, file.size);
        }
    }
});
