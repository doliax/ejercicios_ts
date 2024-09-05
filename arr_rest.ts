/*
Complete the function that takes two integers (a, b, where a < b)
and return an array of all integers between the input parameters, including them.
*/

export function between(a: number, b: number): number[] {
    //Create one array which we put both values
    let arr : number[] = [];
    let counter = a;
    
        //While the valie of counter is less or equal of b
        //push every iteration in the array and add one value
        do {
            arr.push(counter);
            counter++;
          }  while(counter <= b)

    return arr;
  }

  console.log(between(-2, 2));


  /*
  Mejor opción

  export function between(a: number, b: number): number[] {
  const arr = [];
  for(let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
   */