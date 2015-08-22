module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      build: {
        command: 'jspm bundle lib/index --inject'
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

    watch: {
      files: ['./lib/*.js'],
      tasks: ['shell:build']
    },
  });



  grunt.registerTask('default', ['shell:build', 'connect:serve', 'watch']);

};
