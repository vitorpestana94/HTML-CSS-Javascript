function eh_string_igual_(stringA, stringB){
    let stringC=""
    for(let x=0;x < stringA.length;x++){
      for(let x1=0;x1 < stringB.length;x1++){
        if(stringA[x] == stringB[x1]){
            stringC+=stringA[x];
          }
      }
    }
    return stringC == stringA ? true : false;
  }
  
  console.log(eh_string_igual_('abcd', 'dcba'))