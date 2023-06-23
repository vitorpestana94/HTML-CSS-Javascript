function impar(inicio=0, fim=100, inicial=0, final=0){
    if(inicio>fim){
      final=inicio;
      inicial = fim;
    }
    for(let x=inicial; x <= final; x++){
      if(x % 2 != 0){
        console.log(x)
      }
    }
  }
  console.log(impar(19, 3))