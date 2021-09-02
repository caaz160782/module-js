//MENSAGJE NORMAL
console.log("ejemplo");
//mensaje error
console.error("error");
//mensaje warning
console.warn("warning");
//3 metodos para interactuar co el usuario
//1.-alert
//alert("alerta");

//2. prompt recive datos del usuario
//regresa un string

/*let name = prompt("ingresa tu nombre");
console.log(name);*/

//operadores
//aritmeticos
/*
 + suma
 - resta
 * multiplicacion
 / division
 **potencia 
 % resto
  */
 console.log("aritmeticos");
 let operacion = 5 + (5 -10) *3
 console.log(operacion)

 let division = 5 /2
 console.log(division)

 let modulo = 5 % 2
 console.log(modulo)

//relacionales o comparacion
/* 
>  mayor
<  menor
>= mayor que
<= menor que
== igual 
=== sperigual
!= diferente
!== superdiferente
*/
console.log("---- relacionales ----")
console.log(8 >9)
console.log(8 < 9)
console.log(8 >= 9)
console.log(9 >= 8)
console.log(7 >= 7)
console.log(7 <= 7)

console.log("---- con cadenas ----")
let string1 = "hola"
let string2 = "hola koder"
//comparacion lexografica
//son valores keycode valor de cada letra o palabra
console.log(string1 > string2)

//asignación
/*
=  igual asignar valor a una variable
== compararacion de valores
=== comparacion de tipo de dato y valor
*/
console.log("-------asignacion---------")
console.log(7 == 7)
console.log('7' == 7)
console.log('7' === 7)

/*
+=
*=
/=
-=
*/
let number=1;
number += 10
console.log(number);
number *= 2
console.log(number);
number /= 2
console.log(number);
number -= 10
console.log(number);

//incremento ||decremento
console.log("-------decremento || incremento---------")
let number2=2;
number2++
number2--
console.log(number2);
  
//operadores logicos
console.log("------- logicos ---------")
/*
 && AND
 || OR
 !  negacion

se manejan junto con las estructuras dew control
 */
let number3=1;
let number4=8;
let number5=5;
let number6=5;

console.log( (number3 >number4) || (number5 === number6));
console.log( (3 <4) && (5 === 5) );


