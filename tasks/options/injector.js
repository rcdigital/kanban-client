'use strict';
module.exports = {
  options: {
    addRootSlash: false
  },
  local_dependencies: {
    files: {
      'index.html': ['<%= paths.root %>/bower.json','<%= paths.app %>/config.js','<%= paths.app %>/app.module.js' , '<%= paths.app %>/app.routes.js','<%= paths.app %>/components/**/*.js']
    }
  }
};
