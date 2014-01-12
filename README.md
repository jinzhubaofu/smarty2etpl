smarty2etpl
===========

translate smarty template to etpl

## Install

for use in command line:

    npm install -g smarty2etpl

or for use in nodejs
    
    npm install smarty2etpl

## Usage

use in a command line:

    smarty2etpl some-template.tpl

use in nodejs api

    var smarty2etpl = require('smarty2etpl');

    var etpl = smarty2etpl.translate('hello, {$name}');

    console.log(etpl);