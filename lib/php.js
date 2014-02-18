/**
 * 翻译php的内置函数
 * 
 * @namespace
 */

var _ = require('underscore');

require('colors');

module.exports = {
  isset: function (env, params) {

    if (_.isEmpty(params) || params.length !== 1) {
      throw 'PHP function[isset] needs one parameter';
    }

    env
      .addSource('(')
      .accept(params[0])
      .addSource('== null')
      .addSource(')');

  },

  empty: function (env, params) {

    if (_.isEmpty(params) || params.length !== 1) {
      throw 'PHP function[empty] needs one parameter';
    }

    console.info('PHP function[empty] makes the etpl rely on jQuery'.red);

    env
      .addSource('jQuery.isEmptyObject(')
      .accept(params[0])
      .addSource(')');

  },

  count: function (env, params) {

    if (_.isEmpty(params) || params.length !== 1) {
      throw 'PHP function[count] needs one parameter';
    }

    var variable = params[0];

    if (variable.type === 'chainable') {
      variable.source.paths.push('length');
      env.accept(variable);
      return;
    }

    if (variable.type === 'php') {
      env.accept(variable).addSource('.length');
      return;
    }

  }

};