
//En este ejercicio vamos a duplicar x2 cada elemento de un array.

let arrayTest : number[] = [1,2,3];


//MI SOLUCIÓN
function maps(x: number[]): number[]{
    let arr_2: number[] = [];
    //La función map rellena de nuevo el array con los datos que le pasemos, en este caso un x2 de cada elemento anterior
     arr_2 = x.map(z => z * 2);
    return arr_2;

    //Esto simplemente me los añadia
   /* x.forEach((z => {
      x.push (z * 2);
    }))
    return x;
  }*/
}

//Versión Profesional
function mapsPro(x: number[]): number[]{
return x.map(value => value * 2);
}

  console.log(maps(arrayTest));