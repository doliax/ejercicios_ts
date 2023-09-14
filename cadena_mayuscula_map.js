"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraMayus = void 0;
function arraMayus(arr_1) {
    //El split convierte una cadena a array
    //Con el map recorremos cada elemento del array, en cada elemento cogemos su primer caracter y lo ponemos en mayuscula
    //El slice obtenemos la subcadena 1, en este caso mundo
    return arr_1.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); });
}
exports.arraMayus = arraMayus;
console.log(arraMayus("hola mundo"));
//VERSIÓN ARRAY
/*
export function arraMayus(arr_1: string[]): string[] {
    return arr_1.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

const inputArray = ["hola", "mundo"];
console.log(arraMayus(inputArray));
*/
