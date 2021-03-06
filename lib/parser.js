/* jshint ignore:start */

/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"stmts":4,"EOF":5,"program":6,"program_repetition0":7,"program_option0":8,"stmt":9,"CONTENT":10,"openBlock":11,"closeBlock":12,"OPEN":13,"chainable":14,"CLOSE":15,"function":16,"command":17,"CMD":18,"openBlock_repetition_plus0":19,"exp":20,"OPEN_BLOCK_END":21,"elseif":22,"ELSEIF":23,"elseif_option0":24,"else":25,"ELSE":26,"else_option0":27,"ID":28,"command_repetition0":29,"+":30,"-":31,"*":32,"/":33,"%":34,"||":35,"&&":36,"==":37,"===":38,"!=":39,">=":40,"<=":41,"<":42,">":43,"(":44,")":45,"!":46,"STRING":47,"INTEGER":48,"property":49,"EQUAL":50,"constant":51,"BOOLEAN":52,"OPERATOR":53,"variable":54,"chainable_repetition0":55,"DATA":56,"path":57,"modifier":58,"MODIFIER":59,"modifier_option0":60,"modifier_params":61,"MODIFIER_PARAM":62,"pathSegments":63,"SEP":64,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"CONTENT",13:"OPEN",15:"CLOSE",18:"CMD",21:"OPEN_BLOCK_END",23:"ELSEIF",26:"ELSE",28:"ID",30:"+",31:"-",32:"*",33:"/",34:"%",35:"||",36:"&&",37:"==",38:"===",39:"!=",40:">=",41:"<=",42:"<",43:">",44:"(",45:")",46:"!",47:"STRING",48:"INTEGER",50:"EQUAL",52:"BOOLEAN",53:"OPERATOR",56:"DATA",59:"MODIFIER",62:"MODIFIER_PARAM",64:"SEP"},
productions_: [0,[3,2],[3,1],[6,3],[6,0],[4,1],[4,2],[9,1],[9,3],[9,3],[9,3],[9,3],[11,4],[11,3],[11,4],[12,3],[22,4],[25,2],[17,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,2],[20,1],[20,1],[20,1],[20,1],[49,3],[51,1],[51,1],[51,1],[51,1],[14,2],[16,4],[54,2],[58,3],[61,2],[61,3],[57,1],[63,3],[63,1],[7,0],[7,2],[8,0],[8,1],[19,1],[19,2],[24,0],[24,1],[27,0],[27,1],[29,0],[29,2],[55,0],[55,2],[60,0],[60,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return new yy.ProgramNode($$[$0-1]); 
break;
case 2: return new yy.ProgramNode([]); 
break;
case 3:
    this.$ = new yy.ProgramNode(
      $$[$0-2], 
      $$[$0-1].length ? yy.buildBlockInverse($$[$0-1], $$[$0]) : ($$[$0] || [])
    );
  
break;
case 4:this.$ = new yy.ProgramNode([]);;
break;
case 5:this.$ = [$$[$0]];
break;
case 6: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 7:this.$ = new yy.ConstantNode($$[$0]);
break;
case 8:this.$ = new yy.BlockNode($$[$0-2], $$[$0], $$[$0-1], $$[$0-1].inverse);
break;
case 9:this.$ = new yy.DataNode($$[$0-1]);
break;
case 10:this.$ = new yy.DataNode($$[$0-1]);
break;
case 11:this.$ = new yy.InlineNode($$[$0-1]);
break;
case 12:this.$ = new yy.CommandNode($$[$0-2], $$[$0-1]);
break;
case 13:this.$ = new yy.CommandNode($$[$0-1]);
break;
case 14:this.$ = new yy.CommandNode($$[$0-2], $$[$0-1]);
break;
case 15:this.$ = $$[$0-1];
break;
case 16:this.$ = {command:'elseif', params: $$[$0-2], statements: $$[$0]};
break;
case 17:this.$ = $$[$0];
break;
case 18:this.$ = new yy.CommandNode($$[$0-1], $$[$0]);
break;
case 19:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 20:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 21:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 22:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 23:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 24:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 25:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 26:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 27:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 28:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 29:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 30:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 31:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 32:this.$ = $$[$0-2].concat([new yy.ConstantNode($$[$0-1])]).concat($$[$0]);
break;
case 33:this.$ = [$$[$0-2]].concat($$[$0-1]).concat([$$[$0]]);
break;
case 34:this.$ = [new yy.ConstantNode($$[$0-1])].concat($$[$0]);
break;
case 35:this.$ = [new yy.ConstantNode($$[$0])];
break;
case 36:this.$ = [new yy.ConstantNode($$[$0])];
break;
case 37:this.$ = [$$[$0]];
break;
case 38:this.$ = [$$[$0]];
break;
case 39:this.$ = new yy.PropertyNode($$[$0-2], $$[$0]);
break;
case 40:this.$ = new yy.ConstantNode($$[$0]);
break;
case 41:this.$ = new yy.ConstantNode($$[$0]);
break;
case 42:this.$ = new yy.ConstantNode($$[$0]);
break;
case 43:this.$ = new yy.ConstantNode($$[$0]);
break;
case 44:this.$ = new yy.ChainableNode($$[$0-1], $$[$0]);
break;
case 45:this.$ = new yy.PhpFunctionNode($$[$0-3], $$[$0-1]);
break;
case 46:this.$ = new yy.VariableNode($$[$0]);
break;
case 47:this.$ = new yy.ModifierNode($$[$0-1], $$[$0]);
break;
case 48:this.$ = [$$[$0]];
break;
case 49:this.$ = $$[$0-2].concat($$[$0]);
break;
case 50:this.$ = $$[$0];
break;
case 51:this.$ = $$[$0-2].concat($$[$0]);
break;
case 52:this.$ = [$$[$0]];
break;
case 53:this.$ = [];
break;
case 54:$$[$0-1].push($$[$0]);
break;
case 57:this.$ = [$$[$0]];
break;
case 58:$$[$0-1].push($$[$0]);
break;
case 63:this.$ = [];
break;
case 64:$$[$0-1].push($$[$0]);
break;
case 65:this.$ = [];
break;
case 66:$$[$0-1].push($$[$0]);
break;
}
},
table: [{3:1,4:2,5:[1,3],9:4,10:[1,5],11:6,13:[1,7]},{1:[3]},{5:[1,8],9:9,10:[1,5],11:6,13:[1,7]},{1:[2,2]},{5:[2,5],10:[2,5],13:[2,5],21:[2,5],23:[2,5],26:[2,5]},{5:[2,7],10:[2,7],13:[2,7],21:[2,7],23:[2,7],26:[2,7]},{4:11,6:10,9:4,10:[1,5],11:6,13:[1,7],21:[2,4]},{14:12,16:13,17:14,18:[1,15],28:[1,17],54:16,56:[1,18]},{1:[2,1]},{5:[2,6],10:[2,6],13:[2,6],21:[2,6],23:[2,6],26:[2,6]},{12:19,21:[1,20]},{7:21,9:9,10:[1,5],11:6,13:[1,7],21:[2,53],23:[2,53],26:[2,53]},{15:[1,22]},{15:[1,23]},{15:[1,24]},{14:33,15:[1,26],16:34,19:25,20:27,28:[1,35],44:[1,29],46:[1,30],47:[1,31],48:[1,32],49:28,54:16,56:[1,18]},{15:[2,65],28:[2,65],30:[2,65],31:[2,65],32:[2,65],33:[2,65],34:[2,65],35:[2,65],36:[2,65],37:[2,65],38:[2,65],39:[2,65],40:[2,65],41:[2,65],42:[2,65],43:[2,65],45:[2,65],55:36,59:[2,65]},{15:[2,63],28:[2,63],29:38,44:[1,37]},{28:[1,41],57:39,63:40},{5:[2,8],10:[2,8],13:[2,8],21:[2,8],23:[2,8],26:[2,8]},{18:[1,42]},{8:43,21:[2,55],22:44,23:[1,46],25:45,26:[1,47]},{5:[2,9],10:[2,9],13:[2,9],21:[2,9],23:[2,9],26:[2,9]},{5:[2,10],10:[2,10],13:[2,10],21:[2,10],23:[2,10],26:[2,10]},{5:[2,11],10:[2,11],13:[2,11],21:[2,11],23:[2,11],26:[2,11]},{15:[1,48],28:[1,50],49:49},{10:[2,13],13:[2,13],21:[2,13]},{15:[1,51],30:[1,52],31:[1,53],32:[1,54],33:[1,55],34:[1,56],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65]},{15:[2,57],28:[2,57]},{14:33,16:34,20:66,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:68,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{15:[2,35],28:[2,35],30:[2,35],31:[2,35],32:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35],45:[2,35]},{15:[2,36],28:[2,36],30:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36],42:[2,36],43:[2,36],45:[2,36]},{15:[2,37],28:[2,37],30:[2,37],31:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[2,37],43:[2,37],45:[2,37]},{15:[2,38],28:[2,38],30:[2,38],31:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[2,38],43:[2,38],45:[2,38]},{44:[1,37],50:[1,69]},{15:[2,44],28:[2,44],30:[2,44],31:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],37:[2,44],38:[2,44],39:[2,44],40:[2,44],41:[2,44],42:[2,44],43:[2,44],45:[2,44],58:70,59:[1,71]},{14:33,16:34,20:72,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{15:[2,18],28:[1,50],49:73},{15:[2,46],28:[2,46],30:[2,46],31:[2,46],32:[2,46],33:[2,46],34:[2,46],35:[2,46],36:[2,46],37:[2,46],38:[2,46],39:[2,46],40:[2,46],41:[2,46],42:[2,46],43:[2,46],45:[2,46],59:[2,46]},{15:[2,50],28:[2,50],30:[2,50],31:[2,50],32:[2,50],33:[2,50],34:[2,50],35:[2,50],36:[2,50],37:[2,50],38:[2,50],39:[2,50],40:[2,50],41:[2,50],42:[2,50],43:[2,50],45:[2,50],59:[2,50],64:[1,74]},{15:[2,52],28:[2,52],30:[2,52],31:[2,52],32:[2,52],33:[2,52],34:[2,52],35:[2,52],36:[2,52],37:[2,52],38:[2,52],39:[2,52],40:[2,52],41:[2,52],42:[2,52],43:[2,52],45:[2,52],59:[2,52],64:[2,52]},{15:[1,75]},{21:[2,3]},{21:[2,54],23:[2,54],26:[2,54]},{21:[2,56]},{14:33,16:34,20:76,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{4:78,9:4,10:[1,5],11:6,13:[1,7],21:[2,61],27:77},{10:[2,12],13:[2,12],21:[2,12]},{15:[2,58],28:[2,58]},{50:[1,69]},{10:[2,14],13:[2,14],21:[2,14]},{14:33,16:34,20:79,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:80,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:81,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:82,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:83,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:84,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:85,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:86,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:87,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:88,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:89,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:90,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:91,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{14:33,16:34,20:92,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{30:[1,52],31:[1,53],32:[1,54],33:[1,55],34:[1,56],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[1,93]},{44:[1,37]},{15:[2,34],28:[2,34],30:[2,34],31:[2,34],32:[2,34],33:[2,34],34:[2,34],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[2,34]},{14:33,16:34,20:94,28:[1,67],44:[1,29],46:[1,30],47:[1,31],48:[1,32],54:16,56:[1,18]},{15:[2,66],28:[2,66],30:[2,66],31:[2,66],32:[2,66],33:[2,66],34:[2,66],35:[2,66],36:[2,66],37:[2,66],38:[2,66],39:[2,66],40:[2,66],41:[2,66],42:[2,66],43:[2,66],45:[2,66],59:[2,66]},{28:[1,95]},{30:[1,52],31:[1,53],32:[1,54],33:[1,55],34:[1,56],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[1,96]},{15:[2,64],28:[2,64]},{28:[1,97]},{5:[2,15],10:[2,15],13:[2,15],21:[2,15],23:[2,15],26:[2,15]},{15:[1,98],30:[1,52],31:[1,53],32:[1,54],33:[1,55],34:[1,56],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65]},{21:[2,17]},{9:9,10:[1,5],11:6,13:[1,7],21:[2,62]},{15:[2,19],28:[2,19],30:[2,19],31:[2,19],32:[1,54],33:[1,55],34:[1,56],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[2,19]},{15:[2,20],28:[2,20],30:[2,20],31:[2,20],32:[1,54],33:[1,55],34:[1,56],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[2,20]},{15:[2,21],28:[2,21],30:[2,21],31:[2,21],32:[2,21],33:[2,21],34:[2,21],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[2,21]},{15:[2,22],28:[2,22],30:[2,22],31:[2,22],32:[2,22],33:[2,22],34:[2,22],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[2,22]},{15:[2,23],28:[2,23],30:[2,23],31:[2,23],32:[2,23],33:[2,23],34:[2,23],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65],45:[2,23]},{15:[2,24],28:[2,24],30:[2,24],31:[2,24],32:[2,24],33:[2,24],34:[2,24],35:[2,24],36:[2,24],37:[2,24],38:[2,24],39:[2,24],40:[2,24],41:[2,24],42:[2,24],43:[2,24],45:[2,24]},{15:[2,25],28:[2,25],30:[2,25],31:[2,25],32:[2,25],33:[2,25],34:[2,25],35:[1,57],36:[2,25],37:[2,25],38:[2,25],39:[2,25],40:[2,25],41:[2,25],42:[2,25],43:[2,25],45:[2,25]},{15:[2,26],28:[2,26],30:[2,26],31:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[1,57],36:[1,58],37:[2,26],38:[2,26],39:[2,26],40:[2,26],41:[2,26],42:[2,26],43:[2,26],45:[2,26]},{15:[2,27],28:[2,27],30:[2,27],31:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[1,57],36:[1,58],37:[2,27],38:[2,27],39:[2,27],40:[2,27],41:[2,27],42:[2,27],43:[2,27],45:[2,27]},{15:[2,28],28:[2,28],30:[2,28],31:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[1,57],36:[1,58],37:[2,28],38:[2,28],39:[2,28],40:[2,28],41:[2,28],42:[2,28],43:[2,28],45:[2,28]},{15:[2,29],28:[2,29],30:[2,29],31:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[1,57],36:[1,58],37:[2,29],38:[2,29],39:[2,29],40:[2,29],41:[2,29],42:[2,29],43:[2,29],45:[2,29]},{15:[2,30],28:[2,30],30:[2,30],31:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[1,57],36:[1,58],37:[2,30],38:[2,30],39:[2,30],40:[2,30],41:[2,30],42:[2,30],43:[2,30],45:[2,30]},{15:[2,31],28:[2,31],30:[2,31],31:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[1,57],36:[1,58],37:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31],42:[2,31],43:[2,31],45:[2,31]},{15:[2,32],28:[2,32],30:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],35:[1,57],36:[1,58],37:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32],42:[2,32],43:[2,32],45:[2,32]},{15:[2,33],28:[2,33],30:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],37:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33],42:[2,33],43:[2,33],45:[2,33]},{15:[2,39],28:[2,39],30:[1,52],31:[1,53],32:[1,54],33:[1,55],34:[1,56],35:[1,57],36:[1,58],37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64],43:[1,65]},{15:[2,67],28:[2,67],30:[2,67],31:[2,67],32:[2,67],33:[2,67],34:[2,67],35:[2,67],36:[2,67],37:[2,67],38:[2,67],39:[2,67],40:[2,67],41:[2,67],42:[2,67],43:[2,67],45:[2,67],59:[2,67],60:99,61:100,62:[1,101]},{15:[2,45],28:[2,45],30:[2,45],31:[2,45],32:[2,45],33:[2,45],34:[2,45],35:[2,45],36:[2,45],37:[2,45],38:[2,45],39:[2,45],40:[2,45],41:[2,45],42:[2,45],43:[2,45],45:[2,45]},{15:[2,51],28:[2,51],30:[2,51],31:[2,51],32:[2,51],33:[2,51],34:[2,51],35:[2,51],36:[2,51],37:[2,51],38:[2,51],39:[2,51],40:[2,51],41:[2,51],42:[2,51],43:[2,51],45:[2,51],59:[2,51],64:[2,51]},{4:103,9:4,10:[1,5],11:6,13:[1,7],21:[2,59],23:[2,59],24:102,26:[2,59]},{15:[2,47],28:[2,47],30:[2,47],31:[2,47],32:[2,47],33:[2,47],34:[2,47],35:[2,47],36:[2,47],37:[2,47],38:[2,47],39:[2,47],40:[2,47],41:[2,47],42:[2,47],43:[2,47],45:[2,47],59:[2,47]},{15:[2,68],28:[2,68],30:[2,68],31:[2,68],32:[2,68],33:[2,68],34:[2,68],35:[2,68],36:[2,68],37:[2,68],38:[2,68],39:[2,68],40:[2,68],41:[2,68],42:[2,68],43:[2,68],45:[2,68],59:[2,68],62:[1,104]},{47:[1,106],48:[1,107],51:105,52:[1,108],53:[1,109]},{21:[2,16],23:[2,16],26:[2,16]},{9:9,10:[1,5],11:6,13:[1,7],21:[2,60],23:[2,60],26:[2,60]},{47:[1,106],48:[1,107],51:110,52:[1,108],53:[1,109]},{15:[2,48],28:[2,48],30:[2,48],31:[2,48],32:[2,48],33:[2,48],34:[2,48],35:[2,48],36:[2,48],37:[2,48],38:[2,48],39:[2,48],40:[2,48],41:[2,48],42:[2,48],43:[2,48],45:[2,48],59:[2,48],62:[2,48]},{15:[2,40],28:[2,40],30:[2,40],31:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40],43:[2,40],45:[2,40],59:[2,40],62:[2,40]},{15:[2,41],28:[2,41],30:[2,41],31:[2,41],32:[2,41],33:[2,41],34:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],42:[2,41],43:[2,41],45:[2,41],59:[2,41],62:[2,41]},{15:[2,42],28:[2,42],30:[2,42],31:[2,42],32:[2,42],33:[2,42],34:[2,42],35:[2,42],36:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],42:[2,42],43:[2,42],45:[2,42],59:[2,42],62:[2,42]},{15:[2,43],28:[2,43],30:[2,43],31:[2,43],32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],42:[2,43],43:[2,43],45:[2,43],59:[2,43],62:[2,43]},{15:[2,49],28:[2,49],30:[2,49],31:[2,49],32:[2,49],33:[2,49],34:[2,49],35:[2,49],36:[2,49],37:[2,49],38:[2,49],39:[2,49],40:[2,49],41:[2,49],42:[2,49],43:[2,49],45:[2,49],59:[2,49],62:[2,49]}],
defaultActions: {3:[2,2],8:[2,1],43:[2,3],45:[2,56],77:[2,17]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
  this.begin("s");
  if (yy_.yytext) {
    // console.log("CONTENT:%s", yy_.yytext);
    return "CONTENT";
  }

break;
case 1:
  // console.log("CONTENT:%s", yy_.yytext);
  return "CONTENT";

break;
case 2:
  yy_.yytext = "elseif";
  this.begin("cmd");
  return "ELSEIF";

break;
case 3:
  // console.log("ELSE");
  yy_.yytext = "else";
  this.popState();
  return "ELSE";

break;
case 4:
  // console.log('OPEN_BLOCK_END');
  this.begin("cmd");
  return "OPEN_BLOCK_END";

break;
case 5:
  // console.log("S|OPEN");
  this.begin("cmd");
  return "OPEN";

break;
case 6:
  this.popState();
  this.popState();
  // console.log("CMD|CLOSE|state:%s", this.topState());
  return "CLOSE";

break;
case 7:
  // console.log("CMD|COMMAND|%s", yy_.yytext);
  return "CMD";

break;
case 8:
  // console.log("CMD|OPERATOR|%s", yy_.yytext);
  return "OPERATOR";

break;
case 9:
  // console.log("CMD|ID|%s", yy_.yytext);
  return "ID";

break;
case 10:
  // console.log("CMD|STRING|%s", yy_.yytext);
  return "STRING";

break;
case 11:
  // console.log("CMD|STRING|%s", yy_.yytext);
  return "STRING";

break;
case 12:
  // console.log("CMD|BOOLEAN:%s", yy_.yytext);
  return "BOOLEAN";

break;
case 13:
  // console.log("CMD|INTEGER:%s", yy_.yytext);
  return "INTEGER";

break;
case 14:
  // console.log("CMD|DATA");
  return "DATA";

break;
case 15:
  // console.log("CMD|SEP");
  return "SEP";

break;
case 16:
  // console.log("CMD|%s", yy_.yytext);
  return yy_.yytext;

break;
case 17:
  // console.log("CMD|EQUAL");
  return "EQUAL";

break;
case 18:
  return "CURSOR";

break;
case 19:
  // console.log("CMD|MODIFIER");
  return "MODIFIER";

break;
case 20:
  return "MODIFIER_PARAM";

break;
case 21:
  return "*";

break;
case 22:
  return "/";

break;
case 23:
  return "-";

break;
case 24:
  return "+";

break;
case 25:
  return "%";

break;
case 26:
  return "^";

break;
case 27:
  return "(";

break;
case 28:
  return ")";

break;
case 29:
  // console.log("CMD|(");
  return "(";

break;
case 30:
  // console.log("CMD|)");
  return ")";

break;
case 31:
  // eat

break;
case 32:
  // eat

break;
case 33:
  return "EOF";

break;
}
},
rules: [/^(?:[^\x00]*?(?=(\{%)))/,/^(?:[^\x00]+)/,/^(?:(\{%)\s*(elseif(?=([%=\s\/.)(:\|]))))/,/^(?:(\{%)\s*(else(?=([%=\s\/.)(:\|])))\s*(%\}))/,/^(?:(\{%)\/)/,/^(?:(\{%))/,/^(?:(%\}))/,/^(?:(if|foreach|function|block|strip(?=([%=\s\/.)(:\|]))))/,/^(?:{OPERATOR})/,/^(?:([_a-zA-Z][_a-zA-Z0-9]*))/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:(false|true(?=([%=\s\/.)(:\|]))))/,/^(?:(-?[0-9]+(?=([%=\s\/.)(:\|]))))/,/^(?:\$)/,/^(?:\.)/,/^(?:&&|===|==|<=|!=|>=|<|>|!)/,/^(?:=)/,/^(?:@)/,/^(?:\|)/,/^(?::)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:\()/,/^(?:\))/,/^(?:\s+)/,/^(?:[\s])/,/^(?:$)/],
conditions: {"s":{"rules":[2,3,4,5,32,33],"inclusive":false},"cmd":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":false},"id":{"rules":[],"inclusive":false},"INITIAL":{"rules":[0,1,33],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();

module.exports=parser;
/* jshint ignore:end */