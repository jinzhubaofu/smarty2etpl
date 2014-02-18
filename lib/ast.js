var _ = require('underscore');

var ast = {
    ProgramNode: function (statements, inverse) {
      this.type = 'program';
      this.statements = statements;
      if (inverse && inverse.length) {
        this.inverse = new ast.ProgramNode(inverse);
      }
    },
    ConstantNode: function (value) {
      this.type = 'constant';
      this.value = value;
    },
    BlockNode: function (command, close, program, inverse) {
      if (command.name !== close) {
        throw ''
          + 'block open[' + open.command + '] '
          + 'and close[' + close + '] mistoken';
      }
      this.type = 'block';
      this.command = command;
      this.program = program;
      this.inverse = inverse;
    },
    InlineNode: function (command, params) {
      this.type = 'inline';
      this.command = command;
      this.params = params;
    },
    CommandNode: function (name, params) {
      this.type = 'command';
      this.name = name;
      this.params = params || [];
    },
    PhpFunctionNode: function (name, params) {
      this.type = 'php';
      this.name = name;
      this.params = params;
    },
    PropertyNode: function (name, value) {
      this.type = 'property';
      this.name = name;
      this.value = value;
    },
    VariableNode: function (paths) {
      this.type = 'variable';
      this.paths = paths;
    },
    IdNode: function (id) {
      this.type = 'id';
      this.value = id;
    },
    PropertyNode: function (key, value) {
      this.type = 'property';
      this.key = key;
      this.value = value;
    },
    DataNode: function (chainable) {
      this.type = 'data';
      this.data = chainable;
    },
    ChainableNode: function (source, modifiers) {
      this.type = 'chainable';
      this.source = source;
      if (!_.isEmpty(modifiers)) {
        this.modifiers = modifiers;
      }
    },
    ModifierNode: function (name, params) {
      this.type = 'modifier';
      this.name = name;
      this.params = params;
    },
    buildBlockInverse: function (blocks, last) {
      var result = null;
      for (var i = blocks.length - 1; i >= 0; i--) {
        var block = blocks[i];
        var inverse = !result
            ? new ast.ProgramNode(last || [], null)
            : new ast.ProgramNode([result], null);
        var program = new ast.ProgramNode(block.statements);
        var command = new ast.CommandNode('if', block.params);
        result = new ast.BlockNode(command, 'if', program, inverse);
      }
      return [result];
    }
};

module.exports = ast;