var Command = require('../Command.js');
var util = require('util');

function BlockCommand() {
  Command.apply(this, arguments);
}

util.inherits(BlockCommand, Command);

BlockCommand.prototype.toSource = function (env) {

  var params = this.options.params || [];

  env.addSource('<!--content:');

  params.forEach(function (param) {
    env.accept(param);
  });

  env.addSource('-->');

};

BlockCommand.prototype.toCloseSource = function (env) {
    env.addSource('<!--/content-->');
};

module.exports = BlockCommand;