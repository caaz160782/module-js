///ejercicio 1
/* 1.-solicitar al usuario su nombe y apellidos 
      regresar en una sola cadena con el siguiente formato
      nombre minusculas  
      apellidos mayusculas
  input nombre ="fernanda"    
  input apellidos ="PALACIOS vera"
  output "fernanda PALACIOS VERA"
*/

 /* 
function nomCom(nombre,apellido){
    let nCom=""
    nombre= nombre.toLowerCase()
    apellido=apellido.toUpperCase()
    nCom=`${nombre} ${apellido}`
   return nCom
}
nombre= prompt("ingresa nombre");
apellido= prompt("ingresa apellido");

let con=nomCom(nombre,apellido)
console.log(con);
 */

/*2.- solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre  */
 /*
function nomCom(nombre){
    let nCom=""
    //g es una bandera global que ayuda a remplazar todas las ocurrencias
    let na=nombre.replace(/ /g,"")    
    nCom= na.length 
    return nCom
}
let nameCompleto= prompt("ingresa nombre completo");
let sizeName= nomCom(nameCompleto)
console.log(  `El tamaño del ${nameCompleto} es: ${sizeName}`);
*/
/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
/*
let nameCompleto= prompt("ingresa nombre completo");
var numeroVocales = nameCompleto.match(/[aeiou]/gi).length;
console.log(numeroVocales)
*/

/*Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
/*
const regex = /estudiante/ig;
let texto = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
let texto1 = texto.replaceAll(regex,"Koder");
var numeroPalabras = texto.match(/estudiante/gi).length;
let print=`La palabra estudiante se repitio ${numeroPalabras} veces, ${texto1}` 
console.log(print)
*/

/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/
/*
function stringLarge(string1,string2){
    let nCom=""
    //g es una bandera global que ayuda a remplazar todas las ocurrencias
    let naS1=string1.replace(/ /g,"")
    let naS2=string2.replace(/ /g,"")   
    let larStrng1= naS1.length
    let larStrng2= naS2.length

    if(larStrng1 > larStrng2){
        nCom=`la cadena  ${naS1} es mas larga que ${naS2}`        
    }
    else if (larStrng1 < larStrng2) {
        nCom=`la cadena  ${naS2} es mas larga que ${naS1}`        
    }
    else if (larStrng1 === larStrng2){
        nCom=`Ambas cadenas son del mismo tamaño ${naS1} = ${naS2}`    
    }
    return nCom
}
let cadena1= prompt("ingresa  cadena 1");
let cadena2= prompt("ingresa  cadena 2");
let mayor= stringLarge(cadena1,cadena2)
console.log( mayor );
*/
/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
/*
function stringLarge(string1){       
    let naS1 = string1.split(" ");   
    let larStrng1= naS1[0].length
    let larStrng2= naS1[1].length

    if(larStrng1 > larStrng2){
        nCom=`la palabra mas larga es ${naS1[0]}`        
    }
    else if (larStrng1 < larStrng2) {
        nCom=`la palabra mas larga es ${naS1[1]}`        
    }
    else if (larStrng1 === larStrng2){
        nCom=`Ambas palabras son del mismo tamaño ${naS1[0]} = ${naS1[1]}`    
    }
    return nCom
}
let cadena1= prompt("ingresa  cadena de dos palabras");
let wordLarge= stringLarge(cadena1)
console.log( wordLarge ); 
*/

/*7. Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'

solicitar el texto
almacenar el texto en una variable
solicitar l palabra a buscar
mediante el metodo match buscar la palabra solicitada y contarla
*/
/*
function busquedaPalabra(search,text){    
    let flagsYouWant = 'gi' //simple string with flags
    let dynamicRegExp = new RegExp(search, flagsYouWant)     
    let texto = text ;     
    let numeroPalabras = texto.match(dynamicRegExp).length;    
    let print=`La palabra ${search} se repitio ${numeroPalabras} veces, ${texto}` 
    return print
}
let text= prompt("ingresa texto");
let buscar=prompt("ingresa palabra a buscar");
let print=busquedaPalabra(buscar,text)
console.log(print)
*/

/*
  8 Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

/*
function operations(number1,number2,operation){
    let result
    switch(operacion){                             
        case "suma":
           result =`EL resultado de la operacion "${operacion}" de los numeros es: ${number1 + number2}`;
           break;  
        case "resta":
            result =`EL resultado de la operacion "${operacion}" de los numeros es: ${number1 - number2}`;
            break;  
         case "multiplicacion":
            result =`EL resultado de la operacion "${operacion}" de los numeros es: ${number1 * number2}`;
            break;  
          case "division":
            result =`EL resultado de la operacion "${operacion}" de los numeros es: ${number1/number2}`;
            break;  
         default:
            result =`opcion no valida`;
          break;  
      }
      return result
 } 

 let operacion= prompt("ingresa operacion suma || resta || multiplicacion || division");
 let number1= Number(prompt("ingresa numero1"))
 let number2= Number(prompt("ingresa numero2"))
 console.log(operations(number1,number2,operacion))
*/



