%start root
%ebnf

%%
root
  : stmts EOF { return new yy.ProgramNode($1); }
  | EOF       { return new yy.ProgramNode([]); }
  ;

program
  : stmts elseif* else? {
    var inverse = 
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
  : OPEN CMD PARAM* CLOSE -> new yy.CommandNode($2, $3)
  ;

closeBlock
  : OPEN_BLOCK_END CMD CLOSE -> $2
  ;

elseif
  : ELSEIF PARAM* CLOSE stmts? -> {command:'elseif', params: $2, statements: $4}
  ;

else
  : ELSE CLOSE stmts? -> $3
  ;
