function P_A(n, a1, r){
    for(let x=0;x<n;x++){
      console.log(a1 + x*r)
    }
    return console.log(`Soma da PA: ${n*(2*a1+((n-1)*r))/2}`)
  }
  
  function P_G(n, a1, q){
    for(let x=0;x<n;x++){
      console.log(a1*(q**x));
    }
    return console.log(`Soma da PG: ${a1*(1-q**(n))/(1-q)}`)
  }
  P_A(10, 10, 15)
  console.log('----------------');
  P_G(10, 5, 3)