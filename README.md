smarty2etpl
===========

translate smarty template to [etpl](https://github.com/ecomfe/etpl)

## Install

for use in command line:

  npm install -g smarty2etpl

or for use in nodejs
    
  npm install smarty2etpl

## Usage

### use in a command line:

    smarty2etpl some-template.tpl

### use in nodejs api

    var smarty2etpl = require('smarty2etpl');

    var etpl = smarty2etpl.compile('hello, {%$name%}');

    console.log(etpl);

### config smarty2etpl

modifier src/config.json to set `ldelim` or `ldelim`. Save `config.json` and run command in your terminal:

	npm install
	grunt build

This requires grunt-cli and you can get it by:

	sudo npm install -g grunt-cli

Default ldelim and rdelim are `{%` and `%}`

## Notice

current version `only support` these commands, modifiers or php functions:

+ Commands
  - foreach
  - if
  - block
  - extends
  - function
  - assign
  - strip
+ Modifiers
  - escape
+ php functions
  - count
  - empty: use this php function will make your page rely on jQuery.isEmptyObject
  - isset

these features are `not supported`:

+ if parameter value is a string, the '' or "" cannot be bypassed:

	this is ok:

	  {%funciton name='menu'%} ... {%/function%}
	  {%$data|escape:'html'%}

	this will cause pasre error:

	  {%funciton name=menu%} ... {%/function%}
	  {%$data|escape:html%}

+ foreach

	only support smarty2 syntax 
		
		foreach from=$data item=$item key=$key"
		
	`@index` `@first` `@last` etc. this feature cannot go with etpl for now;
	
	There maybe is a trick way, and we may support this in future;
		
+ all kinds short-hand. Only key=value parameters supported

	this is ok:

	  {%function name='menu' level=0%} ... {%/block%} 

	these will cause parse error:

	  {%block menu%} ... {%/block%}

+ function chainable such as:

      {%json_encode($data)|escape:'javascipt'%}
 
## TODO

pull requests are totally welcome
 
+ make `ldemin` and `rdemin` can be set through nodejs api
+ support these commands:
	- include
	- while
	- for
+ strengthen these commands:
	- foreach


