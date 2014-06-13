var jison = require('jison');
var ebnfParser = require('ebnf-parser');
var lexParser = require('lex-parser');
var fs = require('fs');
var file = fs.readFileSync('./src/smarty.y', 'utf8');
var lexFile = fs.readFileSync('./src/smarty.l', 'utf8');
var grammar = ebnfParser.parse(file);
grammar.lex = lexParser.parse(lexFile);
var generator = new jison.Generator(grammar, {});
var parser = generator.createParser();
var string = parser.generate();

var fn = new Function(string);

console.log(fn);