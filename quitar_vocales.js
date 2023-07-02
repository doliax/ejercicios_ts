var dato = "Esto es un texto";
function quitarVocales(text) {
    text = text.replace(/[aeiou]/ig, "");
    console.log(text);
    return text;
}
console.log(quitarVocales(dato));
//quitarVocales(dato);
