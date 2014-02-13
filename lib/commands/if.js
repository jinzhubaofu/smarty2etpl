var Command = require('../Command.js');
var util = require('util');

function IfCommand() {
  Command.apply(this, arguments);
}

util.inherits(IfCommand, Command);

IfCommand.prototype.toSource = function (env) {

  var params = this.options.params || [];

  env.addSource('<!--if:');

  params.forEach(function (param) {
    env.accept(param);
  });

  env.addSource('-->');

};

IfCommand.prototype.toCloseSource = function (env) {
    env.addSource('<!--/if-->');
};

module.exports = IfCommand;