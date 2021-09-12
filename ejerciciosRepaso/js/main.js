//Para todos los ejercicios generarlas con funciones donde puedan identificar si recibira o no parametros:

/*Dado un string de palabras, devolver la palabra más larga.*/
/*
const stringLarge =(string) =>{
    let separeteString = string.split(" ");  
    let long=0
    let wordLarge=""
        for(let i=0; i<separeteString.length; i++){
        if( long < separeteString[i].length)
         {
            long =separeteString[i].length
             wordLarge= `la palabra mas larga es ${separeteString[i]}`           
         }
      }
     return `de las palabras ${separeteString} - ${wordLarge}`
}
let cadena= prompt("ingresa  cadena ");
let wordLarge= stringLarge(cadena)
console.log( wordLarge );
*/

/*Crear un programa que permita detectar si una frase finaliza con punto.*/

/*
const endPoint =(string) =>{        
    return res =string.endsWith('.')? `si termina en punto`: "no termina en punto"
}
let cadena= prompt("ingresa  cadena ");
let word= endPoint(cadena)
console.log( word );
*/

/*Crear un programa que permita al usuario retornar el numero de coincideas de una palabra en una frase que el mismo usuario introduzca*/

/*
const  busquedaPalabra =(search,text) =>{
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

/*Crear un programa que permita al usuario extraer uns subcadena de una cadena dada.*/
/*
const comparaString = (texto, c)=>{
    let index= texto.indexOf(c)
    return index != -1 ? texto.substring(index): null;
}
let text = prompt("ingresa texto");
let indice = prompt("ingresa indice");
let print = comparaString(text,indice)
console.log(print)
*/

/*Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.*/
/*
const comparaString = (word1, word2)=>{
    return res=(word1.toLowerCase() === word2.toLowerCase())? "son iguales":"No son iguales"
}
let word1 = prompt("ingresa palabra");
let word2 = prompt("ingresa palabra ");
let print = comparaString(word1,word2)
console.log(print)
*/

/*Crear un programa que permita a una cadena de texto muestra el caracter '-' entre cada caracter de la cadena.*/

//const elements = ['Fire', 'Air', 'Water','land'];
/*
const  pullApart = (string) =>{
    let separeteString=string.replace(/ /g,"")
    separeteString = string.split("");  
    return separeteString.join("-")
    
}
let cadena= prompt("ingresa  cadena ");
let print= pullApart(cadena)
console.log( print );
*/


/*Sabiendo que una cadena de texto contiene parentesis. Crear un programa que me devuelva la cadena que se encuetra entre los parentesis.*/
/*
const comparaString = (texto)=>{
    let index= texto.indexOf(`(`)
    let last = texto.lastIndexOf(`)`)
    return index != -1 ? texto.substring(index ,last+1): "no existen palabras entre parentesis";
}
let text = prompt("ingresa texto");
let print = comparaString(text)
console.log(print)
*/

/*Realizar un programa que muestre una piramide del 1 al 10 de las siguiente formas:
Forma 1:

1
22
333
4444
55555
666666
7777777
88888888
999999999
Forma 2:

999999999
88888888
7777777
666666
55555
4444
333
22
1
*/

/*
const generatePyramid=(NumberofRows)=> {
    let totalNumberofRows = NumberofRows;
    let output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+= i + " ";
        }
        console.log(output);
        output="";
    }
    console.log("--------inversa--------------");
    for (let  i = totalNumberofRows; i >=1 ; i--) {
        for (j= i; j>=1;j--) {
            output+= i + " ";
        }
        console.log(output);
        output="";
    }
} 
 generatePyramid(10) 
*/

/*Solicitar al usuario un nombre por medio del promt e ingresarlo a una coleccion , validando que no se repita ningun nombre.*/
/*
const names =() =>{
  let numNombres=""
  let nombre =[]
  let ingresaNombres="" 
  do{
    numNombres = Number(prompt("indica el número de nombres"))    
   }
   while(isNaN(numNombres))
      {       
       for(let i=0; i<numNombres; i++){
     
        if(nombre-length === 0){
            console.log(1)
            ingresaNombres = prompt(`Dame el nombre completo `)   
            nombre.push([ingresaNombres])      
        }
        else{
             ingresaNombres=""
             ingresaNombres = prompt(`Dame el nombre completo `)   
             found = nombre.find(element => element == ingresaNombres)            
          
            while(found !== undefined)
             {
                console.log("El nombre ya existe en el arreglo")
                ingresaNombres = prompt(`Dame el nombre completo `)            
                found = nombre.find(element => element == ingresaNombres) 
             }
             nombre.push([ingresaNombres])               
         }        
        }      
      }      
    return nombre    
}
let nombres = names()
console.log(nombres)
 */

/*Dado una coleccion de numeros. obtener el elemento Mayor, Menor, el Promedio y la Suma de los elementos.*/

/*
const arrayNumero = [5, 12, 8, 130, 44,10];

const numeros =(array) =>{
    let max=0 
    let min=0 
    let sum=0
    let promedio=0

    max= Math.max(...array) 
    console.log(`El numero mayor es ${max}`)
    max= Math.min(...array) 
    console.log(`El numero menor es ${min}`)
    for(let i=0 ; i< array.length; i++) 
    {
      sum += array[i] 
    }
    console.log(`la suma es  ${sum}`)    
    promedio=sum/array.length
    redo=promedio.toFixed(2)
    console.log(`el promedio es  ${redo}`)    
    return ""
}
let op = numeros(arrayNumero)
console.log(op)

*/
/*Solicitar al usuario por medio de un promt una cadena de numeros separados por algun caracter y que cada numero se agregue a una collecion de numeros.*/
/*
const number =() =>{
    let numLength=""
    let numeros =[]
    let ingresaNumeros="" 
    do{
        numLength = Number(prompt("el número tamaño del arreglo"))    
     }
     while(isNaN(numLength))
        {     
          for(let i=0; i< numLength; i++)  {
            ingresaNumeros = prompt(`ingresa  `)   
            numeros.push([ingresaNumeros])   
          }
          numeros= numeros.join("-")
        }      
      return numeros    
  }
  let numeros = number()
  console.log(numeros)
*/

/*Dado un array de números, detarminar por cada elemento si es un multiplo de 4, 3, 5, 2.*/
/*
const number2 =() =>{
    let numLength=""
    let numeros =[]
    let ingresaNumeros="" 
    let add2="";    
    let add3="";    
    let add4="";    
    let add5="";    
    do{
        numLength = Number(prompt("el número tamaño del arreglo"))    
     }
     while(isNaN(numLength))
        {   
        
          for(let i=0; i< numLength; i++)  {

            ingresaNumeros = prompt(`ingresa  `)   
            numeros.push([ingresaNumeros])   
            
            if(numeros[i] % 2 === 0 ){
                add2 += ` ${numeros[i]}`                
            }     
            if(numeros[i] % 3 === 0 ){
                add3 += `  ${numeros[i]}`               
            } 
            if(numeros[i] % 4 === 0 ){
                add4 += `  ${numeros[i]}`               
            }      
            if(numeros[i] % 5 === 0 ){
                add5 += `  ${numeros[i]}`               
            }      
          }
          console.log(`${numeros}`)
          console.log(`son multiplos de 2 : ${add2}`)
          console.log(`son multiplos de 3 : ${add3}`)
          console.log(`son multiplos de 4 : ${add4}`)
          console.log(`son multiplos de 5 : ${add5}`)        
        }      
      return ""
  }
  let numberIfo = number2()
  console.log(numberIfo)
*/

/*Crear un programa que dado un array de strings, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado.*/

let fruits = ["Apple", "Orange", "Plum","pineapple","cantaloupe","banana"];


const stringArray =(num,array) =>{ 
    //let rep=num
    for(let i=0; i< array.length; i++ )
    {
       if( array[i].length > num)
        {
         console.log(array[i].slice(num))
         
        }    

    }
    return ``  
}
let num =   parseInt( prompt(`ingresa un numero `))
console.log( stringArray(num,fruits))



/*Crear un programa que dados los datos de 3 lados de un triangulo con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno.*/
/*
const triangulo =(a,b,c) =>{ 
     // s = a+b+c /2
     // A= sqrt(s(s-a)(s-b)(s-c))  
    
    let sol=0
    let s=0
    let s1=0
      s = (a+b+c) /2
    sol = Math.sqrt(s* (s-a) * (s-b) * (s-c) ) 
    
    return `El area del triangulo dado es: ${sol} u2 `  
}
let a =   parseInt( prompt(`ingresa lado a `))
let b =   parseInt( prompt(`ingresa lado b `))
let c =   parseInt( prompt(`ingresa lado c `))
console.log( triangulo(a,b,c))
*/

/*Crear un programa que genere un string con "n" caracteres aleatorios, con la unica condicion de que no haya caracteres repetidos en el string.*/

/*
const nString =(numero) =>{ 
    let cantidadNumeros = numero;
    let result = ''
    let myArray = []
    let characters = 'abcdefghijklmnopqrstuvwxyz'
    while(myArray.length < cantidadNumeros ){
     // var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
     result = characters.charAt(Math.floor(Math.random() *  characters.length))
       let existe = false;
      for(let i=0; i<myArray.length; i++){
        if(myArray [i] === result){
            existe = true;
            break;
        }
      }
      if(!existe){
        myArray[myArray.length] = result;
      }
    
    }
     let  strin= myArray.join(" ");
     let se=strin.replace(/ /g,"")    
     return se
     }
let numString =   parseInt( prompt(`ingresa de cuantos caracteres sera tu string no >26`))
console.log( nString(numString))
*/

