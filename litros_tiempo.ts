

let time : number = 11.8;

//Por cada hora bebe 0.5 litros de agua | Eso significa que hay que divir por 2 el tiempo
function litres(time: number): number {
    //El Math.floor redondea hacia abajo y elimina los decimales
    return Math.floor(time / 2);
  }

  console.log(litres(time));