function parametro_mais(numero){
  let return_string=""
  for(let x=0; x < numero;x++){
    return_string = return_string.concat("+")
  }
  return return_string
}
console.log(parametro_mais(10))
