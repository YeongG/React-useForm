"use strict";
exports.__esModule = true;
exports.useForm = exports.useInput = void 0;
var react_1 = require("react");
exports.useInput = function (initialValue) {
    var _a = react_1.useState(initialValue || ""), inputValue = _a[0], setInputValue = _a[1];
    var changeInputValue = react_1.useCallback(function (e) {
        setInputValue(e.target.value);
    }, []);
    return [inputValue, setInputValue, changeInputValue];
};
var isEmpty = function (stats) {
    var boolean = stats.reduce(function (value, state) { return value || !!state === false; }, false);
    return boolean;
};
exports.useForm = function (stats, option) {
    var submitFunc = react_1.useCallback(function (e) {
        var require = option.require, requireFunc = option.requireFunc, submitFunc = option.submitFunc, preventDefault = option.preventDefault;
        if (preventDefault)
            e.preventDefault();
        if (require && isEmpty(stats)) {
            requireFunc();
            return;
        }
        submitFunc();
    }, stats);
    return submitFunc;
};
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// useForm
