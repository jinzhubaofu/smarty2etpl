var test = 'asfasdf$aA123.b.c.a.c($a)';
var reg = /\$([a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*)/ig;

var result = test.replace(reg, function (id) {
    return '${' + id.slice(1) + '}';
});

console.log(result);