const  personObject={
    name: "carlos",
    lastName: "aguirre",
    gender:"male",
    age :39,
    isSingle: false,
    hobbies:["play videogames","watch tv"],
    otros:[{
        signature:  "HTML",
        score: 10
    },
    {
        signature:  "css",
        score: 6
    }],
    socialNetwork:{
        facebook: "caaz",
        line:"caz12"
     },
     saludar:function(){
         console.log("estas dentro personObject")
     }
}
console.log(personObject);
//acceder aloas propiedades de objeto
//por medio de la notacion punto
console.log(personObject.name)
console.log(personObject.lastName)

//notacion de corchetes
console.log(personObject["hobbies"])

//agregar una propiedad
personObject.birthDate="1982/07/16"
personObject.zodial="cancer"

console.log(personObject);
console.log(personObject.hobbies[0])
console.log(personObject.socialNetwork.line)
console.log(personObject.otros[1].score)

//ejecutar un metodo
personObject.saludar()

//agregar algo a hobbies
personObject.hobbies.push("ver series")
personObject.socialNetwork.twitter="caaz20"

personObject.name = personObject.name.toUpperCase()

console.log(personObject);
//frase
console.log(`Hola soy ${personObject.name} ${personObject.lastName} y tengo ${personObject.age} años`)

let     nombre = personObject.name
let apellido = personObject.lastName

console.log(`Hola soy ${nombre} ${apellido} `)

//destructuring assingment
//dentro de las llaves que propiedades qioero obtener = de que onbjeto las voy a obtner
let {name ,lastName,age}=personObject
console.log(`Hola soy ${name} ${lastName} y tengo ${age} años`)

//crear un objeto a base de variables

let  fisrtName= "Pedro"
let generation= 13
let bootcamp="js"

const koderObject={
    fisrtName,
    generation,
    bootcamp
}
console.log(koderObject)

//destructing with array
let arrayColors=["red","blue","white"]
let [mycolor1,mycolor2,mycolor3]=arrayColors
console.log(arrayColors)