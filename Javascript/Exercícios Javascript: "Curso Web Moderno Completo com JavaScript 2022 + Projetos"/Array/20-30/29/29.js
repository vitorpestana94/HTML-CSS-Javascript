function segundo_maior(array){
  array.sort(function(x,y){return x<y?0:-1})
  return array[1]
}
console.log(segundo_maior([12, 16, 1, 5]))
console.log(segundo_maior([8, 4, 5, 6]))
