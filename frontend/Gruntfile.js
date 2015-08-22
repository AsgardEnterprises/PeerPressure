module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      build: {
        command: 'jspm bundle lib/index --inject'
      }
    },

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd:  '.',
            src:  '*.html',
            dest: 'build'
          }
        ]
      },
      backend: {
        files: [{
          expand: true,
          cwd: './build',
          src:  ['**/*'],
          dest: '../backend/static'
        }]
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
      tasks: ['build', 'push_to_backend']
    },
  });

  grunt.registerTask('build', ['shell:build', 'sass:dev', 'copy:html']);
  grunt.registerTask('push_to_backend', ['copy:backend']);
  grunt.registerTask('default', ['build', 'push_to_backend', 'watch']);

};
