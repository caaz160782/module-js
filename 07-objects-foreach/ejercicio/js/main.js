/*arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },

]*/
let dataArray=[
   ["Fernanda","Palacios"],
   ["Alfred","Altamirano"],
   ["Angel","Resendiz"],
   ["Elda","Corona"],
   ["Tux","Tuxtla"],
   ["Jorge","De Buen"]
]
console.log("----- creado For---")
const getArrayWithObject= (arrayMentors) =>{
let newArrayMentors=[]
for (i=0;i<arrayMentors.length;i++) {
    //  console.log(dataArray[i][0] + "-" + dataArray[i][1] )
    let name    = dataArray[i][0]
    let lastName= dataArray[i][1]
    let objectMentor={name , lastName} 
    newArrayMentors.push(objectMentor)    
 }
 return newArrayMentors
}

let otherArrayMentors = getArrayWithObject(dataArray)
console.log(otherArrayMentors)


console.log("-----creado por For each---")

const getArrayFEwithObject = (arrayMentors) =>{
     let newArrayMentors=[]
     arrayMentors.forEach((mentors)=> {
      newArrayMentors.push(mentors)    
     })
 return newArrayMentors
}
let otherArrayFEMentors = getArrayFEwithObject(dataArray)
console.log(otherArrayFEMentors)

/*
const elements = [11, 21, 46];
const copy = [];
elements.forEach((element)=>{
  copy.push(element);
});

console.log(copy);
*/
console.log("-------------for each array recorrer mentores--------------")
dataArray.forEach((name,index)=> {
    console.log(`el nombre es: ${name} en la posicion ${index}`)
})

console.log("-------------for each objeto recorrer mentores--------------")

otherArrayMentors.forEach((mentor,index) => {
    console.log(`el nombre es: ${mentor.name} ${mentor.lastName} en la posicion ${index}`)
})