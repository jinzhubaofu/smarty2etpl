%x s cmd

L "{"
R "}"

LH [}\s]

CMD       "if"|"foreach"/{LH}
ELSEIF    "elseif"/{LH}
ELSE      "else"/{LH}

%%

[^\x00]*?/{L} {
  this.begin("s");
  if (yytext) {
    return "CONTENT";
  }
}

[^\x00]+ {
  return "CONTENT";
}

<s>{CMD} {
  console.log("CMD|%s", yytext);
  this.begin("cmd");
  return "CMD";
}

<cmd>\s+ {
  // eat...
}

<cmd>[^}\s]+ {
  console.log("CMD|PARAMS|%s", yytext);
  return "PARAM";
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