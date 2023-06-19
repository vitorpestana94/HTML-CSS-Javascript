function pares_impares(array){
    let pares=0;
    let impares=0;
  
    for(let x=0; x < array.length; x++){
      array[x] % 2 == 0 ? pares++ : impares++;
    }
    return `${pares} números pares e ${impares} números impares`;
  }
  console.log(pares_impares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))