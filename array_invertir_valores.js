"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invert = void 0;
function invert(array) {
    var arr_2 = [];
    array.forEach(function (x) {
        //Si el valor es positivo se convierte a negativo y viceversa
        var data = -x;
        arr_2.push(data);
    });
    return arr_2;
}
exports.invert = invert;
console.log(invert([-1, 2, -3, 4]));
