function numero(numero){
    let s = "";
    
    switch(numero){
      case 1:
        s = "um";
        break;
      case 2:
        s = "dois";
        break;
      case 3:
        s= "três";
        break;
      case 4:
        s = "quatro";
        break;
      case 5:
        s = "cinco";
        break;
      case 6:
        s= "seis";
        break;
      case 7:
        s = "sete";
        break;
      case 8:
        s = "oito";
        break;
      case 9:
        s =  "nove";
        break;
      case 10:
        s = "dez";
        break;
      default:
        s = "Número inválido";
    }
    return s;
  }