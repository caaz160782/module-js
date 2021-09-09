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
 function nombresKoders()
{
    let numeroKoders
  do{
     numeroKoders = Number(prompt("indica el número de koders"))
    
   }
   while(isNaN(numeroKoders))
      {
       let nombreKoders =[]
       //let koders=[]
       for(let i=1; i<=numeroKoders; i++){
        let ingresaNombres = prompt("Dame el nombre completo")
        nombreKoders.push([i,ingresaNombres])  
      //nombreKoders.push([ingresaNombres])  
       console.log(`Koder ${i}   ${nombreKoders[i-1][1]}`)
      //console.log(`Koder ${i}   ${nombreKoders[i-1]}`)
      }  
     return nombreKoders   
   } 

}

let Koders = nombresKoders();

/*2-
A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado
*/

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
console.log(findKoder(Koders, numeroKoder))


/*- imprimir la lista de koders en orden alfabetico descendiente*/

console.log("----------------------");

function descen(namearray){
    //let descen = Koders.sort().reverse()
    
    let descen = namearray[0][1].sort().reverse()
    

    /*for(let i=0; i<descen.length; i++)
    {
        console.log(`Koder ${descen[i]}`)
    } */   
    console.log(descen);
}
descen(Koders)

/*
- Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [
      "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)"
  ]*/


  /*
- Permitir agregar un koder en alguna posicion deseada, 
  por ejemplo: "Fanny Alvarez, lugar 3"
*/

