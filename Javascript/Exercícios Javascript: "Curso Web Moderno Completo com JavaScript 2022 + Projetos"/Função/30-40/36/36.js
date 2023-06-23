
function func_soma(array, numero){
    let outro_vetor = []
    for(let x=0; x < array.length; x++){
      outro_vetor = outro_vetor.concat(array[x]*numero)
    }
    return outro_vetor
  }
  
  function func_soma_se(array, numero){
    let outro_vetor = []
    for(let x=0; x < array.length; x++){
      if(numero < 5){
       outro_vetor = outro_vetor.concat(array[x]*numero) 
      }
    }
    return outro_vetor
  }
  
  console.log(func_soma([1, 2, 3, 4, 5], 3))
  console.log(func_soma([1, 2, 3, 4, 5], 11))