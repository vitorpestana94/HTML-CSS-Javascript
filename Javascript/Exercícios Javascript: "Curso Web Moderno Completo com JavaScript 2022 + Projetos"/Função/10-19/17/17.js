function operacao(salario, plano){
    let s = 0;
    let s2 = "Plano inválido"
    switch(plano){
      case "A":
        s = salario*1.1;
        break;
      case "B":
        s = salario*1.15;
        break;
      case "C":
        s= salario*1.2;
        break;
      default:
        s = s2;
    }
    return s;
  }