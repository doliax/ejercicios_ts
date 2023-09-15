
//Escribe una función que reciba un arreglo de números y devuelva un nuevo arreglo con los números pares.

export function arraPar(arr_1: number[]): number[] {
    let arr_data: number[] = [];
    arr_1.map(x => x % 2 == 0 ? arr_data.push(x) : "");
    return arr_data;
}

console.log(arraPar([1,2,3,4,5,6,7,8,9]))


/* Versión Pro

export function arraPar(arr_1: number[]): number[] {
   return arr_1.filter((x) => x % 2 == 0);
}

*/