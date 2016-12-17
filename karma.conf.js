module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    logLevel: config.LOG_INFO,

    files: [
      'dist/bower_components/angular/angular.js',
      'dist/bower_components/angular-mocks/angular-mocks.js',
      'dist/bower_components/angular-sanitize/angular-sanitize.js',
      'dist/bower_components/angular-ui-router/release/angular-ui-router.js',
      
      'src/js/*.js',
      'dist/js/templates.js',
      'src/js/constants/*.js',
      'src/js/components/**/*.js',
      'tests/js/**/*.spec.js'
    ],

    browsers: ['Chrome'],

    reporters: ['progress', 'html', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/js/**/*.js': ['coverage']
    },

    coverageReporter: {
        type: 'html',
        dir: 'tests/test-reports/coverage/'
    },

    browserNoActivityTimeout: 100000,
    captureTimeout: 100000,
    browserDisconnectTimeout: 100000
  });
};