function crescimento(altura1, taxa1, altura2, taxa2){
    let menor = altura1 > altura2 ? [altura2, taxa2] : [altura1, taxa1];
    let maior = altura1 > altura2 ? [altura1, taxa1] : [altura2, taxa2];
    let anos=0;
    let calc1 = menor[0];
    let calc2 = maior[0];
    
    while(calc1 < calc2){
      calc1 += menor[1];
      calc2 += maior[1];
      anos++;
    }
    return `A criança de altura ${menor[0]} ultrapassará a de altura ${maior[0]} em ${anos} anos.`;
  }
  
  console.log(crescimento(150, 2, 130, 4))