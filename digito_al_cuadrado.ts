


//Coger cada digito indivudialmente y elevarlo al cuadrado, luego juntar todos
export class Kata {
    static squareDigits(num: number): number {
       //Creamos una variable que separa los valores, los eleva al cuadrado y los vuelve a juntar
       let numb = num.toString().split('').map(x => Number(x) ** 2).join('');
       console.log(numb);
       return Number(numb);    
    }
    
  }
  
  const result = Kata.squareDigits(9119);


  //Versión pro

  //+num convierte los strings a number
  /*
    export class Kata {
  static squareDigits(num: number) {
    return +num.toString()
               .split('')
               .map(n => Math.pow(+n,2))
               .join('');
  }
}
  
  */
