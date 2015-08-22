module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      build: {
        command: 'jspm bundle lib/scripts/index --inject'
      }
    },

    connect: {
      serve: {
        options: {
          port: 4000,
          base: ['.']
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          'build.css': 'lib/style/index.scss'
        }
      }
    },

    watch: {
      files: ['./lib/*.js'],
      tasks: ['shell:build']
    },
  });


  grunt.registerTask('build', ['shell:build', 'sass:dev']);
  grunt.registerTask('default', ['build', 'connect:serve', 'watch']);

};
