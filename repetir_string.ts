

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//5, "Hello" -> "HelloHelloHelloHelloHello"
export function repeatStr(n: number, s: string): string {
    let repeat: string = "";
    //Recorremos el bucle las veces especificadas
      for (let index = 0; index < n; index++) {
        //En cada iteración el string añade el valor de s
        repeat+=s;
        
      }
    return repeat;
  }

  console.log(repeatStr(3,'Hola'));

  //Versión Pro
  /*export function repeatStr (n:number, s:string):String {
    return s.repeat(n);
  }*/