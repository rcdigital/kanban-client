'use strict';
angular.module('scruman', ['ngRoute', 'satellizer', 'config', 'scruman.widgets'])
.config(function ($httpProvider, $locationProvider, $authProvider, ENV) {

  $authProvider.httpInterceptor = true;
  $authProvider.google({
    clientId: '915741183040-7giis1h3aoq6blcv5s3mrvannltsc6gf.apps.googleusercontent.com',
    url: ENV.apiEndpoint + '/users/google/'
  });

  $locationProvider.html5Mode(false);
});
