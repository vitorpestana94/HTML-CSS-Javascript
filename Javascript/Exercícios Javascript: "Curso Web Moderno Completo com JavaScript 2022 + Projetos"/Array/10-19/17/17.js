function soma(numeros){
  let soma=0
 for(let x=0; x < numeros.length; x++){
   soma+=numeros[x]
 }
  return soma
}
console.log(soma([10, 10, 10]))
console.log(soma([15, 15, 15, 15]))
