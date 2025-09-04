
function twoSum(nums: number[], target: number): [number, number] | [] {
  for (let i = 0; i < nums.length; i++) {
        //Recorremos el siguiente valor 
    for (let j = i + 1; j < nums.length; j++) {
        //Si la suma de los dos valores recorridos dan el resultado 
      if (nums[i] + nums[j] === target) {
        //Devolvemos la posicion correcta
        return [i, j];
      }
    }
  }
  return [];
}


console.log(twoSum([5, 2, 3], 7)); 