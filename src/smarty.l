%x s cmd id

L "{"
R "}"

LH [=}\s\/.]

CMD       "if"|"foreach"/{LH}
BOOLEAN   "false"|"true"/{LH}
ELSEIF    "elseif"/{LH}
ELSE      "else"/{LH}
ID        [a-zA-Z][a-zA-Z0-9]*/{LH}
INTEGER   \-?[0-9]+/{LH}
OPERATOR  "=>"|"==="|"=="|"="|"as"/{LH}
%%

[^\x00]*?/{L} {
  this.begin("s");
  if (yytext) {
    console.log("CONTENT:%s", yytext);
    return "CONTENT";
  }
}

[^\x00]+ {
  console.log("CONTENT:%s", yytext);
  return "CONTENT";
}

<s>{CMD} {
  console.log("CMD|%s", yytext);
  this.begin("cmd");
  return "CMD";
}

<cmd>{OPERATOR} {
  return "OPERATOR";
}

<cmd>{ID} {
  return "ID";
}

<cmd>'"'("\\"["]|[^"])*'"' {
  console.log("CMD|STRING|%s", yytext);
  return "STRING";
}

<cmd>"'"("\\"[']|[^'])*"'" {
  console.log("CMD|STRING|%s", yytext);
  return "STRING";
}

<cmd>{BOOLEAN} {
  return "BOOLEAN";
}

<cmd>"$" {
  console.log("IN_CMD|$");
  return "DATA";
}

<cmd>"." {
  console.log("IN_CMD|.");
  return "SEP";
}

<cmd>"@" {
  return "CURSOR";
}

<cmd>{INTEGER} {
  return "INTEGER";
}

<cmd>\s+ {
  // eat
}

<cmd>"}" {
  this.popState();
  this.popState();
  return "CLOSE";
}

<s>"/"{CMD} {
  console.log('CLOSE_CMD|%s\n',yytext);
  yytext = yytext.slice(1);
  return "CLOSE_CMD";
}

<s>{L}\s*{ELSEIF} {
  console.log("ELSEIF"); 
  yytext = "elseif";
  this.begin("cmd");
  return "ELSEIF";
}

<s>{L}\s*{ELSE} {
  console.log("ELSE");
  yytext = "else";
  return "ELSE";
}

<s>{L}"/" {
  console.log('CLOSE_CMD');
  return "OPEN_BLOCK_END";
}

<s>{L} {
  console.log("OPEN");
  return "OPEN";
}

<s>{R} {
  console.log('CLOSE');
  this.popState();
  return "CLOSE";
}

<s>[\s] {
  // eat
}

<INITIAL,s><<EOF>> {
  return "EOF";
}