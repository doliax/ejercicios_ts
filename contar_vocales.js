var text = "Hola";
function getCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == 'u') {
            count++;
        }
    }
    return count;
}
console.log(getCount(text));
