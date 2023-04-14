function filtar_digitos(array, digitos, array_retorno=[]){
  for(let x=0;x < array.length; x++){
    if(array[x].toString().length == digitos){
      array_retorno.push(array[x])
    }
  }
  return array_retorno
}
console.log(filtar_digitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtar_digitos([5, 9, 1, 125, 11], 1))
