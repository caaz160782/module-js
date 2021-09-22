let arrayPersons = [
    {
        name: "Alice", age: 25, voted: true, gender: "mujer"
    },
    {
        name: "Jenifer", age: 26, voted: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, voted: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, voted: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, voted: false, gender: "hombre"
    },
    {
        name: "Luis", age: 38, voted: true, gender: "hombre"
    },
    {
        name: "David", age: 29, voted: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, voted: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, voted: false, gender: "mujer"
    },
    {
        name: "Albert", age: 45, voted: true, gender: "hombre"
    },
    {
        name: "Mike", age: 22, voted: false, gender: "hombre"
    },
    {
        name: "Tami", age: 35, voted: true, gender: "hombre"
    },
    {
        name: "Mari", age: 28, voted: true, gender: "mujer"
    },
    {
        name: "Mireya", age: 18, voted: true, gender: "mujer"
    },
    {
        name: "Tamara", age: 18, voted: true, gender: "mujer"
    },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que votaron
- la edad promedio de todos los votantes
- un array con aquellos votantes que votaron y que son menores a 30 años
- la edad promedio de los no votantes



*/

console.log("-----1----")

const vote =(arrayPersons) =>{
   const votaron = arrayPersons.reduce( (accum,persona) => { 
             return persona.voted  
                    ?[...accum, persona]        
                    :accum 
    },[])
    return votaron
}

console.log(vote(arrayPersons))
let votaron=vote(arrayPersons)

console.log("-----2----")

const edadPromedio =(arrayPersons) =>{    
    const sumaEdad = arrayPersons.reduce( (accum,persona) => { 
            return accum + persona.age      
    },0)
    return sumaEdad/arrayPersons.length
}
console.log(edadPromedio(votaron))


console.log("-----3----")
const votemenor30 =(votaron) =>{
    const votaron30 = votaron.reduce( (accum,persona) => { 
              return persona.age <30
                     ?[...accum, persona]        
                     :accum 
     },[])
     return votaron30
 }
 console.log(votemenor30(votaron))
//let votaron=vote(arrayPersons)


console.log("-----4----")
console.log("la edad promedio de los no votantes")
//la edad promedio de los no votantes
const noVote =(arrayPersons) =>{

    const novotaron = arrayPersons.reduce( (accum,persona) => { 
              return !persona.voted  
                     ?[...accum, persona]                          
                     :accum 
     },[])
     return novotaron
 }
  //console.log(noVote(arrayPersons))
 let novotaron=noVote(arrayPersons)

 const edadPromedioNoVota =(arrayPersons) =>{    
    const sumaEdad = arrayPersons.reduce( (accum,persona) => { 
            return accum + persona.age      
    },0)
    return sumaEdad/arrayPersons.length
}
console.log(edadPromedioNoVota(novotaron))

//- el porcentaje de votantes vs no votante
console.log("-----5----")
console.log("el porcentaje de votantes vs no votante")
console.log("votaron")
const porcentajevote =(arrayPersons) =>{
    const votaron = arrayPersons.reduce( (accum,persona) => { 
              return persona.voted  
                     ? [...accum, persona]   
                     :accum 
     },[])
     return (votaron.length*100)/arrayPersons.length
 }
 console.log(porcentajevote(arrayPersons))

console.log("-----6----")  
console.log(" no votaron")
 const porcentajeNoVote =(arrayPersons) =>{
     const noVotaron = arrayPersons.reduce( (accum,persona) => { 
               return !persona.voted  
                      ? [...accum, persona]   
                      :accum 
      },[])
      return (noVotaron.length*100)/arrayPersons.length
  }
  console.log(porcentajeNoVote(arrayPersons))

 //- el procentaje de mujeres que votaron
 console.log("-----7----")
 console.log("el procentaje de mujeres que votaron")

  const womanVote =(arrayPersons) =>{
     const votaron = arrayPersons.reduce( (accum,persona) => { 
               return persona.voted && persona.gender === "mujer" 
                      ?[...accum, persona]        
                      :accum 
      },[])
      return (votaron.length *100)/arrayPersons.length
  }
  console.log(womanVote(arrayPersons))

  //- el porcentaje de los hombres que votaron
  console.log("-----8----")
  console.log("el procentaje de hombres que votaron")

 
  const manVote =(arrayPersons) =>{
    const votaron = arrayPersons.reduce( (accum,persona) => { 
              return persona.voted && persona.gender === "hombre" 
                     ?[...accum, persona]        
                     :accum 
     },[])
     return (votaron.length *100)/arrayPersons.length
 }
 console.log(manVote(arrayPersons))
 
 //dinamic porcentaje
 const genderPorcen =(arrayPersons,gender) =>{
    const votaron = arrayPersons.reduce( (accum,persona) => { 
              return persona.voted && persona.gender === gender 
                     ?[...accum, persona]        
                     :accum 
                
     },[])
     return (votaron.length *100)/arrayPersons.length
 }
 console.log(genderPorcen(arrayPersons,"mujer"))