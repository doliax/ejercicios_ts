

/*
    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    Return your answer as a number.
 */

function sumMix(x: any[]): number {
    //Recorre el array y lo convierte en number
    let z: number[] = x.map(Number);
    let acum = 0;
    z.forEach(t =>{
        acum+= t;
    })
  return acum;
}

console.log(sumMix([1,"2",3,"4"]));