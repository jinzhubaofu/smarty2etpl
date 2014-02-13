module.exports = EscapeModifier;

function EscapeModifier(options) {
    this.options = options || {};
}

EscapeModifier.prototype = {
    constructor: EscapeModifier,
    toSource: function (env) {

        var params = this.options.params;
        var first = params[0];

        env.addSource(
            '|' + first.value.slice(1, -1)
        );

    }
};

require('./factory').register('escape', EscapeModifier);