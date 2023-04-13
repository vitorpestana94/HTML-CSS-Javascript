function semelhantes(termo, array, return_array=[]){
  for(let x=0; x < array.length;x++){
    let string = array[x].toString()
    for(let y=0; y < string.length; y++){
      if(string.slice(y, termo.length) == termo){
        return_array.push(string)
      }
    }
  }
  return return_array
}
console.log(semelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(semelhantes("python", ["javascript", "java", "c++"]))
