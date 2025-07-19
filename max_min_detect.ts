/*
In this little assignment
 you are given a string of space separated numbers, 
 and have to return the highest and lowest number.
*/

    function highAndLow(numbers: string): string {
      let max = -Infinity
      let min = Infinity;
      //Separe the numbers
     let arr = numbers.split(' ');
     //Iterate every number
       arr.forEach(x => {
        //Convert string numbers in type number
        let num = +x;
        //Every iteration compare if the next number is high than the previous one
        //and take the maxium value
          num > max ? max = num : '';
          num < min ? min = num : '';
       });
       //Convert the number into string again
      let max_string = max.toString();
      let min_string = min.toString();
     return `${max_string}, ${min_string}`;
    }

    console.log(highAndLow('1 5 7 9 8'))
  
