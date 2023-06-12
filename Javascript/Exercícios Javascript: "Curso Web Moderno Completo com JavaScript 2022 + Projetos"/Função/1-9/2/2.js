function triangulos(ladoA, ladoB, ladoC){
    if (ladoA == ladoB == ladoC){
      Rstring = "Equilátero";
    }
    else if (ladoA == ladoB ||  ladoA == ladoC || ladoC == ladoB){
      Rstring = "Isóceles";
    }
     else{
      Rstring = "Escaleno";
    }
    return console.log(Rstring)
  }
  triangulos(1, 1, 3)