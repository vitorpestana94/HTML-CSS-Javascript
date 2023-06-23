let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];


function vetor_add(vetorPilha, vetorAdiciona){
    for(let x=0; x < vetorAdiciona.length; x++){
      console.log(vetorAdiciona[x])
      vetorPilha=vetorPilha.concat(vetorAdiciona[x]);
    }
  return `Vetor adicionado: ${vetorAdiciona}\nVetor Resultado: ${vetorPilha}`;
}
console.log(vetor_add(vetorPilha, vetorAdiciona));