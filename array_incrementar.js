"use strict";
//Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
Object.defineProperty(exports, "__esModule", { value: true });
exports.pyramid = void 0;
function pyramid(n) {
    if (n < 0) {
        return [];
    }
    //Creo el array bidimensional
    var result = [];
    //Recorro la primera fila y creo el subarray
    for (var i = 1; i <= n; i++) {
        var subarray = [];
        //Recorro la segunda, si el indice de la segunda es menor al de la primera hara algo
        for (var j = 1; j <= i; j++) {
            //La segunda fila pone los demas datos
            subarray.push(j);
        }
        //Añado el sub al principal
        result.push(subarray);
    }
    console.log(result);
}
exports.pyramid = pyramid;
pyramid(5);
