

//Un map es una estructura de datos que nos permiten almacenar datos en clave valor pero la clave puede ser objetos, funciones,etc | Map con tipos genericos
let data = new Map<string, number>();

//Set añade un nuevo elemento al map
data.set('Julian', 20);
data.set('Roberto', 30);
//Get devuelve el valor (20) de una clave (Julian)
console.log(data.get('Julian'));

//Has comprueba si hay una clave en el map
console.log(data.has('Julian'));

//Size devuelve el número de entradas
console.log(data.size);

//Delete borra una clave y valor pasandole la clave. Si encuentra y la borra devuelve true, si no false
//data.delete('Roberto');

//Clear borra todas las entradas del map
//data.clear();


//TYPESCRIPT 5

//Creamos una variable que convertira a array un objeto iterable (nuestro map)
const array = Array.from(data);

//Luego hacemos un for of de la variable
for (const entry of array) {
    //Imprimimos la entry[0] (clave) y entry[1] (valor) 
  console.log(entry[0], entry[1]);
}

//TYPESCRIPT 5.0.4 (En el playground de typescript con esta versión esto si que me lo hace, aqui no | Debe ser algo del js)

for (const [key, value] of data) {
    console.log(key, value);
  }