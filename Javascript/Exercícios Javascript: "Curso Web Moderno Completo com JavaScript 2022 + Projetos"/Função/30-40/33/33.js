function concatenar_tudo(...args){
    let retorno = [];
    for(let x=0;x < arguments.length;x++){
      retorno = retorno.concat(arguments[x])
    }
    return retorno;
  }
  let vetorInteiro = [1, 2, 3, 4]
  let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
  let vetorDouble = [1.1, 2.2, 3.3, 4.4]
  console.log(concatenar_tudo(vetorInteiro, vetorDouble))
  console.log(concatenar_tudo(vetorDouble, vetorString))
  