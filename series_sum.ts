function seriesSum(n: number): string {
    if (n === 0) {
      return "0.00";
    }
  
    let sum = 0;
    for (let i = 0; i < n; i++) {
        //En cada recorrido acumulamos 1/valor
      sum += 1 / (1 + i * 3); 
    }
  
    //Redondeamos y convertimos a string
    return sum.toFixed(2); 
  }
  
 
  console.log(seriesSum(1));
  console.log(seriesSum(2)); 
  console.log(seriesSum(5));
  