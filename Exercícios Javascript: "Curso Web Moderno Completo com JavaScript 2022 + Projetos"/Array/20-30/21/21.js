function menor(array){
  array.sort(function(x,y){return x<y?-1:1})
  return array[0]
}
console.log(menor([-15, 5, 35, 65]))
