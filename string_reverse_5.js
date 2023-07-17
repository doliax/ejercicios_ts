//A partir de un string si alguna de las palabras contiene más de 5 letras estas se volveran al reves.
//TODO Revisar codigo
function spinWords(str) {
    //return str.length >= 5 ? str.split("").reverse().join("") : str.split("").join("");
    return str.split(' ').map(function (v) { return v.length > 4 ? v.split('').reverse().join('') : v; }).join(' ');
}
console.log(spinWords("Holas ram"));
