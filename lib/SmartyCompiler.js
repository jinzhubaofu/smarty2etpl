module.exports = SmartyCompiler;

var parser = require('./parser');
var ast = require('./ast');
var etpl = require('etpl');
var EtplCompiler = require('./EtplCompiler');

parser.yy = ast;

function SmartyCompiler() {

}

SmartyCompiler.prototype = {
  constructor: SmartyCompiler,
  compile: function (program, options) {
    console.log('%j', program);
    this.options = options;
    this.opcodes = [];
    return this.accept(program);
  },

  accept: function (node) {
    return this[node.type](node);
  },

  program: function (program) {
    var statements = program.statements;
    for(var i = 0, l = statements.length; i<l; i++) {
      this.accept(statements[i]);
    }
    return this;
  },

  block: function (block) {
    var mustache = block.mustache;
    var program = block.program;
    var inverse = block.inverse;
    program && this.program(program);
    inverse && this.program(inverse);
  },

  command: function (command) {

  },

  text: function (text) {

  },

  opcode: function (name) {
    this.opcodes.push({
      opcode: name, 
      args: [].slice.call(arguments, 1)
    });
  }

};

/**
 * 返回etpl编译后的结果
 * 
 * @param {string} input 基于smarty语法的字符串
 * @param {Object} options 编译选项
 * @return {function}
 */
SmartyCompiler.compile = function (input, options) {

}

/**
 * 将smarty模板转化为etpl模板
 * 
 * @param {string} input smarty模板
 * @param {object} options 编译选项
 * @return {string} etpl模板
 */
SmartyCompiler.precompile = function (input, options) {

  if (input == null || typeof input !== 'string') {
    throw new Exception(''
      + 'You must pass a string to precompile. '
      + 'You passed ' + input
    );
  }

  options = options || {};

  // 语法分析
  var ast = parser.parse(input);

  // 生成opcode
  var environment = new SmartyCompiler().compile(ast, options);

  // 生成etpl
  return new EtplCompiler().compile(environment, options);
}