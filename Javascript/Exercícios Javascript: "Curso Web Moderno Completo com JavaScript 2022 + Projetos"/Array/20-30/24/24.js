function letra_frase(letra, string, contador=0){
  for(let x=0; x < string.length;x++){
    if(string[x]==letra)
      contador++
  }
  return contador
}
console.log(letra_frase("r", "A sorte favorece os audazes"))
console.log(letra_frase("c", "Conhece-te a ti mesmo"))
