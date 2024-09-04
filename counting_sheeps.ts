
/*
    Consider an array/list of sheep where some
     sheep may be missing from their place. 
     We need a function that counts the number
      of sheep present in the array (true means present).
*/
function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
   if(arrayOfSheep != undefined &&  arrayOfSheep!= null){
    let counter_sheep = 0;
    arrayOfSheep.forEach(x => {
        x ? counter_sheep++ : '';   
    })
    return counter_sheep;
  }
}

/*
  Pro solution
 return arrayOfSheep.filter(e => e === true).length;
*/

  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));