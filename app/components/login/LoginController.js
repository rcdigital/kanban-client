'use strict';
angular
  .module('scruman')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$http', '$auth', '$location'];

function LoginController($http, $auth, $location) {
  var vm = this;

  vm.authenticate = authenticate;

  isAuthenticated();

  function authenticate(provider) {
    $auth.authenticate(provider).then(authSuccess).catch(loginError);
    function authSuccess(response) {
      console.log(response);
      isAuthenticated();
    }

    function loginError(errors) {
      console.log(errors);
    }
  }

  function isAuthenticated() {
    if ($auth.isAuthenticated()) {
      $location.path('/dashboard');
    }
    return false;
  }
}
