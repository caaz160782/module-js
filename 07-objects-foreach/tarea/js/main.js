let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 7
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    }
]

/*   
const getMapFromArray = data =>
data.reduce((acc, item) => {
  // add object key to our object i.e. charmander: { type: 'water' }
  acc[item.signature] = { score: item.score };
  return acc;
}, {});
*/

/*- Obtener el score promedio de cada materia (HTML, CSS, JS)*/
console.log("----- Promedio ---")
const promedioScope= (mentorArray) =>{
    let sumaHtml=0 
    let sumaCss=0 
    let sumaJs=0 
    mentorArray.forEach((mentorObjects)=> {
    let scoresArray= mentorObjects.scores    
    scoresArray.forEach( (scores) => {
    ///promedio por materia
     if(scores.signature === "HTML")
     {
      sumaHtml += scores.score
     }
     else if(scores.signature === "CSS")
     {
      sumaCss += scores.score    
     }else if(scores.signature === "JS")
    {
      sumaJs += scores.score    
    }
   }) 
})
   let promHtml=sumaHtml/mentorArray.length
   let promCss=sumaCss/mentorArray.length
   let promJs=sumaJs/mentorArray.length
   /*console.log(`EL promedio html es: ${promHtml}`)   
   console.log(`El promedio css es: ${promCss}`)  
   console.log(`El promedio js es: ${promJs}`)  */
   let objectAvg={promHtml,promCss,promJs}
   return objectAvg
}

let promedio =promedioScope(mentorArray);
console.log(promedio)
////////////////////////////////////////////////////////////////////
/*- Obtener el promedio indivual de cada mentor
- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"
*/ 

console.log("----- Promedio Individual---")

const promedioIndividual= (mentorArray )=>{
    let newArrayMentors=[]
    mentorArray.forEach( (mentorObject) => {
        let sumaTutor=0 
        let scoresArray= mentorObject.scores 
        scoresArray.forEach( (scores) => {
            sumaTutor += scores.score       
          }) 
         let promTutor=  sumaTutor/scoresArray.length
         let redo=promTutor.toFixed(2) 
         //agrege la propiedad promedio
         mentorObject.promedio = redo
         console.log(`Mi nombre es ${mentorObject.name} mi promedio es ${redo}`)   
      })  
  return mentorArray
}

let newArrayMentor = promedioIndividual(mentorArray);
//console.log(newArrayMentor)

/*- Obtener la lista de mentores cuyo promedio sea mayor a 9.5*/
console.log("----- Promedio > 9.5---")
const mayor9= (newArrayMentor) =>{
    newArrayMentor.forEach((newArrayMentor)=> {
    if(newArrayMentor.promedio > 9.5){
        console.log(`Mi nombre es ${newArrayMentor.name} y tengo un promedio de ${newArrayMentor.promedio}`)   
    }
  })    
}
mayor9(newArrayMentor);
