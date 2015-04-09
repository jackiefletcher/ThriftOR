export default Ember.View.extend({
  tagName: 'input',
  name: 'file',
  classNames: ['cloudinary-fileupload'],
  attributeBindings: ['name', 'type', 'data-form-data'],
  type: 'file',

  didInsertElement: function() {
    var _this = this,
    controller = this.get('controller');

   this.$().unsigned_cloudinary_upload(
        ENV.CLOUDINARY_UPLOAD_PRESET, {
        cloud_name: ENV.CLOUDINARY_NAME
      }, {
        disableImageResize: false,
        imageMaxWidth: 1000,
        imageMaxHeight: 1000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
        maxFileSize: 5000000 // 5MB
      }
    );

    this.$().bind('fileuploaddone', function (e, data) {
      controller.set('newSpot.cloudinaryPublicId', data.result.public_id);
    });
  }
});
