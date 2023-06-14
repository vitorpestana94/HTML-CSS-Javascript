function bhaskara(ax2, bx, c){
    delta = (bx**2) - (4*ax2*c)
    x1 = (-bx + Math.sqrt(delta)) / (2*ax2);
    x2 = (-bx - Math.sqrt(delta)) / (2*ax2);
  
    if (delta < 0){
      return "O delta é negativo"
    }
    else{
      return [x1, x2]
    }
  }
  
  console.log(bhaskara(2, -7, 3))