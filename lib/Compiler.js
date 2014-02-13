var parser = require('./parser');
var ast = require('./ast');
var _ = require('underscore');
var Command = require('./Command');
var modifiers = require('./modifiers/factory');
parser.yy = ast;

function Compiler() {}

Compiler.prototype = {

  constructor: Compiler,

  compile: function (program, options) {
    this.source = '';
    this.options = options;
    this.accept(program);
    return this.toSource();
  },

  accept: function (node) {
    this[node.type](node);
    return this;
  },

  program: function (program) {
    var statements = program.statements;
    for(var i = 0, l = statements.length; i<l; i++) {
      this.accept(statements[i]);
    }
    return this;
  },

  block: function (block) {

    var command = Command.get(
      block.command.name, 
      {
        params: block.command.params
      }
    );

    var program = block.program;
    var inverse = block.inverse;

    // 处理命令
    command.toSource(this);

    // 主块
    program && this.accept(program);

    // 反块
    if (inverse) {
      this.addSource(
        '<!--else-->'
      );
      this.accept(inverse);
    }

    // 添加块闭合
    command.toCloseSource(this);

  },

  id: function (node) {
    this.addSource(
      '${' + node.value + '}'
    );
  },

  constant: function (node) {

    console.log('constant:%j', node);

    this.addSource(
      node.trim && typeof node.value === 'string'
        ? node.value.replace(/^['"]|['"]$/g, '')
        : node.value
    );
    
  },

  php: function (node) {

    var me = this;

    me.addSource(
      'php.' + node.name + '('
    );

    _.isEmpty(node.params) || node.params.forEach(function (param) {
      me.accept(param);
    });

    me.addSource(')');

  },

  data: function (node) {
    // console.log('data:%j', node);
    this
      .addSource('<!--')
      .accept(node.data)
      .addSource('-->');
  },

  chainable: function (node) {
    // console.log('compiling chainable:\n%j', node);
    var me = this;
    var modifiers = node.modifiers;

    me.addSource('${').accept(node.source);

    _.isEmpty(modifiers) || modifiers.forEach(function (modifier) {
      me.modifier(modifier);
    });

    me.addSource('}');

  },

  property: function (node) {
    // console.log('property:%j', node);
    this.addSource(
      node.key + '='
    );
    this.accept(node.value);
  },

  variable: function (node) {
    this.addSource(node.paths.join('.'));
  },

  modifier: function (node) {

    var me = this;
    
    modifiers.getInstance(node.name, {
      params: node.params
    }).toSource(this);

  },

  inline: function (node) {

    var me = this;
    var command = node.command;
    var params = node.params;

    if (_.isEmpty(params)) {
      throw 'command must be provided.';
    }

    var first = params[0];

    // 行内命令
    Command.get(command, {
        params: params
    }).toSource(this);

  },

  addSource: function (source) {
    this.source += source;
    return this;
  },

  toSource: function () {
    return this.source;
  }

};



module.exports = Compiler;