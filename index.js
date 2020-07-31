"use strict";
exports.__esModule = true;
exports.useInput = void 0;
var react_1 = require("react");
exports.useInput = function (initialValue) {
    var _a = react_1.useState(initialValue || ""), inputValue = _a[0], setInputValue = _a[1];
    var changeInputValue = react_1.useCallback(function (e) {
        setInputValue(e.target.value);
    }, []);
    return [inputValue, setInputValue, changeInputValue];
};
