

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

let prom = new Promise((resolve, reject) => {
    let verdad : boolean = true;
    if(verdad){
        resolve('Todo correcto');
    } else {
        reject('Un error');
    }}
    );


prom.then(valor => console.log(valor)).catch(error =>console.log(console.log(error)));    