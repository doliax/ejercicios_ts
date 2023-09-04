export function stringTransformer(str: string) {
    let newString = '';
    //Recorremos todas las letras de str
    for (const i of str) {
        //Si la letra esta en mayuscula la almacenamos en newString como minuscula
        if (i === i.toUpperCase()) {
            newString += i.toLowerCase();
            //Si la letra esta en minuscula la almacenamos en newString como mayuscula
        } else if (i === i.toLowerCase()) {
            newString += i.toUpperCase();
            //Si no es una letra lo dejamos
        } else {
            newString += i; 
        }
    }
    return newString; 
}

console.log(stringTransformer("Esto es una Prueba"));
