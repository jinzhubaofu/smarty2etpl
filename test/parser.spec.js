var smarty =
  + '  this is a parser test case;'
  + '  {if}'
  + '      {foreach}loop{/foreach}'
  + '  {else}'
  + '      fail'
  + '  {/if}';

var parser = require('../lib/parser');
var ast = require('../lib/ast');
var assert = require("assert");

describe('parser', function(){
  describe('parse', function(){
    it('should return ast.ProgramNode', function() {

      console.log(parser.parse);

      assert.equal(true, parser.parse(smarty) instanceof ast.ProgramNode);
    });
  });
});