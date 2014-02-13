var path = require('path');
var file = path.resolve(__dirname, './test2.smarty');
var smarty = require('fs').readFileSync(file, {
    encoding: 'utf-8'
});
var s2e = require('../lib/index.js');
var etpl = s2e.compile(smarty);

console.log("result:\n%s", etpl);