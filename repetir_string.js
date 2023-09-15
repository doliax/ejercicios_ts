"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatStr = void 0;
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//5, "Hello" -> "HelloHelloHelloHelloHello"
function repeatStr(n, s) {
    var repeat = "";
    for (var index = 0; index < n; index++) {
        repeat += s;
    }
    return repeat;
}
exports.repeatStr = repeatStr;
console.log(repeatStr(3, 'Hola'));
