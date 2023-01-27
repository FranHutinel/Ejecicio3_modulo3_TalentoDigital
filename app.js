window.alert("A continuación debe ingresar 3 notas por alumno para calcular el promedio final del curso. Las ponderaciones para la nota 1, nota 2 y nota 3 serán 25%, 35% y 40%");

var cantidad=parseFloat(prompt("ingrese cantidad de alumnos"));

notasCurso=0
for(let i = 0; i < cantidad; i++) {
    document.write()

var contadorAlumno=i+1
var nota1=parseFloat(prompt("Para alumno"+ contadorAlumno +", ingrese nota1:"));
var nota2=parseFloat(prompt("Para alumno"+ contadorAlumno +", ingrese nota2:"));
var nota3=parseFloat(prompt("Para alumno"+ contadorAlumno +", ingrese nota3:"));

PromedioAlumno=nota1*0.25+nota2*0.35+nota3*0.4;
notasCurso+=PromedioAlumno;
}

PromedioCurso=notasCurso/cantidad;

document.write("El promedio del curso es de "+ PromedioCurso);