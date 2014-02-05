module.exports = EtplCompiler;

function EtplCompiler() {

}

EtplCompiler.prototype = {
    constructor: EtplCompiler,
    /**
     * 生成etpl
     * 
     * @param {Compiler} env 已生成opcode的Compiler实例
     * @param {Object} options 编译选项
     * @return {string} etpl模板
     */
    compile: function (env, options) {
        return '';
    }
};