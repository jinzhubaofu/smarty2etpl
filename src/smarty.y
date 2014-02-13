%start root
%ebnf

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
  | OPEN ID property* CLOSE -> new yy.InlineNode($2, $3)
  ;

openBlock
  : OPEN CMD commandParam* CLOSE -> new yy.CommandNode($2, $3)
  ;

commandParam
  : param -> $1
  | property -> $1
  ;

closeBlock
  : OPEN_BLOCK_END CMD CLOSE -> $2
  ;

elseif
  : ELSEIF commandParam* CLOSE stmts? -> {command:'elseif', params: $2, statements: $4}
  ;

else
  : ELSE stmts? -> $2
  ;

property
  : ID EQUAL param -> new yy.PropertyNode($1, $3)
  ;

param
  : constant -> $1
  | chainable -> $1
  ;

constant
  : STRING -> new yy.ConstantNode($1)
  | INTEGER -> new yy.ConstantNode($1)
  | BOOLEAN -> new yy.ConstantNode($1)
  | OPERATOR -> new yy.ConstantNode($1)
  ;

chainable
  : variable modifier* -> new yy.ChainableNode($1, $2)
  | function modifier* -> new yy.ChainableNode($1, $2)
  ;

function
  : ID FUNCTION_OPEN param* FUNCTION_CLOSE -> new yy.PhpFunctionNode($1, $3)
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