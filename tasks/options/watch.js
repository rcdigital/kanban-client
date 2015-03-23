'use strict';
module.exports = {
  options: {
    livereload: true
  },
  scripts: {
    files: ['assets/scripts/**/*.js', 'app/**/*.js'],
    tasks: ['jshint', 'concat', 'uglify', 'injector'],
    options: {
      spawn: false
    }
  },
  css: {
    files: ['assets/styles/**/*.css'],
    tasks: ['autoprefixer', 'cssmin'],
    options: {
      spawn: false
    }
  },
  images: {
    files: ['assets/images/**/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false
    }
  },
  html: {
    files: ['<%= paths.root %>/**/*.html'],
    tasks: ['injector'],
    options: {
      spawn: false
    }
  }

};
