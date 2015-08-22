module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      build: {
        command: 'jspm bundle frontend/lib/scripts/index.js frontend/build/index.js --inject && jspm bundle frontend/lib/scripts/login.jsx! frontend/build/login.js --inject'
      }
    },

    connect: {
      serve: {
        options: {
          port: 4000,
          base: ['.', './build']
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          './frontend/build/index.css': './frontend/lib/style/index.scss',
          './frontend/build/login.css': './frontend/lib/style/login.scss',
        }
      }
    },

    watch: {
      files: ['./frontend/lib/**/*'],
      tasks: ['build']
    },
  });


  grunt.registerTask('build', ['shell:build', 'sass:dev']);
  grunt.registerTask('default', ['build', 'connect:serve', 'watch']);

};
