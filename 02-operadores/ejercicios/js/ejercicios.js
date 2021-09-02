//1.-Pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números
/*
 + suma
 - resta
 * multiplicacion
 / division
 **potencia 
 % resto*/
// typeof  nos dice el tipo de dato que ingresemos

/*
let no1=0;
let no2=0;
let rs=0;
 no1= Number(prompt("ingresa numero 1"));
 no2= Number(prompt("ingresa numero 2"));
console.log("---aritmeticas-----")
console.log("---suma -----")
res=no1 +no2;
console.log("el resultado de la suma " + res);
console.log("---resta-----")
res=no1 - no2;
console.log( `el resultado de la resta ${res}`);
console.log("---multiplicacion-----")
res=no1 * no2;
console.log(res);
console.log("---division-----")
res=no1 / no2;
console.log(res);
console.log("---potencia-----")
res=no1**no2;
console.log(res);
console.log("---resto-----")
res=no1%no2;
console.log(res);
*/

//2.Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo.

let no1=0;
let no2=0;

no1= Number(prompt("ingresa numero 1"));
no2= Number(prompt("ingresa numero 2"));

//console.log(no1 > no2 );
if(no1 > no2 ){
  console.log("el primer numero si es mayor al segundo");
}
else if(no1 === no2){
    console.log("los numeros son iguales");
}
else
{
 console.log("el primer numero  es menor al segundo");
}

//3.-Pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto.

/*
let letra1="";
let letra2="";

letra1= prompt("ingresa letra 1");
letra2= prompt("ingresa letra 2");

//console.log(letra1 < letra2);

if(letra1 < letra2){
  console.log("la primer letra esta antes del segundo");
}
else{
    console.log("la primer letra esta despues del segundo");
}
*/

