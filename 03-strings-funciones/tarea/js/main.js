///ejercicio 1
/* 1.-solicitar al usuario su nombe y apellidos 
      regresar en una sola cadena con el siguiente formato
      nombre minusculas  
      apellidos mayusculas
  input nombre ="fernanda"    
  input apellidos ="aguirre ortiz"
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
//funcion con arreglo
/*
function noVowels(nombre){
    let noVow=""
    let cVowel=0
    for (let i = 0; i < nombre.length; i++) {
        // console.log( nombre[i]);
         if(nombre[i] === 'a'|| nombre[i] === 'e' || nombre[i] === 'i' || nombre[i] === 'o' || nombre[i] === 'u') 
           {
            noVow=cVowel+=1;
           }
        }
    return noVow
}
let nameCompleto= prompt("ingresa nombre completo");
let NoVowName= noVowels(nameCompleto)
console.log(  `El nombre ${nameCompleto} tiene :  ${NoVowName} vocales`);
*/
/*Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
 
/* function noWord(texto){
    let noVow=""
    let cVowel=0
    let naT1 = texto.split(" "); 
    for (let i = 0; i < naT1.length; i++) {
       //  console.log( naT1[i]);
         if(naT1[i] === 'estudiante') 
           {
            noVow=cVowel+=1;
           }
        }
    return noVow
}
const regex = /estudiante/ig;
let texto = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
let texto1 = texto.replaceAll(regex,"Koder");
let noWords =noWord(texto);
let print=`La palabra estudiante se repitio ${noWords} veces, ${texto1}` 
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
    if(naS1 > naS2){
        nCom=`la cadena  ${naS1} es mas larga que ${naS2}`        
    }
    else if (naS1 < naS2) {
        nCom=`la cadena  ${naS2} es mas larga que ${naS1}`        
    }
    else if (naS1 === naS2){
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
    if(naS1[0] > naS1[1]){
        nCom=`la palabra mas larga es ${naS1[0]}`        
    }
    else if (naS1[0] < naS1[1]) {
        nCom=`la palabra mas larga es ${naS1[1]}`        
    }
    else if (naS1[0] === naS1[1]){
        nCom=`Ambas palabras son del mismo tamaño ${naS1[0]} = ${naS1[1]}`    
    }
    return nCom
}
let cadena1= prompt("ingresa  cadena de dos palabras");
let wordLarge= stringLarge(cadena1)
console.log( wordLarge ); 
 */