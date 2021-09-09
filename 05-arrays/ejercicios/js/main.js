/*
Ejercicio 1:
Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.
Ejemplo:
input   
   - Emi de Leon
   - Elias Herrera
   - Armando Rios
output: 
    koder 1: Emi de Leon
    koder 2: Elias Herrera
    koder 3: Armando Rios
*/
console.log("----------1------------");
 function nombresKoders()
{
    let numeroKoders=""
  do{
     numeroKoders = Number(prompt("indica el número de koders"))
    
   }
   while(isNaN(numeroKoders))
      {
       let nombreKoders =[]
       //let koders=[]
       for(let i=1; i<=numeroKoders; i++){
        let ingresaNombres = prompt(`Dame el nombre completo ${numeroKoders[i]}`)
        nombreKoders.push([i,ingresaNombres])  
      //nombreKoders.push([ingresaNombres])  
       console.log(`Koder ${i}   ${nombreKoders[i-1][1]}`)
      //console.log(`Koder ${i}   ${nombreKoders[i-1]}`)
      }  
     return nombreKoders   
   } 

}
let koders = nombresKoders()


/*2-
A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado
*/
console.log("----------2------------");
function findKoder(namearray,number){
    //console.log(namearray)
    let find="no Existe un Koder con ese numero"
    for(let i=0; i< namearray.length; i++)
    {
      if(namearray[i][0] === number){
         // console.log(`el nombre del koder es ${namearray[i][1]}`)
         find= `el nombre del koder es ${namearray[i][1]}`
        } 
     /*
        if(i+1 === number){
            find= `el nombre del koder numero ${number} es ${namearray[i]}`
          }  */
    }    
    return find
}

let numeroKoder = Number(prompt("indica el número de koder a buscar"))
console.log(findKoder(koders, numeroKoder))


/*- imprimir la lista de koders en orden alfabetico descendiente*/

console.log("-----------3-----------");

function orderSecondColumn(a,b){
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}  
//let descen = Koders.sort(orderSecondColumn).reverse()   
//  console.log( orderSecondColumn )
  function descen(namearray)
 {    
   let descen = namearray.sort(orderSecondColumn).reverse()   
   //let desName=[]
   for(let i=0; i<descen.length; i++)
   {
       //console.log(`Koder ${descen[i]}`)
      console.log(`Koder ${descen[i][0]} : ${descen[i][1]}`)
     //  desName += `Koder ${descen[i][0]} : ${descen[i][1]} `
    }  
    return descen     
}
descen(koders)

//console.log(descen);
/*
- Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [
      "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)"
  ]*/
  console.log("-----------4-----------");

  function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function alternateText(arrayNames){
        let  iniciales="";
        //console.log( arrayNames )
        let nameKoders= arrayNames;  
        let nombre="" 
        let arrayIni=""
        for (let i= 0; i < nameKoders.length ; i++) {      
              nombre = nameKoders[i][1].split(" ")
              for(let j=0; j<nombre.length; j++)
                {
                  iniciales += nombre[j].charAt(0).toUpperCase()                
               }  
            }
            let j=0  
             for (let i= 0; i < nameKoders.length ; i++) {      
                console.log(`Koder ${nameKoders[i][0]} : ${nameKoders[i][1]} ( ${iniciales[j]}. ${iniciales[++j]}.)`) 
                j= ++j                
             }
    return iniciales ;
  }

function iniciales(namearray)
{
   let ascen = namearray.sort(sortFunction)
   let dem=alternateText  (ascen)
}
iniciales(koders) 
/*
- Permitir agregar un koder en alguna posicion deseada, 
  por ejemplo: "Fanny Alvarez, lugar 3"
*/

console.log("-----------5-----------");

function plusData(namearray,newKoder,posicion)
 {    
     let kod=namearray.length + 1
     namearray.splice(posicion,0,[kod,newKoder]);    
     for(let i=0; i<namearray.length; i++)
     {
       //console.log(`Koder ${descen[i]}`)
       console.log(`Koder ${namearray[i][0]} : ${namearray[i][1]}`)
    }     
}
let newKoder = prompt("indica el nombre de koder agregar")
let posicion = Number(prompt("indica en que posicion"))
console.log(plusData(koders, newKoder,posicion))

