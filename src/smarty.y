%start root
%ebnf

%left '+' '-'
%left '*' '/'
%left '!'
%left "==" "===" "!=" ">=" "<=" "<" ">"
%left "&&"
%left "||"

%%
root
  : stmts EOF { return new yy.ProgramNode($1); }
  | EOF       { return new yy.ProgramNode([]); }
  ;

program
  : stmts elseif* else? {
    $$ = new yy.ProgramNode(
      $1, 
      $2.length ? yy.buildBlockInverse($2, $3) : ($3 || [])
    );
  }
  | "" -> new yy.ProgramNode([]);
  ;

stmts
  : stmt -> [$1]
  | stmts stmt { $1.push($2); $$ = $1; }
  ;

stmt
  : CONTENT -> new yy.ConstantNode($1)
  | openBlock program closeBlock -> new yy.BlockNode($1, $3, $2, $2.inverse)
  | OPEN chainable CLOSE -> new yy.DataNode($2)
  | OPEN function CLOSE -> new yy.DataNode($2)
  | OPEN command CLOSE -> new yy.InlineNode($2)
  ;

openBlock
  : OPEN CMD property+ CLOSE -> new yy.CommandNode($2, $3)
  | OPEN CMD CLOSE -> new yy.CommandNode($2)
  | OPEN CMD exp CLOSE -> new yy.CommandNode($2, $3)
  ;

closeBlock
  : OPEN_BLOCK_END CMD CLOSE -> $2
  ;

elseif
  : ELSEIF exp CLOSE stmts? -> {command:'elseif', params: $2, statements: $4}
  ;

else
  : ELSE stmts? -> $2
  ;

command
  : ID property* -> new yy.CommandNode($1, $2)
  ;

exp
  : exp '+' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '-' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '*' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '/' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '||' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '&&' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '==' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '===' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '!=' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '>=' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '<=' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '<' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | exp '>' exp -> $1.concat([new yy.ConstantNode($2)]).concat($3)
  | '(' exp ')' -> [$1].concat($2).concat([$3])
  | '!' exp -> [new yy.ConstantNode($1)].concat($2)
  | STRING -> [new yy.ConstantNode($1)]
  | INTEGER -> [new yy.ConstantNode($1)]
  | chainable -> [$1]
  | function -> [$1]
  ;

property
  : ID EQUAL exp -> new yy.PropertyNode($1, $3)
  ;

constant
  : STRING -> new yy.ConstantNode($1)
  | INTEGER -> new yy.ConstantNode($1)
  | BOOLEAN -> new yy.ConstantNode($1)
  | OPERATOR -> new yy.ConstantNode($1)
  ;

chainable
  : variable modifier* -> new yy.ChainableNode($1, $2)
  ;

function
  : ID '(' exp ')' -> new yy.PhpFunctionNode($1, $3)
  ;

variable
  : DATA path -> new yy.VariableNode($2)
  ;

modifier
  : MODIFIER ID modifier_params? -> new yy.ModifierNode($2, $3)
  ;

modifier_params
  : MODIFIER_PARAM constant -> [$2]
  | modifier_params MODIFIER_PARAM constant -> $1.concat($3)
  ;

path
  : pathSegments -> $1
  ;

pathSegments
  : pathSegments SEP ID -> $1.concat($3)
  | ID -> [$1]
  ;