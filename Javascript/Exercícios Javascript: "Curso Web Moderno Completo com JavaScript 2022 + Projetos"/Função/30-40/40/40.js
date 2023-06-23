function conceito(notas){
    let conceitos = []
    for(let x=0;x < notas.length;x++){
      notas[x] < 5 ? conceitos[x] = "D" : 5 <= notas[x] && notas[x] < 7 ? conceitos[x] = "C"  : 7 <= notas[x] && notas[x] < 9 ? conceitos[x] = "B" : 9 <= notas[x] && notas[x] <=10 ? conceitos[x] = "A" : conceitos[x] = "Nota inválida";
    }
    return conceitos;
  }
  
  console.log(conceito([10, 13, 9, 8.2, 2.5, 7.7, 6.8]))