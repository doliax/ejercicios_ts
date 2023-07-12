export function countSheep(num: number): string {
    let str: string[] = [];
    //Recorro hasta llegar al valor de num y en cada iteración meto al array un valor
    for(let i: number = 1; i <= num; i++){
      str.push(`${i} sheep...`);
    }
    //Convierto el array en un string y lo asigno a una variable y la devuelvo
   const res = str.join("");
    return res;
  }

  console.log(countSheep(3));