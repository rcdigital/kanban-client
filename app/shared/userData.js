'use strict';
angular
	.module('scruman.widgets')
	.factory('User', User);

User.$inject = ['$http', '$auth', 'ENV'];
function User($http, $auth, ENV) {
  return {
    setData: setData,
    getData: getData,
    getCompany: getCompany
  };

  function setData() {

    var user = localStorage.getItem('userDetails');

    if (user === null) {
      var token = $auth.getToken();
      $http.get(ENV.apiEndpoint + '/users/' + token + '/').then(userLoaded);

      function userLoaded(res) {
          localStorage.setItem('userDetails', JSON.stringify(res.data));
      }
    }

    return JSON.parse(localStorage.getItem('userDetails'));
  }

  function getData () {
    var user = localStorage.getItem('userDetails');
    if (user !== null) {
      return JSON.parse(localStorage.getItem('userDetails'));
    }
    return this.setData();
  }

  function getCompany () {
    var userdata = this.getData();
    return userdata.companies[0];
  }
}
