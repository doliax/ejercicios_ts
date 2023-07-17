
//A partir de un string si alguna de las palabras contiene más de 5 letras estas se volveran al reves.


function spinWords(str: string): string{
  //return str.length >= 5 ? str.split("").reverse().join("") : str.split("").join("");
  
  //Mapeamos el str ahora como array, si el valor de un elemento es mayor que 4 lo giramos y añadimos como string, si es menor lo dejamos, cuando acaba el mapeo lo añadimos con un join.
  return str.split(' ').map( v => { return v.length > 4 ?  v.split('').reverse().join('') : v; }).join(' ');  

}


  console.log(spinWords("Holas ram"));