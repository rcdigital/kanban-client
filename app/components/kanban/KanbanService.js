'use strict';
angular
	.module('scruman')
	.factory('Dashboard', Dashboard);

  Dashboard.$inject = ['$http', 'ENV'];

	function Dashboard($http, ENV) {
	  return {
	    getProjects: getProjects
	  };

	  function getProjects() {}
	}
