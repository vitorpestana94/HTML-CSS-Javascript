function inverter(objeto, valores = Object.values(objeto), chaves = Object.keys(objeto), outro_objeto={}){
  for(x=0; x < valores.length; x++){
   Object.defineProperty(outro_objeto, valores[x],{
     value: chaves[x],
     enumerable: true
   })
  }
  return outro_objeto
}
console.log(inverter({a:1, b:2, c:3}))
