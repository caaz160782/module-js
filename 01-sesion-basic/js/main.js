//ambito de existencia -scope
//ES5 - scope global | funcional
//scope de bloque -> 
var saludo= "Hello world Kodemia ";
let hello= "Hello world Kodemia 22";

console.log(window.saludo);// ambito global
console.log(window.hello);

//console.log(saludo);
console.log("----------------- var ya no se utiliza-------------")
var musica= "Rock";
//hoisting -elevacion
console.log("variable musica antes del bloque",musica)
{
 //esto es un bloque
 /*
  comentario multilinea
  */
 var musica="pop"
 console.log("variable musica dentro del bloque",musica)
}

console.log("variable musica despues del bloque",musica)

console.log("----------------- let -------------")

let musica2= "Rock";
console.log("variable musica antes del bloque let",musica2)
{
 let musica2="pop"
 console.log("variable musica dentro del bloque let",musica2)
}

console.log("variable musica despues del bloque let ",musica2)

// ES6 -const declara una constante
console.log("----------------- const -------------")
let age 
//primitivos
const PI = 3.1416;
const isValid= true
//const LAST_NAME //las constantes deben estar declaradas
//PI =3.15; //no se puede reasignar el valor
age=30;
console.log(PI +"   edad "+ age);

//primitivos | compuestos
//array | objeto | class  

//compuesto con const
const objeto ={
        name:"Carlos",
        age:25
     }
let arrayColors=['red','green','yellow'];     

console.log(objeto);
console.log(arrayColors);

objeto.lastName= "Aguirre";
arrayColors.push("purple");

console.log(objeto);
console.log(arrayColors);

console.log("----------------- let -------------")
//let reasignar el valor
//podemos solo declararla
//no puedo redeclarar la variable en su mismo scope
let koder ="Pablo"
console.log(koder);
koder="Omar"
console.log(koder);
//let koder //no puedo redeclarar la variable en su mismo scope

console.log("----------------- const -------------")
//valor primitivo
//string number boolean null undefined NaN
const CURP="auzc820716hdfx";
//const LAST_NAME //las constantes deben estar declaradas
//curp =3.15; //no se puede reasignar el valor

//compuestos
//array | objeto | class  
//si se pueden declarar como constantes y se le puede agregar 
//atributos pero no se puede modificar 
const KoderEmi ={
      name:"Emi"
}
console.log(KoderEmi);
KoderEmi.lastName="DE leon"
console.log(KoderEmi);