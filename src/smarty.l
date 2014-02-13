%x s cmd id

L "{"
R "}"

LH [=}\s\/.)(:\|]

CMD       "if"|"foreach"|"function"|"block"/{LH}
BOOLEAN   "false"|"true"/{LH}
ELSEIF    "elseif"/{LH}
ELSE      "else"/{LH}
ID        [_a-zA-Z][_a-zA-Z0-9]*/{LH}
INTEGER   \-?[0-9]+/{LH}
OPERATOR  "=>"|"==="|"=="|"as"/{LH}
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

<s>{L}\s*{ELSEIF} {
  yytext = "elseif";
  this.begin("cmd");
  return "ELSEIF";
}

<s>{L}\s*{ELSE}\s*{R} {
  console.log("ELSE");
  yytext = "else";
  return "ELSE";
}

<s>{L}"/" {
  console.log('OPEN_BLOCK_END');
  this.begin("cmd");
  return "OPEN_BLOCK_END";
}


<s>{L} {
  console.log("S|OPEN");
  this.begin("cmd");
  return "OPEN";
}

<cmd>{CMD} {
  console.log("CMD|COMMAND|%s", yytext);
  return "CMD";
}

<cmd>{OPERATOR} {
  console.log("CMD|OPERATOR|%s", yytext);
  return "OPERATOR";
}

<cmd>{ID} {
  console.log("CMD|ID|%s", yytext);
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
  console.log("CMD|BOOLEAN:%s", yytext);
  return "BOOLEAN";
}

<cmd>"$" {
  console.log("CMD|DATA");
  return "DATA";
}

<cmd>"." {
  console.log("CMD|SEP");
  return "SEP";
}

<cmd>"=" {
  console.log("CMD|OPERATOR");
  return "EQUAL";
}

<cmd>"@" {
  return "CURSOR";
}

<cmd>"|" {
  console.log("CMD|MODIFIER");
  return "MODIFIER";
}

<cmd>":" {
  return "MODIFIER_PARAM";
}

<cmd>"(" {
  console.log("CMD|FUNCTION_OPEN");
  return "FUNCTION_OPEN";
}

<cmd>")" {
  console.log("CMD|FUNCTION_CLOSE");
  return "FUNCTION_CLOSE";
}

<cmd>{INTEGER} {
  console.log("CMD|INTEGER:%s", yytext);
  return "INTEGER";
}

<cmd>\s+ {
  // eat
}

<cmd>{R} {
  this.popState();
  this.popState();
  console.log("CMD|CLOSE");
  return "CLOSE";
}

<s>[\s] {
  // eat
}

<INITIAL,s><<EOF>> {
  return "EOF";
}