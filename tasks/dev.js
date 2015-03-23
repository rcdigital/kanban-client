'use strict';
module.exports = function (grunt) {
  grunt.registerTask('dev', [ 'ngconstant:dev', 'connect', 'watch', 'injector']);
};
