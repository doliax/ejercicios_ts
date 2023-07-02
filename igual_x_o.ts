


//Esta función cuenta si el string tiene el mismo número de x y o


function xo(str: string) : boolean {

    let counter_x : number = 0;
    let counter_o : number = 0;

    for(let i : number = 0; i < str.length; i++) {
        if(str[i] == "X" || str[i] == "x" ){
            counter_x++;
        } else if(str[i] == "O" || str[i] == "o"){
            counter_o++;
        }
    }

    //Si el numero de x es igual al numero de o devuelve true, si no false
    return  counter_x === counter_o;
  }

  console.log(xo("XXO"));