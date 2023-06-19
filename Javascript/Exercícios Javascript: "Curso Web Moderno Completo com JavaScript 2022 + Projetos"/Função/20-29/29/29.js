function intervalo(array){
    let count=0;
    for(let x=0; x < array.length; x++){
      if(array[x] >= 10 &&array[x] <= 20) {
        count++
      }
    }
    return `${count}`;
  }
  console.log(intervalo([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]))