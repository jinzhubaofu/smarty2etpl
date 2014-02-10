var ast = {
    ProgramNode: function (statements, inverse) {
      this.type = 'program';
      this.statements = statements;
      if (inverse && inverse.length) {
        this.inverse = new ast.ProgramNode(inverse);
      }
    },
    TextNode: function (text) {
      this.type = 'text';
      this.text = text;
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
    CommandNode: function (name, params) {
      this.type = 'command';
      this.name = name;
      this.params = params || [];
    },
    IdNode: function (path) {
      this.type = 'id';
      this.path = path;
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