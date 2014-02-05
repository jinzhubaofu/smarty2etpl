%x s

%{

function strip(start, end) {
  return yytext.substr(start, yyleng-end);
}

%}

LOOKAHEAD             [=~}\s\/.]
LITERAL_LOOKAHEAD     [~}\s]

ID                    [^\s!"#%-,\.\/;->@\[-\^`\{-~]+/{LOOKAHEAD} /*"*/
INTEGER               \-?[0-9]+(\.[0-9]+)?/{LITERAL_LOOKAHEAD}
BOOLEAN               ture|false/{LITERAL_LOOKAHEAD}
STRING                ("(\\"|[^"])*")|('(\\'|[^'])*')/{LITERAL_LOOKAHEAD}
OPERATOR              <=|>=|===|==|!=|!|<|>|\+|\-|\%|\/|%|&|\^|\|and|or|not
%%

[^\x00]*?/"{"               {
                              this.begin("s");
                              if (yytext) {
                                return "CONTENT";
                              }
                            }
[^\x00]+                    return "CONTENT";
<s>"{"\s*"/"                return "OPEN_COMMAND_CLOSE";
<s>"{"\s*"else"             return "OPEN_COMMAND_INVERSE";
<s>"{"                      return "OPEN_COMMAND";
<s>"}"                      {
                              this.popState();
                              return "CLOSE_COMMAND";
                            }
<s>[\s]+                    // eat
<s>[\.]                     return "SEP";
<s>"@"                      return "CURSOR";
<s>"$"{ID}                  {
                              yytext = strip(1,1);
                              return "ID";
                            }
<s>{ID}                     return "ID";
<s>'['[^\]]*']'             {
                              yytext = strip(1,2);
                              return "ID";
                            }
<s>{BOOLEAN}                return "BOOLEAN";
<s>{INTEGER}                return "INTEGER";
<s>{OPERATOR}               return "OPERATOR";
<s>'"'("\\"["]|[^"])*'"'    {
                              yytext = strip(1,2).replace(/\\"/g,'"');
                              return "STRING";
                            }
<s>"'"("\\"[']|[^'])*"'"    {
                              yytext = strip(1,2).replace(/\\'/g,"'"); 
                              return "STRING";
                            }
<INITIAL,s><<EOF>>          return "EOF";