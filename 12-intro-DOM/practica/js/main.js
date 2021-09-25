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
class Mentor{
   
    constructor(name,scores){
        this.name=name,
        this.scores=scores
        this.promedio= this.promedioScope()
    }

  /*  mentor.scores.forEach( (scores) => {
        ///promedio por materia
         if(scores.signature === "HTML")
         {
          //sumaHtml += scores.score
          let ScoreHtml= document.createTextNode(scores.score)
          trb.appendChild(tdScoreHtml)  
          tdScoreHtml.appendChild(ScoreHtml)  
         }
         else if(scores.signature === "CSS")
         {
            let ScoreCss= document.createTextNode(scores.score)
            trb.appendChild(tdScoreCss)  
            tdScoreCss.appendChild(ScoreCss)     
         }else
        {
            let ScoreJs= document.createTextNode(scores.score)
            trb.appendChild(tdScoreJs)  
            tdScoreJs.appendChild(ScoreJs) 
        }
       })

*/

   promedioScope() {
    const suma = this.scores.reduce( (accum,score) => { 
        return accum + score.score     
    },0)
    let promedio=suma/this.scores.length 
   return promedio.toFixed(2)
  }     

}

let mentor = mentorArray.map((mentor)=> new Mentor( mentor.name, mentor.scores ))

const promedioTotal = (mentor) => {
    let sumaProm = mentor.reduce( (accum,promedio) => {
        //console.log(promedio.promedio)
         return accum + parseFloat(promedio.promedio)
       },0)
     return sumaProm/mentor.length  
   }  

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
     }else/* if(scores.signature === "JS")*/
    {
      sumaJs += scores.score    
    }
   }) 
})
   let promHtml =sumaHtml/mentorArray.length
   let promCss  =sumaCss/mentorArray.length
   let promJs   =sumaJs/mentorArray.length
   /*console.log(`EL promedio html es: ${promHtml}`)   
   console.log(`El promedio css es: ${promCss}`)  
   console.log(`El promedio js es: ${promJs}`)  */
   let objectAvg= { promHtml, promCss, promJs}
   return objectAvg
}

console.log(mentor)

let h1 = document.createElement("h1")
let text =document.createTextNode("Mentores")
h1.appendChild(text)
document.body.appendChild(h1)

let encabezados =["Mentor","HTML","CSS","JS","Promedio"]
let table = document.createElement("table")
let thead = document.createElement("thead")  
let trh = document.createElement("tr")  

thead.appendChild(trh)

encabezados.forEach(titulos =>{
    let th= document.createElement("th")     
    let text= document.createTextNode(titulos)    
    trh.appendChild(th)
    th.appendChild(text)
})

table.appendChild(thead)   


let tbody = document.createElement("tbody") 

mentor.forEach((mentor) =>{
    let trb = document.createElement("tr")  
    let tdName= document.createElement("td")
    let nombre= document.createTextNode(mentor.name)
    let tdScoreHtml= document.createElement("td")
    let tdScoreCss= document.createElement("td")
    let tdScoreJs= document.createElement("td")
    trb.appendChild(tdName)  
    tdName.appendChild(nombre)
    
    mentor.scores.forEach( (scores) => {
          if(scores.signature === "HTML")
         {
          let ScoreHtml= document.createTextNode(scores.score)
          trb.appendChild(tdScoreHtml)  
          tdScoreHtml.appendChild(ScoreHtml)  
         }
         else if(scores.signature === "CSS")
         {
            let ScoreCss= document.createTextNode(scores.score)
            trb.appendChild(tdScoreCss)  
            tdScoreCss.appendChild(ScoreCss)     
         }else
        {
            let ScoreJs= document.createTextNode(scores.score)
            trb.appendChild(tdScoreJs)  
            tdScoreJs.appendChild(ScoreJs) 
        }
       })

    let tdPromedio= document.createElement("td")
    let promedio= document.createTextNode(mentor.promedio)
    tbody.appendChild(trb)
    trb.appendChild(tdPromedio)  
    tdPromedio.appendChild(promedio)      

})

table.appendChild(tbody)

let tfoot = document.createElement("tfoot")
let trf = document.createElement("tr")  

tfoot.appendChild(trf)
let tdPromedio= document.createElement("td")
let tdPromedioHtml= document.createElement("td")
let tdPromedioCss= document.createElement("td")
let tdPromedioJs= document.createElement("td")
let promedio= document.createTextNode("promedio")
trf.appendChild(tdPromedio)  
tdPromedio.appendChild(promedio)   

let promedios=promedioScope(mentor)
let promedioFinalHtml= document.createTextNode(promedios.promHtml)
trf.appendChild(tdPromedioHtml)  
tdPromedioHtml.appendChild(promedioFinalHtml)   

let promedioFinalCss= document.createTextNode(promedios.promCss)
trf.appendChild(tdPromedioCss)  
tdPromedioCss.appendChild(promedioFinalCss)   

let promedioFinalJs= document.createTextNode(promedios.promJs)
trf.appendChild(tdPromedioJs)  
tdPromedioJs.appendChild(promedioFinalJs)

let tdPromediototal= document.createElement("td")
let promedioFinal= document.createTextNode(promedioTotal(mentor))
  trf.appendChild(tdPromediototal)
  tdPromediototal.appendChild(promedioFinal)   
  table.appendChild(tfoot)

document.body.appendChild(table)
