"use strict";
//Escribe una función que reciba un arreglo de números y devuelva un nuevo arreglo con los números pares.
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraMayus = void 0;
function arraMayus(arr_1) {
    var arr_data = [];
    arr_1.map(function (x) { return x % 2 == 0 ? arr_data.push(x) : ""; });
    return arr_data;
}
exports.arraMayus = arraMayus;
console.log(arraMayus([1, 2, 3, 4, 5, 6, 7, 8, 9]));
