function arrays(objeto){
  let valores = Object.values(objeto)
  let chaves = Object.keys(objeto)
  let novo_array=[]
  let array_retorno=[]
  for(let x=0;x < chaves.length;x++){
    novo_array.push(chaves[x], valores[x])
    array_retorno.push(novo_array)
    novo_array=[]
  }
  return array_retorno
}
let teste={nome:"maria", profissao: "Desenvolvedora de software"}
let teste2={codigo:111111, preco: 12000}
console.log(arrays(teste))
console.log(arrays(teste2))
