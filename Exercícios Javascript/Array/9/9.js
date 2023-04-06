function novo_array(elemento, quantidade){
  let new_array=[]
  for(let x=0; x < quantidade; x++){
    new_array.push(elemento)
  }
  return new_array
}
console.log(novo_array("love", 10))
console.log(novo_array(3, 10))
