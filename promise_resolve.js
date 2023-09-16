//Utiliza la función new Promise() para crear una promesa que resuelva la función.
/*export function resolv() : Promise<any> {
    let verdad : boolean = true;
    return new Promise((resolve, reject) => {
        if(verdad){
            resolve('Todo correcto');
        } else {
            reject('Un error');
        }
    })
}*/
var prom = new Promise(function (resolve, reject) {
    var verdad = true;
    if (verdad) {
        resolve('Todo correcto');
    }
    else {
        reject('Un error');
    }
});
prom.then(function (valor) { return console.log(valor); }, function (error) { return console.log(console.log(error)); });
