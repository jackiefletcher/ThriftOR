import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        fileLoaded: function(file) {
            // readAs="readAsFile"
            console.log(file.name, file.type, file.size);
            // readAs="readAsArrayBuffer|readAsBinaryString|readAsDataURL|readAsText"
            console.log(file.filename, file.type, file.data, file.size);
        }
    }
});
