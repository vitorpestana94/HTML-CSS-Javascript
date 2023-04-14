function retorna_sem_vogal(string){
  return string.replace(/[aeiou]/gi, "")
}
console.log(retorna_sem_vogal("Fundamentos"))
