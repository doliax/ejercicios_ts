"use strict";
/*export function arraMayus(arr_1: string): string[] {
    //El split convierte una cadena a array
    //Con el map recorremos cada elemento del array, en cada elemento cogemos su primer caracter y lo ponemos en mayuscula
    //El slice obtenemos la subcadena 1, en este caso mundo
    return arr_1.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

console.log(arraMayus("hola mundo"));
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraMayus = void 0;
function arraMayus(arr_1) {
    return arr_1.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); });
}
exports.arraMayus = arraMayus;
var inputArray = ["hola", "mundo"];
console.log(arraMayus(inputArray));
