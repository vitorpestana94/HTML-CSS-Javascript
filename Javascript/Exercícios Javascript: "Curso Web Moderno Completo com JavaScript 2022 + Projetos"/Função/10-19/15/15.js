function frutas(string){
    let s = "";
  
    switch(string){
      case "hatch":
        s = "Compra efetuada com sucesso";
        break;
      case "sedan": 
      case "motocicleta":
      case "caminhonete":
        s = "Tem certeza que não prefere este modelo?";
        break;
      default:
        s="Não trabalhamos com este tipo de automóvel aqui"
    return s
    }
  
    return s;
  }
  
  console.log(frutas("sedan"));
  console.log(frutas("motocicleta"));
  console.log(frutas("caminhonete"));
  console.log(frutas("hatch"))
  console.log(frutas("tanque de guerra"))  