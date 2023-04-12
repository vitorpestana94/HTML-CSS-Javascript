function sorteio(numero, sorteado = Math.floor(Math.random() * 10) + 1){
  return numero < 1 || numero > 10 ? "Escolhas um número entre 1 e 10." : numero == sorteado ? `Parabéns! O número sorteado foi ${numero}.` : `Que pena! o número sorteado foi ${sorteado}.`
}
console.log(sorteio(1))
