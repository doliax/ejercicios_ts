/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
 */


function countDigit(n: number, d: number): number{
    let acum = 0;
    let arr: number[] = []
    //Loop the numbers and each number get square value and get in array
    for(let i: number = 0; i <= n; i++){
        arr.push(i ** 2);
    }
    //Create variable which gets the value of d in String.
    let data = String(d);
    //Separate every element of the array
    const digits = arr.join('').split('');
    //Loop every digit and compare if both value are equals.
    for (let z = 0; z < digits.length; z++){
        digits[z] === data ? acum++ : false;
    }
    return acum;
}

console.log(countDigit(5, 2));