function vetorzao(array){
    let vetorzin = array.sort(function(a, b){return a -b});
    return `${vetorzin.slice(-1)} ${vetorzin[0]}`;
  }
  console.log(vetorzao([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]));