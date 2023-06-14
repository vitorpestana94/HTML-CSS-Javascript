let s = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function pontuacao(s){
  let pontuacaos = s.split(", ");
  let recorde = 0;
  let piorjogo = 1;
  let maiorpontuacao = pontuacaos[0];
  let menorpontuacao = pontuacaos[0];
  
  for(let x=1;x<=pontuacaos.length;x++){
    if(pontuacaos[x]>maiorpontuacao){
      maiorpontuacao = pontuacaos[x];
      recorde++;
    } else if(pontuacaos[x] < menorpontuacao){
      menorpontuacao = pontuacaos[x]
      piorjogo = x + 1;
    }
  }
  return [recorde, piorjogo]
}
console.log(pontuacao(s))
