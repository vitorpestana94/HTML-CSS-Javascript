function vetorzao(array){
    let y = 0;
    for(let x=0; x < array.length; x++){
      array[x] < 0 ? y++ : y=y;
    }
    return y;
  }