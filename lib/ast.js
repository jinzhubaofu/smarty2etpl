var AST = {

  /**
   * 语句组
   * 
   * @constructor
   * @param {array[Node]} statements 一个语句组
   * @param {array[Node]} inverse 另一个语句组
   */
  ProgramNode: function (statements, inverse) {
    this.type = 'program';
    this.statements = statements;
    if (inverse) {
      this.inverse = new AST.ProgramNode(inverse);
    }
  },

  /**
   * X-[Y]-/X语句块
   * 
   * @constructor
   * @param {CommandNode} open X
   * @param {CommandNode} close /X
   * @param {Program}     program X-/X中包裹的语句组
   * @param {Program}     inverse [Y]-/X中包裹的语句组
   */
  BlockNode: function (open, close, program, inverse) {

    this.type = 'block';
    
    this.open = open;
    this.close = close;
    this.program = program;
    this.inverse = inverse;

    if (inverse && !program) {
      this.isInverse = true;
    }

  },

  /**
   * 命令语句块
   * 
   * @constructor
   * @param {string} command 命令名
   * @param {string} type 命令状态
   */
  CommandNode: function (command, type) {
    this.type = 'command';
    this.command = command;
    this.type = type;
  },

  /**
   * 文本语句块
   * 
   * @constructor
   * @param {string} text 文本
   */
  TextNode: function (text) {
    this.type = 'text';
    this.text = text;
  }
};

module.exports = AST;