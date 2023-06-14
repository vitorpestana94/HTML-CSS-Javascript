function simples(capital_inicial, taxa, tempo_aplicacao){
    return (capital_inicial * (taxa/100) * tempo_aplicacao) + capital_inicial
  }
  
  function composto(capital_inicial, taxa, tempo_aplicacao){
    M = capital_inicial*((1  + (taxa/100))**tempo_aplicacao)
    return M 
  }
  
  console.log(simples(620, 1.5, 24))
  console.log(composto(620, 1.5, 24))