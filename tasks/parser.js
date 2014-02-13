var childProcess = require('child_process');

module.exports = function(grunt) {
  grunt.registerTask('parser', 'Generate jison parser.', function() {

    var done = this.async();

    var cmd = './node_modules/.bin/jison';

    if(process.platform === 'win32'){
        cmd = 'node_modules\\.bin\\jison.cmd';
    }

    var child = childProcess.spawn(
      cmd, 
      ['-m', 'js', 'src/smarty.y', 'src/smarty.l'], 
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

      var src = grunt.file.read('smarty.js');

      grunt.file.delete('smarty.js');

      grunt.file.write('lib/parser.js', src);
      grunt.log.writeln('parser "lib/parser.js" created.');
      done();
    });
  });
};