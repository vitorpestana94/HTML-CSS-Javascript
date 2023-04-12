function so_numeros(array){
  let novo_array=[]
  for(let x=0; x < array.length;x++){
    if(typeof array[x] == 'number'){
      novo_array.push(array[x])
    }
  }
  return novo_array
}
console.log(so_numeros(["JavaScript", 1, "3", "web", 20]))
console.log(so_numeros("a", "c"))
