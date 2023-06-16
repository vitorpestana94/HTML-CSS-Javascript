function notas(valor){
    let nota = [0, 0, 0, 0, 0];
    let s_return = ``;
    while(valor != 0){   
      if (valor >= 100){
        nota[0]++;
        valor -=100;
      }
      else if(valor >= 50){
        nota[1]++;
        valor -=50;
      }
      else if(valor >= 10){
        nota[2]++;
        valor -=10;
      }
      else if(valor >= 5){
        nota[3]++;
        valor -=5;
      }
      else if(valor >= 1){
        nota[4]++;
        valor -=1;
      }
    }
    for(let x=0;x <= nota.length;x++){
      if(nota[0] > 0){
        s_return += ` ${nota[0]} nota(s) de 100.`;
        nota[0] = 0;
      }
      else if(nota[1] > 0){
        s_return += ` ${nota[1]} nota(s) de 50.`;
        nota[1] = 0;
      }
      else if(nota[2] > 0){
        s_return += ` ${nota[2]} nota(s) de 10.`;
        nota[2] = 0;
      }
      else if(nota[3] > 0){
        s_return +=` ${nota[3]} nota(s) de 5.`;
        nota[3] = 0;
      }
      else if(nota[4] > 0){
        s_return += ` ${nota[4]} nota(s) de 1.`;
        nota[4] = 0;
      }
    }
    return s_return;
  }
  console.log(notas(18));