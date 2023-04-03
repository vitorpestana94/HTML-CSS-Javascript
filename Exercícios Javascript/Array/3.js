/* Crie uma função que receba como parâmetro a quantidade de horas trabalhadas e o quanto ele recebe por hora. 
O retorno desta função deve ser uma string que contenha o quanto aquele funcionário ganhou no mês.

reate a function that receives as parameters how many hours a worker worked in a month and also how much the same worker earn for hour.
The return of this function must be a string that contains how much the worker will earn in a month*/

function salario(horas, soldo){
  return `Salário igual a R$ ${horas*soldo*0.7}`
}
console.log(salario(180, 60))
