function melhor_aluno_nota(objeto, notas= Object.values(objeto), media=[], alunos= Object.keys(objeto), maior_nota = 0 , novo_objeto={}){
  
  for(let x=0; x < notas.length; x++){
    media.push(notas[x].reduce(function(x, y){return x+y})/notas[x].length)
  }

  for(let x=1; x < media.length;x++){
    if(media[x] > media[x-1]){
      maior_nota = x
    }
  }
  
  novo_objeto.nome = alunos[maior_nota]
  novo_objeto.nota = media[maior_nota]
  
  return novo_objeto
}

let teste={
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9]
}
console.log(melhor_aluno_nota(teste))
