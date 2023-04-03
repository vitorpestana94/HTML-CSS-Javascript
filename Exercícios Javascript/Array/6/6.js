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
    retorno =  `Boleano ou númerico esperado, mas o parâmetro é do tipo ${typeof valor}`
  }
  return retorno
}

console.log(inverso())
