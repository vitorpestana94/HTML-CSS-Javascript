function notas_aluno(codigo, nota1, nota2, nota3){
    let notas = [nota1, nota2, nota3].sort();
    let media = (notas[0]*3+notas[1]*3+notas[2]*4) / 10;
   
    return `Código do aluno: ${codigo}\nNotas: ${notas[0]}, ${notas[1]}, ${notas[2]}\nMédia das notas: ${media}\nStatus: ${media >= 5 ? 'aprovado' : 'reprovado'}`;
  }
  console.log(notas_aluno(123, 2.8, 6, 3.5));