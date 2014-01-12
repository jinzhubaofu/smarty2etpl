%start root

%ebnf

%token '{'
%token '}'

%%

root
    : stmts EOF             { return new yy.ProgramNode($1); }
    | EOF                   { return new yy.ProgramNode([]); }
    ;
    
stmts
    : stmts stmt            { 
                              $1.push($2);
                              $$ = $1;
                            }

    | stmt                  -> [$1]
    ;

stmt
    : '{' VARIABLE '}'      -> new yy.VariableNode($2);
    | CONTENT               -> new yy.ContentNode($1)
    ;