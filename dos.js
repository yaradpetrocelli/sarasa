function mostrar() {
/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

let nombre;
let carrera;
let sexo;
let cantidadMaterias;
let notaPromedio;
let promedioMejorA = 0;
let acumMejorA = 0;
let edadAlumnaMasJoven;
let flagAlum = 1;
let nombreAlumnaMasJoven;
let porcentajeQuimica;
let contaQuimica = 0;
let acumQ = 0;
let porcentajeFisica = 0;
let contaFisica = 0;
let acumF = 0
let porcentajeSistemas = 0;
let contaSistema = 0;
let acumS = 0
let flagAlum2 = 1;
let acumAlumF = 0;;
let contaAlumF = 0;
let  edadAlumnoMasMaterias;
let nombreAlumnaMasMaterias;


for (let i = 0; i < 1; i++){
  nombre = prompt("ingrese el nombre").toLowerCase();
  while (nombre = ""){
    nombre = prompt("ERROR ingrese nombre valido").toLowerCase();
  }
  carrera =  prompt("ingrese la carrera quimica/fisica/sistemas").toLowerCase();
  while (carrera != "quimica" && carrera != "fisica" && carrera != "sistema"){
    carrera =  prompt("ERROR ingrese carrera disponible quimica/fisica/sistema").toLowerCase();
  }
  sexo = prompt("ingrese sexo f/m/no binario").toLowerCase();
    while (sexo != 'f' && sexo != 'm' && sexo != "no binario"){
      sexo = prompt("ERROR ingrese sexo valido f/m/ no binario").toLowerCase();
    }
  cantidadMaterias = parseInt(prompt("ingrese cantidad de materias"));
  while (cantidadMaterias < 1 && cantidadMaterias > 5){
    cantidadMaterias = parseInt(prompt("ERROR ingrese numero de cantidad de materias valido"));
  }

  notaPromedio = parseInt(prompt("ingrese su promedio de notas"));
  while (notaPromedio < 0 && notaPromedio > 10){
    notaPromedio = parseInt(prompt("ERROR ingrese su promedio de notas"));
  }

  edad = parseInt(prompt("ingrese edad"));
  while (isNaN(edad) || edad < 0){
    edad = parseInt(prompt("ERROR ingrese edad valida"));
  }

  switch (carrera){
    case "fisica":
      contaFisica++
      acumMejorA = acumMejorA + notaPromedio;
      contaAlumF++
      acumAlumF = acumAlumF + contaAlumF;
      break;
    case "quimica":
      contaQuimica++
      acumQ = acumQ + contaQuimica;
      break;
    case "sistema":
      contaSistema++
      acumS = acumS + contaSistema
      break;

  }
  if (sexo=='f'){
    if (flagAlum ||edad < edadAlumnaMasJoven){
      edadAlumnaMasJoven = edad
      nombreAlumnaMasJoven = nombre
      flagAlum = 0
    }
  }
  if (cantidadMaterias){
    if (flagAlum2 ||cantidadMaterias > AlumnoMasMateria){
      edadAlumnoMasMaterias = edad
      nombreAlumnaMasMaterias = nombre
      flagAlum2 = 0
    }}


}


if (contaFisica != 0){
  promedioMejorA = acumF / contaFisica;}
  if (contaAlumF != 0){
  porcentajeFisica =  acumAlumF* 100 / contaAlumF;}
  if (contaQuimica != 0){
    porcentajeQuimica =  acumQ * 100 / contaQuimica;}
    if (contaSistema != 0){
      porcentajeSistemas =  acumS * 100 / contaSistema;}

  document.write ("el mejor promedio de los que estudian fisica es " + promedioMejorA + "<br>");
  document.write ("el nombre de la alumna mas joven es " + nombreAlumnaMasJoven + "y su edad es " + edadAlumnaMasJoven + "<br>");
  document.write ("porcentaje de estudiantes que estudian fisica " + porcentajeFisica + 
  "porcentaje de estudiantes que estudian quimica " + porcentajeQuimica + 
  "porcentaje de estudiantes que estudian sistemas " + porcentajeSistemas + "<br")
  document.write ("El nombre del alumno que cursa mas materias es " + nombreAlumnaMasJoven + "y la edad del alumno con mas materias es " + 
  edadAlumnoMasMaterias + "<br>")


}
