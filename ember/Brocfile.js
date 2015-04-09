/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
app.import('bower_components/bootswatch-dist/css/bootstrap.css');
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('vendor/jquery-ui/jquery-ui.js');
app.import('vendor/jquery.iframe-transport/jquery.iframe-transport.js');
app.import('vendor/blueimp-file-upload/js/jquery.fileupload.js');
app.import('vendor/cloudinary_js/js/jquery.cloudinary.js');
module.exports = app.toTree();
