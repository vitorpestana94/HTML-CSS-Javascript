function repetir(elemento, vezes=0){
  let return_array=[]
  for(let x=0; x < vezes;x++){
    return_array.push(elemento)
  }
  return return_array
}
console.log(repetir(7, 3))
