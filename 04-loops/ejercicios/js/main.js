/*
Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false

se puede crear un arreglo de palabras y verificar que estas existan en este y al momento de buscarlas nos regres true
o false
*/

/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/
/*
function multiplicacion(number)
 {
   if( number >0 && number<=10 ){   
    console.log(`La tabla de multiplicar de ${number}`)      
    let multi=""  
    for(let i=1;  i<=10; i++){
         multi += `${number} * ${i} = ${number * i} \n`    
        }
        return multi
    }
    else{
      return "El numero esta fuera del rango permitido"  
    }    
 }

 let number= Number(prompt("ingresa un numero entre 1 y 10")) 
 console.log(multiplicacion(number) )
*/

/*
Ejercicio 3:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

/*
function numPar(number){
  let par=""
  if(number >0 && number <=100 ) {    
       for(let i=1;  i<=number; i++){
          if(i % 2 === 0){
            par += `${i} \n`           
           }           
       }  return par       
   }else{
    return "El numero esta fuera del rango permitido"  
    }  
}
let number= Number(prompt("ingresa un numero entre 10 y 100"));
console.log(numPar(number));
*/

/*
Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/
/*
function suma(numero){
let suma=0;
for(let i=0;  i< numero.length; i++){       
    suma += parseInt(numero[i])       
     // console.log(suma)  
  }
  return `la suma de los digitos del numero ${numero} es = ${suma}`  
}
  let numero= prompt("ingresa un numero ");
  console.log(suma(numero))
*/

/*
Ejercicio 5:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/
/*

for(let i=0;  i<10; i++)
{
  let patron=""   
  for(let x=0 ; x <= i; x++){
  patron += ` * `  
  }           
  console.log(patron)    
 }
*/

function arbol(numeroFilas){
  let patron 
  for(let i=1;  i<=numeroFilas; i++)
  {
   patron="" 
   for(let x=0 ; x < i; x++){
    patron += ` * `
    //console.log(x)       //console.log(patron)    
    }           
     console.log(patron)       //console.log(patron)    
   } 
}
let numeroFilas= prompt("ingresa un numero de filas")
arbol(numeroFilas)
/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
verificar el resultado
*/

/*
let suma=0;
 for(let i=1;  i<=1000; i++){
       if(i % 3 === 0 || i % 5 === 0){
        suma += i
        //console.log(i)
    } 
  }
  console.log(`sumas ${suma}`)
*/

/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas

input: hello Koders
output: helloKoders
*/
/*
function alternateText(word){
    let  nuevaCadena= "";
    let wordNspace = word.split(" ")
    for (let i= 0; i < wordNspace.length ; i++) {        
       if(i % 2 === 0)
        {
         nuevaCadena += wordNspace[i].charAt(0).toLowerCase() +wordNspace[i].slice(1)
        }
        else{
            nuevaCadena += wordNspace[i].charAt(0).toUpperCase() +wordNspace[i].slice(1)          
        }       
       }
    return nuevaCadena ;
  }
let word= prompt("ingresa una frase");
let wordChange= alternateText(word)
console.log(  `${word} : ${wordChange}`);
*/

/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/

/*
let arrayNumero =[];
let index=1
let lastFive=[]
while (index <= 10 )
{
  let numero= prompt(`ingresa el numero ${index}` );
  arrayNumero.push(numero)  
  //console.log(index)
    index++
}
lastFive = arrayNumero.slice(-5)
let sumaLastFive=0
for(let i=0; i< lastFive.length;i++ ){
   //console.log(lastFive[i])    
   sumaLastFive += Number(lastFive[i])
}
//console.log(arrayNumero)
//console.log(lastFive)
console.log(`la suma de ${lastFive} es= ${sumaLastFive}`)
*/ 

/*
function sumaLast5(){
 let arrayNumero =[];
 let index=1
 let lastFive=[]
   while (index <= 10 )
   {
    let numero= prompt(`ingresa el numero ${index}` );
    arrayNumero.push(numero)  
  //console.log(index)
     index++
   }
   lastFive = arrayNumero.slice(-5)
   let sumaLastFive=0
   for(let i=0; i< lastFive.length;i++ ){
     //console.log(lastFive[i])    
     sumaLastFive += Number(lastFive[i])
    } 
//console.log(arrayNumero)
//console.log(lastFive)
//console.log(`la suma de ${lastFive} es= ${sumaLastFive}`) 
  return `la suma de ${lastFive} es= ${sumaLastFive}`
}

console.log(sumaLast5());
*/