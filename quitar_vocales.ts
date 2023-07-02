

let dato = "Esto es un texto";

function quitarVocales(text: string): string {
    //El propio dato coge el valor de el mismo pero quitando las vocales
    //Las / son para expresiones regulares de JS y TS. [aeiou] es las letras que queremos quitar.
    //La g busca todas las coincidencias, si no estuviera solo buscaria la primera. La i no distingue entre minusculas y mayusculas.
    // El "" es por lo que remplazamos a las vocales.    
   text = text.replace(/[aeiou]/ig, "");                             
   console.log(text);
   return text;
}

console.log(quitarVocales(dato));
//quitarVocales(dato);
