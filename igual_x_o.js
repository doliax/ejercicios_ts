//Esta función cuenta si el string tiene el mismo número de x y o
function xo(str) {
    var counter_x = 0;
    var counter_o = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "X" || str[i] == "x") {
            counter_x++;
        }
        else if (str[i] == "O" || str[i] == "o") {
            counter_o++;
        }
    }
    return counter_x === counter_o;
}
console.log(xo("XXO"));
