"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
//Coger cada digito indivudialmente y elevarlo al cuadrado, luego juntar todos
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        var numb = num.toString().split('').map(function (x) { return Math.pow(Number(x), 2); }).join('');
        console.log(numb);
        return Number(numb);
    };
    return Kata;
}());
exports.Kata = Kata;
var result = Kata.squareDigits(9119);
