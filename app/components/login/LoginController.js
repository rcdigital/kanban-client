'use strict';
angular
  .module('scruman')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$http', '$auth'];

function LoginController ($http, $auth) {
  var vm = this;

  vm.authenticate = authenticate;


  function authenticate(provider) {
    $auth.authenticate(provider).then(onAuth).catch(loginError);
    console.log($auth.isAuthenticated());

    function onAuth(response) {
      console.log(response);
    }

    function loginError(errors) {
      console.log(errors);
    }
  }
}
