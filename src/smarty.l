%x SMARTY

%%

[^\x00]*?/"{"               {
                              this.begin('SMARTY');
                              if (yytext) {
                                console.log('LEX|CONTENT1|%s', yytext);
                                return 'CONTENT';
                              }
                            }

[^\x00]+                    return 'CONTENT';
<SMARTY>"$"[a-zA-Z]+        return 'VARIABLE';
<SMARTY>"{"                 return '{';
<SMARTY>[\s]+               // eat
<SMARTY>"}"                 {
                              this.popState();
                              return '}';
                            }
<INITIAL,SMARTY><<EOF>>     return 'EOF';