export function invert(array: number[]): number[] {
   
    let arr_2: number[] = [];
 
    array.forEach(x => {
      //Si el valor es positivo se convierte a negativo y viceversa | Esto cambia el signo de numeración
     const data = -x;
      arr_2.push(data);
    })

    return arr_2;
  }

  console.log(invert([-1,2,-3,4]));



  //Versión Profesional

  //export const invert = (array: number[]) => array.map(n => -n);