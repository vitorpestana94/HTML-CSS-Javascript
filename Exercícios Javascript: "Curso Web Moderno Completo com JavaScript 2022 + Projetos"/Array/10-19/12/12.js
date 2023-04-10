function remover_prop(objeto, eliminar){
  delete objeto[eliminar]
  return objeto
}
let teste = {a:1, b:2}
console.log(remover_prop(teste, "a"))
console.log(Object.is(remover_prop(teste, "a"), teste))
