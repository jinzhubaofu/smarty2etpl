'use strict';

var childProcess = require('child_process');

module.exports = function (grunt) {

  grunt.registerMultiTask('jison', 'compile lex&yacc to parser.', function() {

    var done = this.async();
    var counter = this.files.length;
    var options = this.data.options || {};
    var params = [];

    for (var key in options) {
      params.push('-m', options[key]);
    }

    this.files.forEach(function (setting) {

      var cmd = './node_modules/.bin/jison';

      if(process.platform === 'win32'){
          cmd = 'node_modules\\.bin\\jison.cmd';
      }

      var child = childProcess.spawn(
        cmd, 
        params.concat(['-o', setting.dest, setting.yacc, setting.lex]),
        {
          stdio: 'inherit'
        }
      );

      child.on('exit', function(code) {

        if (code != 0) {
          grunt.fatal('Jison failure: ' + code);
          done();
          return;
        }

        grunt.log.writeln('parser "' + setting.dest + '" created.');

        if (--counter === 0) {
          done();
        }

      });

    });

  });

};