export function arraysort(arr_1: number[], arr_2 : number[]) : number[] {
    //Juntar dos arrays y ordenar sus valores de mayor a menor

    let juntar : number[] = [];

    arr_1.forEach(i => {
        juntar.push(i);
    },
        arr_2.forEach(j => {
            juntar.push(j)
        })
    );

    //El sort por defecto es de menor a mayor
    juntar.sort();

    //Esto es de mayor a menor 
    //juntar.sort((a, b) => b - a);

    return juntar;

    //Versión pro
    /*let arr_1: number[] = [6, 8, 7, 9];
    let arr_2: number[] = [4, 2, 3, 1];

    // Juntar los dos arreglos
    let juntar: number[] = arr_1.concat(arr_2);

    // Ordenar de mayor a menor
    juntar.sort((a, b) => b - a);

    console.log(juntar);


    console.log(juntar.sort());*/

}

console.log(arraysort([6,8,7,9], [4,2,3,1]));


/*
    Sin sort


    export function arraysort(arr_1: number[], arr_2: number[]): number[] {
  // Juntar dos arrays
  let juntar: number[] = [...arr_1, ...arr_2];

  // Ordenar de mayor a menor usando el algoritmo de ordenamiento de burbuja
  for (let i = 0; i < juntar.length - 1; i++) {
    for (let j = 0; j < juntar.length - i - 1; j++) {
      if (juntar[j] < juntar[j + 1]) {
        // Intercambiar los elementos si están en el orden incorrecto
        const temp = juntar[j];
        juntar[j] = juntar[j + 1];
        juntar[j + 1] = temp;
      }
    }
  }

  return juntar;
}
*/ 