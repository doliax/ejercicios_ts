




//Crear una función genérica que tome una colección de elementos y devuelva una nueva colección con los elementos duplicados eliminados.

function deleteDupl(value: number[]) : string {
    let found = false;
    let n: number = 0;
    //Creo el array para los valores que se repitan
    let second_array : number[]= [];
    //For anidado para comprobar si los valores se repiten
    for (let i = 0; i < value.length; i++) {
      for (let j = i + 1; j < value.length; j++) {
        //Si son iguales añado el valor a una variable y la meto en el array
        if (value[i] === value[j]) {
          n = value[i];
          second_array.push(n);
          found = true;
        }
      }
    }
    //Texto con los valores repetidos
    let a = `Los valores ${second_array} se repite más de una vez en el array.`;
    return a;
  }
  
  const array = [1, 2, 3, 1, 3];
  
  console.log(deleteDupl(array));