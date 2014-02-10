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
  ;

stmts
  : stmt -> [$1]
  | stmts stmt { $1.push($2); $$ = $1; }
  ;

stmt
  : CONTENT -> new yy.TextNode($1)
  | openBlock program closeBlock -> new yy.BlockNode($1, $3, $2, $2.inverse)
  ;

openBlock
  : OPEN CMD param* CLOSE -> new yy.CommandNode($2, $3)
  ;

closeBlock
  : OPEN_BLOCK_END CMD CLOSE -> $2
  ;

elseif
  : ELSEIF param* CLOSE stmts? -> {command:'elseif', params: $2, statements: $4}
  ;

else
  : ELSE CLOSE stmts? -> $3
  ;

param
  : STRING -> new yy.TextNode($1)
  | INTEGER -> new yy.TextNode($1)
  | BOOLEAN -> new yy.TextNode($1)
  | dataName -> $1
  | OPERATOR -> new yy.TextNode($1)
  ;

dataName
  : DATA path -> new yy.IdNode($2)
  ;

path
  : pathSegments -> $1
  ;

pathSegments
  : pathSegments SEP ID -> $1.concat($3)
  | ID -> [$1]
  ;