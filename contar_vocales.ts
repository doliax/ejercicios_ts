

    let text: string = "Hola";

    function getCount(str: string): number {
     let count : number = 0;
      for(let i = 0; i < str.length; i++) {
        //Por cada iteración comprobamos si cada letra de la palabra corresponde con una vocal, si es así incrementamos.
       if(str[i] == "a" || str[i] == "e" ||  str[i] =="i" || str[i] == "o" || str[i] == 'u'){
            count++;
       }
      }
      return count;
    }

    console.log(getCount(text));