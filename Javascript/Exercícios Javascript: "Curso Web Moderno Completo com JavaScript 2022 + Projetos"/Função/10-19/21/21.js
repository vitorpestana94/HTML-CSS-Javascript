function plano_saude(idade){
    let valor = 100;
    
    idade < 10 ? valor += 80 : idade < 30 ? valor+=50 : idade < 60? valor += 95 : valor +=130;
    
    return valor;
  }
  console.log(plano_saude(8))