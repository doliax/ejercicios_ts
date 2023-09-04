"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringTransformer = void 0;
function stringTransformer(str) {
    var newString = '';
    //Recorremos todas las letras de str
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        //Si la letra esta en mayuscula la almacenamos en newString como minuscula
        if (i === i.toUpperCase()) {
            newString += i.toLowerCase();
            //Si la letra esta en minuscula la almacenamos en newString como mayuscula
        }
        else if (i === i.toLowerCase()) {
            newString += i.toUpperCase();
            //Si no es una letra lo dejamos
        }
        else {
            newString += i;
        }
    }
    return newString;
}
exports.stringTransformer = stringTransformer;
console.log(stringTransformer("Esto es una Prueba"));
