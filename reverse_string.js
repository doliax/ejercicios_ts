var texto = "Hola mundo!";
//Versión profesional
function reverseString(str) {
    //Split convierte cada elememto de un string en un substring y lo devuelve como un array.
    //Reverse da la vuelta al array y comienza por el ultimo elemento.
    //Join convierte un array en un string.
    return str.split("").reverse().join("");
}
//console.log(reverseString(texto));
//Versión junior :,)
function reverseString2(str) {
    //Cremaos una variable que tiene el array.
    var str_split = str.split("");
    //Variable que cogera el array invertido
    var data = "";
    //La variable auxiliar i coge la longitud del array empezando por el final ( - 1 ), e ira decrementando hasta 0.
    for (var i = str_split.length - 1; i >= 0; i--) {
        //En cada iteracion ek strubg acumula el valor (!odnum aloH)
        data += str_split[i];
    }
    //Devolvemos el texto invertido
    return data;
}
console.log(reverseString2(texto));
