/*4.- Pedir 2 variables por prompt:
- Si a > b dividir a entre b
- Si a < b sumar a más b
- si a == b multiplicar ambos numeros
Imprimir el resultado en consola*/

/*
let a=0;
let b=0;
let res=0;
a= Number(prompt("ingresa numero 1"));
b= Number(prompt("ingresa numero 2"));
if(a > b ){
  res = a/b;
  console.log( `el resultado de la division  ${a}/ ${b} es:  ${res}`);
}
else if(a< b){
  res=a+b;
  console.log( `el resultado de la suma ${a} + ${b} es : ${res}`);
}
else if(a === b)
{
    res=a*b;
    console.log( `el resultado de la multiplicacion ${a}* ${b} es : ${res}`);
}
*/

/*5.-Pedir al usuario por prompt un numero entre 1 y 100
- Verificar si es un par o impar e imprimir en resultado en consola
*/

/*
let a=0;
let res=0;
a= Number(prompt("ingresa numero entre 1 y 100"));
if(a>0 && a<=100){
      res= a%2;
    if(res === 1)
    {
        console.log( `el numero ${a} es un numero impar`); 
    }  
    else{
        console.log( `el numero ${a} es un numero par`); 
    }
}
else 
{
  console.log( `el numero no esta dentro del rango permitido`);
}
*/

/*6.-Pedir al usuario 2 numeros
- Imprimir en consola cual es el menor de los 2
- Imprimir en consola cual es el mayor de los 2
*/

/*
let a=0;
let b=0;
a= Number(prompt("ingresa numero 1"));
b= Number(prompt("ingresa numero 2"));
if(a > b ){
  console.log( `el numero  ${a} es mayor que ${b}`);
}
else if(a < b){
  console.log( `el numero ${a} es menor que ${b}`);
}
else if(a === b)
{
 console.log( `los numeros ingresados ${a} - ${b} son iguales`);
}
*/


/*7. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
- Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
-*/

/*
const G_TIERRA= 9.81;
const G_LUNA= 1.622;
const G_MARTE= 3.711;
const G_JUPITER= 24.79;

let nombre="";
let pesoActual=0;
let pesLuna=0;
let pesMarte=0;
let pesJupiter=0;

nombre= prompt("ingresa tu nombre");
pesoActual= Number(prompt("ingresa tu peso"));
//formula para obtner el peso en otro planeta
// pesoOtroplaneta= pesoTierra / gravedadTierra *gravedadOtroPlaneta
pesLuna= (pesoActual/G_TIERRA) * G_LUNA;
console.log( `El peso de ${nombre} en la luna es ${pesLuna} `);
pesMarte= (pesoActual/G_TIERRA) * G_MARTE;
console.log( `El peso de ${nombre} en Marte es ${pesMarte} `);
pesJupiter= (pesoActual/G_TIERRA )* G_JUPITER;
console.log( `El peso de ${nombre} en Jupiter es ${pesJupiter} `);

*/

/*8.- Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
-Imprimir en consola las equivalencias en letra su calificación, es decir:
🎯 si es mayor o igual a 90, imprimir "A"
🎯 si es mayor o igual a 80 y menor que 90 , imprimir "B"
🎯 si es mayor o igual a 70 y menor que 80 , imprimir "C"
🎯 si es mayor o igual a 60 y menor que 70 , imprimir "D"
🎯 si es mayor o igual a 50 y menor que 60 , imprimir "E"
🎯 si es menor 50 , imprimir "F"*/

let  calificacion=0;
calificacion= Number(prompt("ingresa la calificacion"));
 if(calificacion >=00 && calificacion<= 100 ){
     if(calificacion >=90 && calificacion <=100)
     {
       console.log(`A`);
     } 
     else if(calificacion >=80 && calificacion <90){
        console.log(`B`);
     }
     else if(calificacion >=70 && calificacion <80){
        console.log(`C`);
     }            
     else if(calificacion >=60 && calificacion <70){
        console.log(`D`);
     }        
     else if(calificacion >=50 && calificacion <60){
        console.log(`E`);
     }
     else {
        console.log(`F`);
     }     
   }
   else{
    console.log( `Dato no permitido`);
   }
 
