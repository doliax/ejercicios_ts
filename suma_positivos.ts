export function positiveSum(arr:number[]):number {
    //Creamos variable auxiliar
    let i : number = 0;
    //Recorremos el array, en cada iteración comprobamos que el valor sea positivos
    //Si es asi acumulamos el valor
    arr.forEach(x =>{
        if(x > 0){
            i += x;
        }
    });
    return i;
  }

  let arr_test = [1,-2,3,4,5];

  console.log(positiveSum(arr_test));