/* Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad */


function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir;
  //punto a
  let promEdadReptiles;
  let acumR = 0;
  let contaR = 0;
  //punto b
  let tipoMasJoven;
  let edadMasJoven;
  let contaMamifero = 0;
  let acumM = 0;
  let sexoMasJoven;
  let flagMJ;
  //punto c
  let porcentajeAve = 0;
  let contaAve = 0;
  let acumA = 0;
  let contaMascotas = 0;
  //punto d
  let masCantidad;
  
  

  do{
    nombre = prompt("ingrese el nombre").toLowerCase();
    while (nombre.length < 3 || nombre.length > 8){
      nombre = prompt("ERROR ingrese nombre valido").toLowerCase();
    }

    tipo =  prompt("ingrese el tipo mamifero/ave/reptil").toLowerCase();
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil"){
      tipo =  prompt("ERROR ingrese el tipo disponible mamifero/ave/reptil").toLowerCase();
    }
    if (tipo == "reptil"){
      sangre = prompt ("ingrese tipo de sangre fria/calida").toLowerCase();
      while (tipo == "reptil" && sangre != "fria"){
        sangre = prompt ("ERROR ingrese tipo de sangre valido para reptil").toLowerCase();
      }
    }else{
      sangre = prompt ("ingrese tipo de sangre fria/calida").toLowerCase();
     while(sangre != "fria" && sangre != "calida"){
      sangre = prompt ("ERROR ingrese tipo de sangre valido fria/calida").toLowerCase();}
     }
    
    edad = parseInt(prompt("ingrese edad"));
    while (isNaN(edad) || edad < 0){
      edad = parseInt(prompt("ERROR ingrese edad valida"));
    }

    sexo = prompt("ingrese sexo f/m").toLowerCase();
    while (sexo != 'f' && sexo != 'm'){
      sexo = prompt("ERROR ingrese sexo valido f/m").toLowerCase();
    }
    //punto a
    switch (tipo){
      case "mamifero":
        contaMamifero++;
        acumM = acumM + edad;
        break;
      case "ave":
        contaAve++;
        acumA = acumA + contaAve;
        break;
      case "reptil":
        contaR++;
        acumR = acumR + edad;
        break;
    }
    if(tipo){
    if (flagMJ || edad < edadMasJoven){
       tipoMasJoven = tipo;
       sexoMasJoven = sexo;
       flagMJ = 0;
    }}
    
  contaMascotas++
  seguir = prompt ("Desea registrar otra mascota?")
  }while(seguir == 's');

  if (contaAve != 0){
    porcentajeAve = acumA * 100 / contaAve;
  }

  if (contaR != 0){
    promEdadReptiles = acumR / contaR;
  }

  if (acumA > acumM && acumA > acumR){
    masCantidad = "Ave";}
  else if (acumR > acumA && acumR > acumM){
    masCantidad = "Reptil"
  }
  else {
    masCantidad = "mamifero"
  }

 

  document.write ("el promedio de edad de los reptiles es " + promEdadReptiles + "<br>");
  document.write ("el tipo de mascota mas joven es " + tipoMasJoven + "y, el sexo mas joven es" + sexoMasJoven + "<br>");
  document.write ("el porcentaje de aves es " + porcentajeAve + "<br>");
  document.write ("La mayor cantidad de mascotas es " + masCantidad + "<br>")
}


