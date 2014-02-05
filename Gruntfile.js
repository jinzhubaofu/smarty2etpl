module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wrap');
  grunt.loadNpmTasks('grunt-saucelabs');
  grunt.loadNpmTasks('es6-module-packager');

  grunt.task.loadTasks('tasks');

  grunt.initConfig({
    wrap: {
      parser: {
        src: 'lib/parser.js',
        dest: 'lib/parser.js',
        options: {
          wrapper: [
            '/* jshint ignore:start */\n', 
            '\nmodule.exports=smarty;\n/* jshint ignore:end */'
          ]
        }
      }
    }
  });

  this.registerTask('node', [
    'parser', 'wrap:parser'
  ]);

  this.registerTask('build', 'build project', [
    'parser', 'wrap:parser'
  ]);

};