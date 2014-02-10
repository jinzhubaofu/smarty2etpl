var pool = {};

function Command(options) {
    this.options = options || {};
}

Command.prototype = {
    constructor: Command,
    reg: /\$([a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*)/ig,

    toSource: function () {
        throw 'command must implement this method';
    }

};

Command.register = function (name, clazz) {
    pool[name] = clazz;
};

Command.get = function (name, options) {
    var clazz = pool[name];
    if (!clazz) {
        throw 'command ' + name + ' cannot found';
    }
    return new clazz(options);
};

module.exports = Command;