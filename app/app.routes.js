'use strict';
angular.module('scruman')
.config(['$routeProvider', function ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/login/loginView.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
    .otherwise('/');
}]);
