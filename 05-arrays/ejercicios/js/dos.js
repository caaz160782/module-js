/*
Ejercicio
- Funcion que me regrese un numero aleatorio desde 0 hasta array.length
*/

const arrayKoders = [ "Fanny Alvarez",  "Elias Herrera",  "Kraken Pérez Salinas",  "Clau Rodriguez" ] 

const findNumber =(array) =>{
   
    return Math.floor(Math.random() * array.length);
}
console.log (findNumber(arrayKoders) )

/*- Funcion que reciba el indice para imprimir el nombre*/

const printName=(arrayKoders,number)=>{
    console.log(arrayKoders[number]) } 

for (let x=0;x<arrayKoders.length;x++){ 
    printName(arrayKoders,findNumber(arrayKoders))
 } 
/*
const arrayKoders=[ "Fanny Alvarez", "Elias Herrera", "Kraken Pérez Salinas", "Clau Rodriguez", "Jorge campos" ] 
let findNumber=(array)=>{ let long=array.length return Math.floor(Math.random()*long) } 
let printName=(arrayKoders,number)=>{ console.log(arrayKoders[number]) } 
for (let x=0;x<arrayKoders.length;x++){ printName(arrayKoders,findNumber(arrayKoders)) } */