function fusion_array(arr1: number[], arr2: number[]) : number[]{

    (arr1.length === 0 || arr2.length === 0) ? 'Los arrays estan vacio' : '';
  
    let conc: number[] = [];
  

  /* Si los arrays tienen diferentes tamaño, los recorremos individualmente
      for(let i :number = 0; i < arr1.length; i++){
      conc.push(arr1[i]);
    }

    for(let i :number = 0; i < arr2.length; i++){
      conc.push(arr2[i]);
    } */

    /*Modo Pro
    1. Primero metemos en el conc los valores de los dos arrays | Esta manera solo funciona si ambos array tienen el mismo tamaño */
    for(let i: number = 0; i < arr1.length; i++){
      conc.push(arr1[i], arr2[i]);
   }
  
   /*2. Segundo ordenar manualmente el array mediante el algoritmo de ordenación por burbuja */
    
                          //En este for con el -1 recorremos hasta el final
   for(let i = 0; i < conc.length - 1; i++){
          //En for recorro el array con el valor a la derecha de i
      for(let j = i + 1; j < conc.length; j++){
        //Si el valor de la izquierda es mayor que el de la derecha
        if(conc[i] > conc[j]){
          //Intercambio el valor de izquierda y derecha intercambian valores
          let temp = conc[i];
          conc[i] = conc[j];
          conc[j] = temp;
        }
      }
    }
    
  
  
    /* Modo sencillo
    let conc = arr1.concat(arr2);
    conc.sort();*/
    
    
   
    return conc;
   }
   
  
   console.log(fusion_array([2,4,3,1], [8,7,9,6]));