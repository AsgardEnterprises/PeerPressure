module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      build: {
        command: 'jspm bundle lib/scripts/index.js build/index.js --inject && jspm bundle lib/scripts/login.jsx! build/login.js --inject'
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
          dest: '../backend/application/static'
        }]
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
      tasks: ['build', 'push_to_backend']
    },
  });

  grunt.registerTask('build', ['shell:build', 'sass:dev', 'copy:html']);
  grunt.registerTask('push_to_backend', ['copy:backend']);
  grunt.registerTask('default', ['build', 'push_to_backend', 'watch']);

};
