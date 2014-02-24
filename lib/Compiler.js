var parser = require('./parser');
var ast = require('./ast');
var _ = require('underscore');
var commands = require('./commands');
var modifiers = require('./modifiers');
var php = require('./php.js');

parser.yy = ast;

function Compiler() {
  this._isMaster = true;
}

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

    var name = block.command.name;
    var command = commands.get(name);
    var program = block.program;
    var inverse = block.inverse;

    // 处理命令
    command.open(this, {
      params: block.command.params
    });

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
    command.close(this);

  },

  id: function (node) {
    this.addSource(
      '${' + node.value + '}'
    );
  },

  constant: function (node) {

    this.addSource(
      node.trim && typeof node.value === 'string'
        ? node.value.replace(/^['"]|['"]$/g, '')
        : node.value
    );
    
  },

  php: function (node) {

    var handler = php[node.name];

    if (!handler) {
      throw 'PhpFunction[' + node.name + '] is not supported.';
    }

    handler(this, node.params || []);

  },

  data: function (node) {
    // console.log('data:%j', node);
    this.accept(node.data);
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

    var me = this;

    me.addSource(
      node.key + '='
    );

    node.value.forEach(function (item) {
      me.accept(item);
    });

  },

  variable: function (node) {
    this.addSource(node.paths.join('.'));
  },

  modifier: function (node) {

    var me = this;
    
    var modifier = modifiers.get(node.name);

    modifier(this, {
      params: node.params
    });

  },

  inline: function (node) {

    var me = this;
    var name = node.command.name
    var params = node.command.params || [];

    // 行内命令
    var command = commands.get(name);

    if (command) {
      command.open(this, {
        params: params
      });
      return;
    }

    me.addSource('<!--use:' + name + '(');

    _.isEmpty(params) || params.forEach(function (param, index) {

      index && me.addSource(', ');
      me.accept(param);

    });

    me.addSource(')-->');

  },

  addSource: function (source) {
    this.source += source;
    return this;
  },

  /**
   * 将一个属性的值添加到源码中
   * 
   * @param {ast.PropertyNode} property 属性值对像
   * @return {self}
   */
  addPropertyValue: function (property) {

    var me = this;

    if (_.isEmpty(property.value)) {
      return null;
    }

    property.value.forEach(function (item) {
      item.trim = property.trim;
      me.accept(item);
    });

    return me;
  },

  toSource: function () {
    return this.source;
  },

  /**
   * 将模板标识为母模板
   * 
   * 由于smarty中，母模板和子模板都使用相同的命令Block。
   * 这导致不能根据命令来区分母模板与子模板
   * 
   * 一个模板文件，默认是母模板
   * 
   * 如果一个smarty文件中拥有extends命令，那么它是子模板，否则是母模板。
   * 母模板中的block命令将被翻译为contentplaceholder
   * 子模板中的block命令将被翻译为content
   * 
   * extends命令出现之前的block命令则会统一被翻译成content
   * 
   * @param {boolean} isMaster 是否为母模板
   */
  setMaster: function (isMaster) {
    this._isMaster = !!isMaster;
    return this;
  },

  isMaster: function () {
    return this._isMaster;
  }

};



module.exports = Compiler;