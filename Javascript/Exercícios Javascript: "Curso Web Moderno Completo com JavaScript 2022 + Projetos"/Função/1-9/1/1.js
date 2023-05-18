function calculadora(){
    let input1 = parseInt(prompt("Digite um número positivo:"));
    let input2 = parseInt(prompt("Digite outro número positivo:"));
  
    return `\n\nSoma: ${input1 + input2}\nSubtração: ${input1-input2}\nDivisão: ${input1 / input2}\nMultiplicação: ${input1 * input2}`;
  }
  console.log(calculadora())