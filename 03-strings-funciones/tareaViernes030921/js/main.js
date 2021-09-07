/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"

se solicitara una palabra al usuario por medio de prompt
la palabra anterior se guardara en una variable
*/

/*
solucion #1
se utilizara el metod split para convertir en un array el string solicitado
despues de separara y la cadena utilizaremos el metodo reverse poner en orden inverso el string este solo funciona en arrays
por ultimo se volvera a unir el string con el metodo join
se creara una funcion para almacenar el resultado de esteos tres metodos
se mostrara el resultado por medio de un console
*/
/*
function wordReverse(word){
  let wSplit=""
  let wRev=""
  let wJoin=""

  wSplit= word.split("")
  wRev= wSplit.reverse()
  wJoin=wRev.join("")
  //lo anterior se puede hacer en una sola intruccion pero para identificar cada metodo se realizo por separado
  //wRev= word.split("").reverse().join(""); 
  return wJoin
}

let word= prompt("ingresa una palabra");
console.log(wordReverse(word))

*/

/*solucion #2 
este mismo ejercicio se puede resolver por medio de un  de un for 
solicitamos la cadena al usuario la iremos recorriendo he imprimiendo al reves
*/
/*
function wordReverse(word){
    let nuevaCadena = "";
    for (let x = word.length - 1; x >= 0; x--) {
        nuevaCadena += word[x];
       }
    return nuevaCadena;
  }
let word= prompt("ingresa una palabra");
console.log(wordReverse(word))
*/

/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 

input: "abcdefg"
output: "AbCdEfG"

se solicitara una frase o palabra al usuario
el resultado debe alternar entre mayusculas y minisculas

este ejercicio se ocupara un for por que necesitamos recorrer cada elemento del string
como se necesita alternar entre may y min necesitamos saber como diferenciarlos
necesitamos conocer el largo de la cadena y para esto nos ayuda el metodo lenght
para diferenciar entre may y min  seria muy parecido como saber el valor de par e impar 
pues lenght nos da el tamaño total del string y con  esto creamos un ciclo en donde se puede saber si es par o impar una posicion
*/

function alternateText(word){
    let nuevaCadena = "";
    for (let i= 0; i < word.length ; i++) {        
         if(i % 2 === 0)
        {
         nuevaCadena += word[i].toUpperCase()
        }
        else{
          nuevaCadena += word[i].toLowerCase()
        }        
       }
    return nuevaCadena;
  }
let word= prompt("ingresa una palabra o frase");
let res = alternateText(word)
//dem
console.log(res)

/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/
/*
function startWord(word){
    let nuevaCadena = ""
    let index=""
    let min=word.toLowerCase()    
    let vowels= /[aeiou]/gi    
    //let consonant= /[bcdfghjklmnñpqrstcyz]/gi
    let consonant= /[^aeiou]/gi
    let numbers= /[0-9]/gi
    let carEsp= /\W/gi  
    //verifica que la primer letra sea vocal 
    if(min.search(vowels) == 0) {
        index= min.split("")
        nuevaCadena=`La palabra ${word} inicia con la vocal ${index[0]}`
    }
    //verifica que la primer letra sea consonante 
    if(min.search(consonant) == 0){
        index= min.split("")
        nuevaCadena=`La palabra ${word} inicia con la consonante ${index[0]}`
    }
    //verifica que la primer letra sea numero
    if(min.search(numbers) == 0){
        index= min.split("")
        nuevaCadena=`La palabra ${word} inicia con el numero ${index[0]}`
    }
   //verifica que la primer letra sea un carcater especial
    if(min.search(carEsp) == 0){
        index= min.split("")
        nuevaCadena=`La palabra ${word} inicia con un caracter especial ${index[0]}`
    }    
    return nuevaCadena;
  }
let word= prompt("ingresa una palabra o frase");
let res = startWord(word)
console.log(res)

*/