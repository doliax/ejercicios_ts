/*
    Consider an array/list of sheep where some
     sheep may be missing from their place.
     We need a function that counts the number
      of sheep present in the array (true means present).
*/
function countSheeps(arrayOfSheep) {
    if (arrayOfSheep != undefined && arrayOfSheep != null) {
        var counter_sheep_1 = 0;
        arrayOfSheep.forEach(function (x) {
            x ? counter_sheep_1++ : '';
        });
        return counter_sheep_1;
    }
}
console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));
