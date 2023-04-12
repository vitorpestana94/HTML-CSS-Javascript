function Npar_Indexpar(numeros){
  let novo_array=[]
  for(let x=0; x < numeros.length; x++){
    if(numeros[x] % 2 == 0 && x % 2 == 0){
      novo_array.push(numeros[x])
    }
  }
  return novo_array
}
console.log(Npar_Indexpar([10, 70, 22, 43]))
