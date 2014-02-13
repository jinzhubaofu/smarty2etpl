var pool = {};

function Command(options) {
  this.options = options || {};
}

Command.prototype = {
  constructor: Command,
  toSource: function () {
    throw 'command must implement this method';
  },

  getParameters: function (params) {

    var result = {};
    
    params.forEach(function (param) {

        if (param.type === 'property') {
            result[param.key] = param.value;
        }
        else if (param.type === 'constant') {
            result[param] = null;
        }

    });

    return result;

  }

};

Command.register = function (name, clazz) {
  pool[name] = clazz;
};

Command.get = function (name, options) {
  var clazz = pool[name];
  if (!clazz) {
    throw 'command ' + name + ' cannot found';
  }
  return new clazz(options);
};

module.exports = Command;