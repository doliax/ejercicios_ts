"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrOrdenar = void 0;
//Dado un array de cadenas, crear un nuevo array con las cadenas convertidas a mayúsculas.
function arrOrdenar(arr_1) {
    return arr_1.sort();
}
exports.arrOrdenar = arrOrdenar;
console.log(arrOrdenar(["Carlos", "Ed", "Antonio"]));
