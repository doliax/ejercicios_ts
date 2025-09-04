function filter_list(l: Array<any>): Array<number> {
  // Filtramos y devolvemos solo los números
  return l.filter(x => typeof x === "number");
}

console.log(filter_list([1, 2, 'a', 'b'])); // [1, 2]
