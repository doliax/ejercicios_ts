function digitalRoot(n) {
    n.split("");
    var x = 0;
    for (var i = 0; i < n.length; i++) {
        x += n[i];
    }
    return x;
}
digitalRoot(5);
