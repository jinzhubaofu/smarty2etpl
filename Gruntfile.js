module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-wrap');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.task.loadTasks('tasks');

  console.log('target:%s', grunt.option('target'));

  grunt.initConfig({
    conf: grunt.file.readJSON('./src/config.json'),
    replace: {
      parser: {
        src: ['src/smarty.l'],
        dest: 'src/smarty.config.l',
        replacements: [{
          from: /L "{"/,      // regex replacement ('Fooo' to 'Mooo')
          to: 'L "<%= conf.ldelim %>"'
        }, {
          from: /R "}"/,
          to: 'R "<%= conf.rdelim %>"'
        }, {
          from: "LH [=}\\s\\/.]",
          to: function () {
            return ''
              + 'LH [=' 
              + grunt.config('conf').rdelim.slice(0, 1) 
              + '\\s\\/.]';
          }
        }]
      }
    },
    wrap: {
      parser: {
        src: 'lib/parser.js',
        dest: 'lib/parser.js',
        options: {
          wrapper: [
            '/* jshint ignore:start */\n', 
            '\nmodule.exports=parser;\n/* jshint ignore:end */'
          ]
        }
      }
    },
    watch: {
      parser: {
        files: ['src/smarty.l', 'src/smarty.y'],
        tasks: ['build']
      }
    },
    jison: {
      smarty: {
        files: [{
          lex: 'src/smarty.l',
          yacc: 'src/smarty.y',
          dest: 'lib/parser.js'
        }],
        options: {
          mode: 'js'
        }
      },
      config: {
        files: [{
          lex: 'src/smarty.config.l',
          yacc: 'src/smarty.y',
          dest: 'lib/parser.js'
        }],
        options: {
          mode: 'js'
        }
      }
    },
    clean: {
      config: [
        'src/smarty.config.l'
      ]
    }
  });

  this.registerTask('build', 'build project', [
    'jison:smarty', 'wrap:parser'
  ]);

  this.registerTask('config', [
    'replace:parser', 'jison:config', 'wrap:parser', 'clean:config'
  ]);

};