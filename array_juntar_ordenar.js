"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraysort = void 0;
function arraysort(arr_1, arr_2) {
    //Juntar dos arrays y ordenar sus valores de mayor a menor
    var juntar = [];
    arr_1.forEach(function (i) {
        juntar.push(i);
    }, arr_2.forEach(function (j) {
        juntar.push(j);
    }));
    juntar.sort();
    return juntar;
    //Versión pro
    /*let arr_1: number[] = [6, 8, 7, 9];
    let arr_2: number[] = [4, 2, 3, 1];

    // Juntar los dos arreglos
    let juntar: number[] = arr_1.concat(arr_2);

    // Ordenar de mayor a menor
    juntar.sort((a, b) => b - a);

    console.log(juntar);


    console.log(juntar.sort());*/
}
exports.arraysort = arraysort;
console.log(arraysort([6, 8, 7, 9], [4, 2, 3, 1]));
