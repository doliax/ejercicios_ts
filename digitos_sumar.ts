//Todo completar
function digitalRoot(n) {
    n.split("");
    let x = 0;
    for(let i: number = 0; i < n.length; i++){
      x += n[i];
    }
    return x;
  }

  digitalRoot(5);