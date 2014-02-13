var Command = require('../Command.js');
var util = require('util');
var extendsTargetCounter = 0;
var extendsTargetPrefix = 'extends_target_';

function ExtendsCommand() {
  Command.apply(this, arguments);
}

util.inherits(ExtendsCommand, Command);

function getNextExtendsTarget() {
    return extendsTargetPrefix + (++extendsTargetCounter);
}

ExtendsCommand.prototype.toSource = function (env) {

  var params = this.getParameters(this.options.params || []);
  var file = params.file;

  if (!file) {
    throw 'Command[extends] needs parameter "file".';
  }

  file.trim = true;

  env
    .addSource('<!--target:' + getNextExtendsTarget() + '(master=')
    .accept(file)
    .addSource(')-->');
};

ExtendsCommand.prototype.toCloseSource = function (env) {
    env.addSource('<!--/if-->');
};

module.exports = ExtendsCommand;