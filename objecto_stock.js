//Crea un objeto que represente un producto en un inventario con propiedades como nombre, precio, cantidad en stock y descripción. 
//Luego, crea una función que tome una lista de productos y devuelva los productos que están agotados (cantidad en stock igual a cero)
var array_inventario = [{
        nombre: 'Camisa',
        precio: 10,
        stock: 4,
        descripcion: 'Una camisa'
    },
    {
        nombre: 'Zapatos',
        precio: 5,
        stock: 0,
        descripcion: 'Unos zapatos'
    },
    {
        nombre: 'Reloj',
        precio: 15,
        stock: 0,
        descripcion: 'Un reloj'
    }
];
function getStock(conj) {
    conj.forEach(function (i) {
        i.stock == 0 ? console.log("Los productos sin stock son ".concat(i.nombre)) : '';
    });
}
getStock(array_inventario);
