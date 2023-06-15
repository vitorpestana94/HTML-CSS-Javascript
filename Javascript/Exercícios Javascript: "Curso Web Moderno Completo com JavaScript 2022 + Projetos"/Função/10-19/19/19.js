function cardápio(codigo, q){
    let s = 0;
    
    switch(numero){
      case 100:
        s = q*3;
        break;
      case 200:
        s = q*4;
        break;
      case 300:
        s= q*5.5;
        break;
      case 400:
        s = q*7.5;
        break;
      case 500:
        s = q*3.5;
        break;
      case 600:
        s= q*2.8;
        break;
      default:
        s = "Produto não existe";
    }
    return s;
  }  