var Command = require('../Command');
var _ = require('underscore');
var util = require('util');

function ForeachCommand() {
  Command.apply(this, arguments);
}

util.inherits(ForeachCommand, Command);

ForeachCommand.prototype.toSource = function (env) {

  var params = this.prepare(this.options.params || []);

  env
    .addSource('<!--for: ')
    .accept(params.from)
    .addSource(' as ')
    .accept(params.to);

  params.index && env.addSource(', ').accept(params.index);
  env.addSource('-->');
};

ForeachCommand.prototype.toCloseSource = function (env) {
  env.addSource('<!--/for-->');
};

ForeachCommand.prototype.prepare = function (params) {

  var length = params.length;

  if (!length || params.length !== 5 && params.length !== 3) {
    throw 'Command[foreach] needs parameter: '
      + '"$data as $item" or "$data as $index => $item"';
  }

  return length === 5 
    ? { from: params[0], to: params[4], index: params[2]}
    : { from: params[0], to: params[2] };

};

module.exports = ForeachCommand;