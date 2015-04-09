/* jshint node: true */


module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "'none'",
      'connect-src': "'self'",
      'font-src': "'self' data: fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'frame-src': "'self' intagme.com"
    },
    modulePrefix: 'thriftor',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.CLOUDINARY_NAME = 'db9pjrwi0';
    ENV.CLOUDINARY_KEY = '172791912128255';

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.CLOUDINARY_NAME = 'db9pjrwi0';
    ENV.CLOUDINARY_KEY = '172791912128255';


    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
