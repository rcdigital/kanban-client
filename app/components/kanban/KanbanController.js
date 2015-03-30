'use strict';
angular
  .module('scruman')
  .controller('KanbanController', KanbanController);

KanbanController.$inject = ['$http', '$auth', 'User'];

function KanbanController($http, $auth, User) {
  var vm = this;
  vm.projectLoaded = false;
  var company = User.getCompany();
  console.log(company);
}
