module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      build: {
        command: 'jspm bundle lib/scripts/index build/index.js --inject'
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
          './build/index.css': './lib/style/index.scss',
          './build/login.css': './lib/style/login.scss',
        }
      }
    },

    watch: {
      files: ['./lib/**/*'],
      tasks: ['build']
    },
  });


  grunt.registerTask('build', ['shell:build', 'sass:dev']);
  grunt.registerTask('default', ['build', 'connect:serve', 'watch']);

};
