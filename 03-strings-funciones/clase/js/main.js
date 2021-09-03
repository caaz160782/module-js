//string
//dato primitivo
let nombre="Carlos";
let apellido='Aguirre';
let saludo =new String("Hola amigos");

let nombreCompleto= nombre +" "+ apellido;
let saludoConNombreCompleto="Hola mi nombre es "+ nombre +" "+ apellido;

console.log(nombreCompleto)
console.log(saludoConNombreCompleto)

//acento invertido | bactick ``
let nuevoSaludo = `Hola mi nombre es ${nombre} ${apellido}`
console.log(nuevoSaludo)

//primitive wrapper Object
let someThing= "hola a todos";
console.log(someThing.length)

//funciones
console.log("---------Funciones---------")

//suma
/*
let num1=45;
let num2=20;
let suma=0;
suma =num1+num1;
console.log(suma)
*/

//definicion de la funcion
function sumaDosNumeros(num1,num2){
    let suma=0;
    suma =num1+num2;
    return suma
}

//invocacion de la funcion
let res =sumaDosNumeros(10,5)
console.log("el resultado es " + res)


function evalSiESMayor(num1,num2){
   return num1 > num2 ? "el primero es mayor": "el 2do es mayor";
}
let mayor=evalSiESMayor(4,5)
console.log("el resultado  " + mayor)

let name ="Carlos Aguirre";
name.charAt();
