"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleChar = void 0;
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
    var repeatedString = '';
    for (var i = 0; i < str.length; i++) {
        repeatedString += str.charAt(i) + str.charAt(i);
    }
    return repeatedString;
}
exports.doubleChar = doubleChar;
var originalString = "Hello, World!";
var repeatedString = doubleChar(originalString);
console.log(repeatedString);
