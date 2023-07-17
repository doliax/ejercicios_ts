"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positiveSum = void 0;
function positiveSum(arr) {
    var i = 0;
    arr.forEach(function (x) {
        if (x > 0) {
            i += x;
        }
    });
    return i;
}
exports.positiveSum = positiveSum;
var arr_test = [1, -2, 3, 4, 5];
console.log(positiveSum(arr_test));
