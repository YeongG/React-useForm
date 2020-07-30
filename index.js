"use strict";
exports.__esModule = true;
exports.useForm = exports.useInput = void 0;
var react_1 = require("react");
var isAllowed = function (array) {
    var boolean = array.reduce((function (state, stats) { return state || (!!stats === false); }), false);
    return boolean;
};
exports.useInput = function (initialvalue) {
    var _a = react_1.useState(initialvalue), input = _a[0], setInput = _a[1];
    var changeInput = react_1.useCallback(function (e) {
        setInput(e.target.value);
    }, []);
    return [input, setInput, changeInput];
};
exports.useForm = function (stateArray, option) {
    var onSubmit = react_1.useCallback(function (e) {
        var preventDefault = option.preventDefault, successFunc = option.successFunc, require = option.require, requireFunc = option.requireFunc;
        if (preventDefault)
            e.preventDefault();
        if (require && isAllowed(stateArray)) {
            requireFunc();
            return;
        }
        successFunc.call(null, stateArray);
    }, stateArray);
    return onSubmit;
};
