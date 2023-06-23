function troca_vetor(arrayA, arrayB){
    if(arrayA.length == arrayB.length){
      for(let x=0; x < arrayB.length; x++){
         arrayA.push(arrayB[x]);
      }
      for(let x=0; x < arrayB.length/2 + 1; x++){
         arrayB[x]=arrayA[x];
      }
      arrayA.splice(0, arrayA.length/2)
    }
    else{
      return "array de tamanhos diferentes!"
    }
    return `Vetor 1: ${arrayA}\nVetor 2: ${arrayB}`;
  }
  
  console.log(troca_vetor([1, 2, 3],[4, 5, 6]))