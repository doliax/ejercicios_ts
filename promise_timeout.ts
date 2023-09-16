

//Crea una función que realice una tarea que puede tardar un tiempo en completarse.

export function doTask(x: string){
    //Hacemos un timeout que a los 3 segundos hará un console.log del valor que hemos pasado por parametro
    setTimeout(() => {
        console.log(`He tardado 3 segundos en ${x}`)
    }, 3000)
}

doTask('ir a comprar');