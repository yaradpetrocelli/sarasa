function mostrar() {
 let tipo;
 let origen;
 let precio;
 let seguir;
 let acumM = 0;
 let acumR = 0;
 let acumP = 0;
 let contaM = 0;
 let contaR = 0;
 let contaP = 0;

 do{
  tipo = prompt("ingrese el tipo del juguete muñeca/rompecabeza/pelota").toLowerCase();
  while (tipo != "muñeca" && tipo != "rompecabeza" && tipo != "pelota"){
    tipo = prompt("ERROR ingrese tipo valido del juguete muñeca/rompecabeza/pelota").toLowerCase();
  }
  origen = prompt ("ingrese origen nacional / importado").toLowerCase();
  while (tipo != "nacional" && tipo != "importado"){
    origen = prompt ("ERROR ingrese origen valido nacional / importado")/toLowerCase();
  }
  precio =  parseInt(prompt("ingrese precio"));
  while (precio < 1000 && precio > 5000){
    precio =  parseInt(prompt("ERROR ingrese precio valido"));
  }
  switch (tipo){
    case "muñeca":
      contaM++
      acumM = acumM + contaM 
      break;
    case "rompecabeza":
      contaR++
      break;
    case "pelota":
    contaP++
    break;
  }
  
 seguir = prompt ("desea registrar otro juguete?")
 }while(seguir == 's')
}
