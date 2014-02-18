var modifiers = {
  escape: function(env, options) {
    var params = options.params;
    var first = params[0];

    env.addSource(
        '|' + first.value.slice(1, -1)
    );
  },
  highlight: function(env, options) {}
};


module.exports = {
  get: function (name) {
    var modifier = modifiers[name];
    if (!modifier) {
      throw 'Modifier[' + name + '] cannot be found.';
    }
    return modifier;
  }
};