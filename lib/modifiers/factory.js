var pool = {};

module.exports = {

    register: function (name, clazz) {
        pool[name] = clazz;
    },

    getInstance: function (name, options) {
        var clazz = pool[name];
        if (!clazz) {
            throw 'cannot find modifier ' + name;
        }
        return new clazz(options);
    }
    
};