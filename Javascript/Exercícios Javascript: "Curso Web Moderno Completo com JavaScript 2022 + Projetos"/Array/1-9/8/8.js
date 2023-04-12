function mult(n1,n2, n3=0){
  for(let x=1; x <= n1; x++){
    n3+=n2
  }
  return n3
}
console.log(mult(3,3))
