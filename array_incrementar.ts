



//Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

export function pyramid(n: number) {
    if (n < 0) {
        return [];
      }
    
      //Creo el array bidimensional
      const result: number[][] = [];
      //Recorro la primera fila y creo el subarray
      for (let i = 1; i <= n; i++) {
        const subarray: number[] = [];
        //Recorro la segunda, si el indice de la segunda es menor al de la primera hara algo
        for (let j = 1; j <= i; j++) {
            //La segunda fila pone los demas datos
          subarray.push(j);
        }
        //Añado el sub al principal
        result.push(subarray);
      }
    
      console.log(result);
  }

  pyramid(5);