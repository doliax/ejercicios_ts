"use strict";
//Crea una función que realice una tarea que puede tardar un tiempo en completarse.
Object.defineProperty(exports, "__esModule", { value: true });
exports.doTask = void 0;
function doTask(x) {
    //Hacemos un timeout que a los 3 segundos hará un console.log del valor que hemos pasado por parametro
    setTimeout(function () {
        console.log("He tardado 3 segundos en ".concat(x));
    }, 3000);
}
exports.doTask = doTask;
doTask('ir a comprar');
