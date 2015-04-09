export default Ember.View.extend({
  tagName: 'input',
  name: 'file',
  attributeBindings: ['name', 'type', 'data-form-data'],
  type: 'file',

  didInsertElement: function() {
    var _this = this,
    controller = this.get('controller');

    $.get(ENV.API_NAMESPACE + '/cloudinary_params', {timestamp: Date.now() / 1000}).done(function(response) {
      Ember.run(function() {
        _this.set('data-form-data', JSON.stringify(response));
      });

      _this.$().cloudinary_fileupload({
        disableImageResize: false,
        imageMaxWidth: 1000,
        imageMaxHeight: 1000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
        maxFileSize: 5000000 // 5MB
      });

      _this.$().bind('fileuploaddone', function (e, data) {
        controller.set('newSpot.cloudinaryPublicId', data.result.public_id);
      });
    });
  }
});
