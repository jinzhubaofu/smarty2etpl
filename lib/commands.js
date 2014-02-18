var _ = require('underscore');

function getParameters(params) {

  var result = {};
  
  params.forEach(function (param) {

    if (param.type === 'property') {
      result[param.key] = param;
    }

  });

  return result;

}

var commands = {

  'assign': {
    open: function (env, options) {

      var params = getParameters(options.params || []);
      var name = params['var'];
      var value = params.value;

      name.trim = true;

      env
        .addSource('<!--var:')
        .addPropertyValue(name)
        .addSource('=')
        .addPropertyValue(value)
        .addSource('-->');

    },

    close: function (env, options) {
      return;
    }

  },

  'if': {
    open: function (env, options) {
      var params = options.params || [];

      if (_.isEmpty(params)) {
        throw 'Command[if] needs condition expression.';
      }

      env.addSource('<!--if:');

      params.forEach(function (param) {
        env.accept(param);
      });

      env.addSource('-->');
    },
    close: function (env, options) {
      env.addSource('<!--/if-->');
    }
  },

  'block': {
    open: function (env, options) {
      var params = options.params || [];

      if (env.isMaster()) {
        env.addSource('<!--contentplaceholder:');
      }
      else {
        env.addSource('<!--content:');
      }

      params.forEach(function (param) {
        param.trim = true;
        env.addPropertyValue(param);
      });

      env.addSource('-->');
    },
    close: function (env, options) {
      env.addSource('<!--/content-->');
    }
  },

  'extends': {
    open: function (env, options) {
      var params = getParameters(options.params || []);
      var file = params.file;

      if (!file) {
        throw 'Command[extends] needs parameter "file".';
      }

      file.trim = true;

      env
        .setMaster(false)
        .addSource('<!--target:' + getNextExtendsTarget() + '(master=')
        .addPropertyValue(file)
        .addSource(')-->');
    },
    close: function (env, options) {}
  },

  'foreach': {
    open: function (env, options) {
      var params = getParameters(options.params || []);
      var from = params.from;
      var item = params.item;
      var key = params.key;

      if (!from || from.value.length !== 1) {
        throw 'Command[foreach] needs parameter from';
      }

      if (!item || item.value.length !== 1) {
        throw 'Command[foreach] needs parameter item';
      }

      env
        .addSource('<!--for: ')
        .addPropertyValue(from)
        .addSource(' as ')
        .addPropertyValue(item);

      params.key && env.addSource(', ').addPropertyValue(key);

      env.addSource('-->');
    },
    close: function (env, options) {
      env.addSource('<!--/for-->');
    }
  },

  'function': {
    open: function (env, options) {
      var params = getParameters(options.params || []);
      var name = params.name;

      if (!name) {
        throw 'command function needs parameter name';
      }

      name.trim = true;

      env
        .addSource('<!--target:')
        .addPropertyValue(name)
        .addSource('-->');
    },
    close: function (env, options) {
      env.addSource('<--/target-->');
    }
  },

  'strip': {
    open: function (env, options) {},
    close: function (env, options) {}
  }

};



module.exports = {
  get: function (name) {

    var command = commands[name];

    if (!command) {
      throw 'Command[' + name + '] cannot be found.';
    }

    return command;

  }
};