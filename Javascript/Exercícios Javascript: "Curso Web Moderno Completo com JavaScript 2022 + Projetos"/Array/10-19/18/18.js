function soma_despesas(array){
 return array.map(x => x.preco).reduce(function(x,y){return x+y})
}
let despesas = [{nome:"jornal online", categoria:"informação", preco: 89.99}, {nome: "cinema", categoria: "entretenimento", preco: 150}]
console.log(soma_despesas(despesas))
