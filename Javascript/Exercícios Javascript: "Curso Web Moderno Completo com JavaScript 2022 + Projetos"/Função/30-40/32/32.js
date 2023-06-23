function media(notas, soma_elementos = 0){
    for(let x=0;x < notas.length;x++){
      soma_elementos += notas[x];
    }
    return soma_elementos / notas.length;
  }
  console.log(media([1, 2, 3, 4, 5]))