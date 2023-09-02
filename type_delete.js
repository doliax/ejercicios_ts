//Crear una función genérica que tome una colección de elementos y devuelva una nueva colección con los elementos duplicados eliminados.
function deleteDupl(value) {
    var found = false;
    var n = 0;
    var x = 0;
    var second_array = [];
    for (var i = 0; i < value.length; i++) {
        for (var j = i + 1; j < value.length; j++) {
            if (value[i] === value[j]) {
                n = value[i];
                second_array.push(n);
                found = true;
            }
        }
    }
    var a = "Los valores ".concat(second_array, " se repite m\u00E1s de una vez en el array.");
    return a;
}
var array = [1, 2, 3, 1, 3];
console.log(deleteDupl(array));
