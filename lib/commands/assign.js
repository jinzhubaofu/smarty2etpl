var Command = require('../Command.js');
var util = require('util');

function AssignCommand() {
  Command.apply(this, arguments);
}

util.inherits(AssignCommand, Command);

AssignCommand.prototype.toSource = function (env) {

  var params = this.getParameters(this.options.params || []);
  var name = params['var'];
  var value = params.value;

  name.trim = true;

  env
    .addSource('<!--var:')
    .accept(name)
    .addSource('=')
    .accept(value)
    .addSource('-->');

};

AssignCommand.prototype.toCloseSource = function (env) {
    env.addSource('<!--/if-->');
};

module.exports = AssignCommand;