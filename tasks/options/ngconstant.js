module.exports =  {
  options: {
    space: ' ',
    wrap: '"use strict"; \n\n {%= __ngModule%}',
    name: 'config'
  },
  dev: {
    options: {
      dest: '<%= paths.app %>/config.js'
    },
    constants: {
      ENV: {
        name: 'dev',
        apiEndpoint: 'http://localhost:8000/api'
      }
    }
  }
};
