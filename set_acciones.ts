



//Un set es un array que no admite valores repetidos
let dat = new Set([1,2,3,2]); //1,2,3

dat.has(1); //True
dat.has(4); //False

//Añadir un nuevo valor
dat.add(1);
//Borrar un valor
dat.delete(1);


let set_cien = new Set();

for(let i = 1; i < 100; i++){
    set_cien.add(i);
}

//Versión pro
//Compresión de conjunto que añade 100 elementos al set
//const set_cien = new Set([...Array(100).keys()]);

console.log(set_cien);