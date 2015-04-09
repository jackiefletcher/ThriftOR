export default {
  name: 'cloudinary',

  initialize: function(/* container, app */) {
    $.cloudinary.config({
      cloud_name: ENV.CLOUDINARY_NAME,
      api_key:    ENV.CLOUDINARY_KEY,
    });
  }
};
