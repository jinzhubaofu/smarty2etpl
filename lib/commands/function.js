var Command = require('../Command.js');
var util = require('util');
var _ = require('underscore');

function FunctionCommand() {
  Command.apply(this, arguments);
}

util.inherits(FunctionCommand, Command);

FunctionCommand.prototype.toSource = function (env) {

  var params = this.getParameters(this.options.params || []);
  var name = params.name;

  if (!name) {
    throw 'command function needs parameter name';
  }

  name.trim = true;

  env
    .addSource('<!--target:')
    .accept(params.name)
    .addSource('-->');

};

FunctionCommand.prototype.toCloseSource = function (env) {
    env.addSource('<--/target-->');
};

module.exports = FunctionCommand;