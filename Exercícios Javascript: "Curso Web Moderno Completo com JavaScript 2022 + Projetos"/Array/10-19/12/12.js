function remover_prop(objeto, eliminar){
  let novo_objeto = objeto
  delete novo_objeto[eliminar]
  return novo_objeto  
}
let teste = {a:1, b:2}
console.log(remover_prop(teste, "a"))
console.log(Object.is(remover_prop({a:1, b:2}, "a"), teste))
