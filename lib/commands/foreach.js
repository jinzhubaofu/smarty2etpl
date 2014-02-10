var Command = require('../Command');

console.log(Command);

var util = require('util');

function ForeachCommand() {
  Command.apply(this, arguments);
}

util.inherits(ForeachCommand, Command);

ForeachCommand.prototype.toSource = function (env) {

  var params = this.prepare(this.options.params || []);

  console.log(params);

  env
    .addSource('<!--for:')
    .addSource(' ')
    .accept(params[0])
    .addSource(' as ')
    .accept(params[1]);

  if (params[2]) {
    env
      .addSource(', ')
      .accept(params[2]);
  }

  env.addSource('-->');
  
};

ForeachCommand.prototype.prepare = function (params) {

  console.log(params);

  if (!params.length) {
    throw 'Command[for] needs params.';
  }

  if (params[1].type === 'text' && params[1].text === 'as') {
    var from = params[0];
    var to = params[3] ? params[4] : params[2];
    var index = params[3] ? params[2] : '';
  }

  return [from, to, index];

};

module.exports = ForeachCommand;