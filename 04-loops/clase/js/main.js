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

// for
/*
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
  
  */
 /*
//while
function alternateText(word){
    let nuevaCadena = ""
    let index=0

    while(index < word.length){
        if(index % 2 === 0)
        {
         //nuevaCadena += word[index].toUpperCase()
         nuevaCadena += word.charAt(index).toUpperCase()       
        }
        else{
          //nuevaCadena += word[index].toLowerCase()
          nuevaCadena += word.charAt(index).toLowerCase()
        } 
        index++       
       }      
    return nuevaCadena   
  }
let word= prompt("ingresa una palabra o frase");
let res = alternateText(word)
console.log(res)
*/
/*
solucion #1
se utilizara el metod split para convertir en un array el string solicitado
despues de separara y la cadena utilizaremos el metodo reverse poner en orden inverso el string este solo funciona en arrays
por ultimo se volvera a unir el string con el metodo join
se creara una funcion para almacenar el resultado de esteos tres metodos
se mostrara el resultado por medio de un console
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
console.log(wordReverse(word))*/