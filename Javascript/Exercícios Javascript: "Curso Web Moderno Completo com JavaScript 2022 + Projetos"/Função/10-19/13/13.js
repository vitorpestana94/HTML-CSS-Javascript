function que_dia_eh(dia){
    let s = "";
    let s1 = "dia útil";
    let s2 = "final de semana";
    let s3 = "dia inválido";
    switch(dia){
      case 1:
      case 7:
        s = s2
        break;
      case 2: 
      case 3: 
      case 4: 
      case 5: 
      case 6:
        s = s1;
        break;
      default:
        s = s3
    }
  
    return s;
  }