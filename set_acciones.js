//Un set es un array que no admite valores repetidos
var dat = new Set([1, 2, 3, 2]); //1,2,3
dat.has(1); //True
dat.has(4); //False
//Añadir un nuevo valor
dat.add(1);
//Borrar un valor
dat.delete(1);
var set_cien = new Set();
for (var i = 0; i < 100; i++) {
    set_cien.add(i);
}
console.log(set_cien);
