export default {
  name: 'cloudinary',

  initialize: function() {
    $.cloudinary.config({
      cloud_name: 'MYCLOUD',
      api_key:    'MYKEY'
    });
  }
};
