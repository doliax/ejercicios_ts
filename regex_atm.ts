
//Función que devuelve true si los dígitos tienen una longitud de 4 o 6 caracteres


function validatePin(pin: string): boolean {
    //La expresión regular debe coincidir con un string que tenga solo de dígitos y con una longitud de 4 o 6 caracteres
    // \d es para que sean digitos el {4} y el {6} es para que tengan es longitud y el | es que puede ser uno de los dos (o 4 o 6)
    const expression = /^(\d{4}|\d{6})$/;
    //Con el metodo test lo probamos y devolvera true si coinciden y false si no coinciden
    return expression.test(pin);
  }
  
  console.log(validatePin('123456'));