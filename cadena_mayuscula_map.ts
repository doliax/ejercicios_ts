export function arraMayus(arr_1: string): string[] {
    //El split convierte una cadena a array
    //Con el map recorremos cada elemento del array, en cada elemento cogemos su primer caracter y lo ponemos en mayuscula
    //El slice obtenemos la subcadena 1, en este caso mundo
    return arr_1.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

console.log(arraMayus("hola mundo"));



//VERSIÓN ARRAY
/*
export function arraMayus(arr_1: string[]): string[] {
    return arr_1.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

const inputArray = ["hola", "mundo"];
console.log(arraMayus(inputArray));
*/
