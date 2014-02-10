var parser = require('./parser');
var ast = require('./ast');
var _ = require('underscore');
var Command = require('./Command');
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
    var command = block.command;
    var program = block.program;
    var inverse = block.inverse;

    // 处理命令
    this.accept(command);

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
    this.addSource(
      '<!--/' + command.name + '-->'
    );

  },

  command: function (node) {
    var command = Command.get(
      node.name, 
      {
        params: node.params
      }
    );
    command.toSource(this);
  },

  id: function (node) {
    this.addSource(
      '${' + node.path.join('.') + '}'
    );
  },

  text: function (node) {
    this.addSource(node.text);
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