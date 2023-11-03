/*
La distancia de Hamming es una métrica para comparar dos cadenas de datos binarios. 

Al comparar dos cadenas binarias de igual longitud, la distancia de Hamming es el número de posiciones de bits en las que los dos bits son diferentes.

La distancia de Hamming entre dos cuerdas, a y b, se denota como d(a,b).
*/

function hammingDistance(a: string, b: string): number {
    //Declaramos e inicializamos la distancia
    let distance: number = 0
    //Recorremos la primera cadena
    for (let i = 0; i < a.length; i++) {
        //Si alguno de los bits de la primera cadena son diferentes de los de la segunda acumulamos distancia
      if (a[i] !== b[i]) {
        distance += 1
      }
    }
  
    return distance
  }
  
  const a = '101101'
  const b = '111010'
  
  //Le pasamos los dos bits
  let distance = hammingDistance(a, b)
  
  console.log(distance) //4
  