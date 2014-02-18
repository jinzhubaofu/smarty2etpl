var Compiler = require('./Compiler');
var parser = require('./parser');

/**
 * 将smarty模板转化为etpl模板
 * 
 * @param {string} input smarty模板
 * @param {object} options 编译选项
 * @return {string} etpl模板
 */
exports.compile = function (input, options) {

  if (input == null || typeof input !== 'string') {
    throw new Exception(''
      + 'You must pass a string to precompile. '
      + 'You passed ' + input
    );
  }

  options = options || {};

  // 语法分析
  var ast = parser.parse(input);

  // console.log(JSON.stringify(ast, 0, 2));

  // 生成etpl
  return new Compiler().compile(ast, options);

}