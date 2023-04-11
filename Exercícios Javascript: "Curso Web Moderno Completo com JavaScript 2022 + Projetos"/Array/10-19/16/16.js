function bissexto(ano){
  return ano % 100 == 0 ? false : ano % 100 == 0 && ano % 400 == 0 ? true : ano % 4 == 0 ? true : false 
}
console.log(bissexto(2027))
console.log(bissexto(2020))
console.log(bissexto(2024))
console.log(bissexto(2100))
