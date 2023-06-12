function direitinho(n1){
    return `R$: ${n1.toFixed(1).toString().replace(".", ",")}`;
  }
  console.log(direitinho(0.30000000000000004))