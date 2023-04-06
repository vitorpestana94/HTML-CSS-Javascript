function inverso(valor){
  var retorno
  if(typeof valor == 'number'){
    retorno =  valor*-1
  }
  else if(valor == true){
    retorno = false
  }
  else if (valor == false){
    retorno =  true
  }
  else{
    retorno =  `Booleano ou númerico esperado, mas o parâmetro é do tipo ${typeof valor}.`
    //retorno =  `Boolean or numeric expected, but the given paramater it's ${typeof valor} type.`
  }
  return retorno
}

console.log(inverso())
