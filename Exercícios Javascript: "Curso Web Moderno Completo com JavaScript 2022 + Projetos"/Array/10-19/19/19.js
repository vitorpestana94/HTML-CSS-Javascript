function soma_despesas(array){
 return array.reduce(function(x,y){return x+y})/array.length
}

console.log(soma_despesas([1,2,3,4,5])) // retorna 3
