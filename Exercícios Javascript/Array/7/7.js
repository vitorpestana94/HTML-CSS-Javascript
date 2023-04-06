function comparar(minimo, maximo, numero, inclusivo=false){
  if(inclusivo){
    return numero >= minimo && numero <= maximo
  }
  return minimo > numero && numero < maximo ? true : false 
}
console.log(comparar(3, 150, 3, true))
