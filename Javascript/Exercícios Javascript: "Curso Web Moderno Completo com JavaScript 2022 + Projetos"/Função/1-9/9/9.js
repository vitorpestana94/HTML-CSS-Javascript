function reprovado_aprovado(nota){
    let sTring = ""
    let nova_nota = x_arredonda(nota)
    if(nova_nota<38){
      sTring = `O aluno foi reprovado com a nota ${nova_nota}`
    }
    else{
      sTring = `O aluno foi aprovado com a nota ${nova_nota}`
    }
    return sTring
  }
  
  function x_arredonda(nota){
    let multiplo = nota;
    
    while(multiplo % 5 != 0){
      multiplo++;
    }
  
    if(multiplo - nota < 3){
      nota = multiplo
    }
    return nota
  }  