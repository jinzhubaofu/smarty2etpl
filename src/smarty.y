%start root

%ebnf

%%

root
    : stmts EOF             { return new yy.ProgramNode($1); }
    | EOF                   { return new yy.ProgramNode(null); }
    ;

// 以program解析各类command中的语句块
program
  : OPEN_COMMAND_INVERSE CLOSE_COMMAND stmts -> new yy.ProgramNode(null, $2)
  | stmts OPEN_COMMAND_INVERSE CLOSE_COMMAND stmts -> new yy.ProgramNode($1, $3)
  | stmts OPEN_COMMAND_INVERSE CLOSE_COMMAND -> new yy.ProgramNode($1)
  | stmts -> new yy.ProgramNode($1, null)
  | OPEN_COMMAND_INVERSE CLOSE_COMMAND -> new yy.ProgramNode()
  ;

stmts
  : stmt -> [$1]
  | stmts stmt { $1.push($2); $$ = $1; }
  ;

stmt
  : CONTENT -> new yy.TextNode($1)
  | openCommand program closeCommand -> new yy.BlockNode($1, $3, $2, $2.inverse)
  ;

openCommand
  : OPEN_COMMAND command CLOSE_COMMAND -> new yy.CommandNode($2, "OPEN")
  ;

closeCommand
  : OPEN_COMMAND_CLOSE command CLOSE_COMMAND -> new yy.CommandNode($2, "CLOSE")
  ;

command
  : path param* -> [[$1].concat($2), $3]
  | dataName -> [[$1], null]
  ;

path
  : pathSegments -> new yy.IdNode($1)
  ;

pathSegments
  : pathSegments SEP ID { $1.push({part: $3, separator: $2}); $$ = $1; }
  | ID -> [{part: $1}]
  ;

param
  : path -> $1
  | STRING -> new yy.StringNode($1)
  | INTEGER -> new yy.IntegerNode($1)
  | BOOLEAN -> new yy.BooleanNode($1)
  | dataName -> $1
  ;

dataName
  : CURSOR path -> new yy.DataNode($2)
  ;