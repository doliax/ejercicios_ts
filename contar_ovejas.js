"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheep = void 0;
function countSheep(num) {
    var str = [];
    //Recorro hasta llegar al valor de num y en cada iteración meto al array un valor
    for (var i = 1; i <= num; i++) {
        str.push("".concat(i, " sheep..."));
    }
    //Convierto el array en un string y lo asigno a una variable y la devuelvo
    var res = str.join("");
    return res;
}
exports.countSheep = countSheep;
console.log(countSheep(3));
