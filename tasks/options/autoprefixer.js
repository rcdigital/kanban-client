'use strict';
module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'assets/styles/build/*.css',
    dest: 'assets/styles/build/prefixed/'
  }
};
