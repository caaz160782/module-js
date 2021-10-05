let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 8
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
                score: 7
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
                score: 8
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
   let objectAvg= { promHtml, promCss, promJs}
   return objectAvg
}

const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    // let textNode = document.createTextNode(text)
    // node.appendChild(textNode)
    return node
}
const eliminaMentor =(index,array)=>{
    //array.splice(index, 1);    
    delete array[index]
}

const pintarTd= (score,td) =>{
     if(score >= 9){
        td.classList.add("aprobado")
    }
    else if(score >7 && score < 9){
        td.classList.add("suficiente")
     }
     else if(score <= 7){
        td.classList.add("reprobado")
       }
    }
//console.log(mentor)

const agregaTd = (name,scores,promedio) => {
    let tBody = document.getElementById("mentorTable")
    /*alumno1.forEach((alumno, index) => {
        let {name, apellido} = alumno*/
        //let index=1
        let tr = document.createElement("tr")
        //let tdIndex = createNode("td", count )
        let tdName = createNode("td", name)
        tr.appendChild(tdName)
        let tdScoreHtml= document.createElement("td")
        let tdScoreCss= document.createElement("td")
        let tdScoreJs= document.createElement("td")
        
        scores.forEach( (scores) => {
              if(scores.signature === "HTML")
             {
              let ScoreHtml= document.createTextNode(scores.score)          
              tr.appendChild(tdScoreHtml)  
              tdScoreHtml.appendChild(ScoreHtml)  
              pintarTd(scores.score,tdScoreHtml)          
              }
             else if(scores.signature === "CSS")
             {
                let ScoreCss= document.createTextNode(scores.score)
                tr.appendChild(tdScoreCss)  
                tdScoreCss.appendChild(ScoreCss)    
                pintarTd(scores.score,tdScoreCss)            
             }else
            {
                let ScoreJs= document.createTextNode(scores.score)
                tr.appendChild(tdScoreJs)  
                tdScoreJs.appendChild(ScoreJs) 
                pintarTd(scores.score,tdScoreJs)
    
            }          
    
           })       
           let tdPromedio = createNode("td",promedio )
           tr.appendChild(tdPromedio)      
           pintarTd(promedio,tdPromedio)
        
        let tdButton = document.createElement("td")

        let btnDelete = createNode("button", "eliminar")
        btnDelete.classList.add("btn", "btn-danger")

        btnDelete.addEventListener("click", (e)=> {
           let td = e.target.parentNode; 
           let tr = td.parentNode;
           let index = Array.from(tr.parentNode.children).indexOf(tr)
           tr.parentNode.removeChild(tr)
           //document.getElementById("mentorTable").deleteRow(index)
           eliminaMentor(index,mentorArray)           
        })

        tdButton.appendChild(btnDelete)
        tr.appendChild(tdButton)
        tBody.appendChild(tr)
    /*})*/
}



/**** */
let mentorTable = document.getElementById("mentorTable")
let tbody = document.createElement("tbody") 
mentor.forEach((mentor,index) =>{
    let trb = document.createElement("tr")  
    let tdName = createNode("td", mentor.name )
    trb.appendChild(tdName)  

    let tdScoreHtml= document.createElement("td")
    let tdScoreCss= document.createElement("td")
    let tdScoreJs= document.createElement("td")
    
    mentor.scores.forEach( (scores) => {
          if(scores.signature === "HTML")
         {
          let ScoreHtml= document.createTextNode(scores.score)          
          trb.appendChild(tdScoreHtml)  
          tdScoreHtml.appendChild(ScoreHtml)  
          pintarTd(scores.score,tdScoreHtml)          
          }
         else if(scores.signature === "CSS")
         {
            let ScoreCss= document.createTextNode(scores.score)
            trb.appendChild(tdScoreCss)  
            tdScoreCss.appendChild(ScoreCss)    
            pintarTd(scores.score,tdScoreCss)            
         }else
        {
            let ScoreJs= document.createTextNode(scores.score)
            trb.appendChild(tdScoreJs)  
            tdScoreJs.appendChild(ScoreJs) 
            pintarTd(scores.score,tdScoreJs)

        }          

       })
    let tdPromedio = createNode("td", mentor.promedio )
    trb.appendChild(tdPromedio)      
    pintarTd(mentor.promedio,tdPromedio)
    
    let tdBtnDelete= document.createElement("td")
    let btnDelete=document.createElement("button")
    let textBtn= document.createTextNode("eliminar")
    btnDelete.type="button" 
    btnDelete.setAttribute("id", `btn-${index}`);
    btnDelete.setAttribute("data-custom-key",`key-${index}`)
    btnDelete.classList.add("btn", "btn-danger")
    btnDelete.appendChild(textBtn)   
    trb.appendChild(tdBtnDelete)  
    tdBtnDelete.appendChild(btnDelete)    
    
    btnDelete.addEventListener("click",(e)=> {
        let td = e.target.parentNode; 
        let tr = td.parentNode;
        let index = Array.from(tr.parentNode.children).indexOf(tr)
        tr.parentNode.removeChild(tr)
        //document.getElementById("mentorTable").deleteRow(index)
         eliminaMentor(index,mentorArray)
         console.log(mentorArray)
        
    })    
    tbody.appendChild(trb)
})

mentorTable.appendChild(tbody)
let promedio = document.getElementById("promedio")
let textAvg = document.createTextNode(`El promedio general es: ${promedioTotal(mentor).toFixed(2)}`)
promedio.appendChild(textAvg)

let viewForm = document.getElementById("viewForm")
let  cardAgregar= document.getElementById("cardAgregar")    
viewForm.addEventListener("click",(e)=>{   
   cardAgregar.style.display = 'block'
})

let agregar = document.getElementById("agregar")
let inputs = document.querySelectorAll(".form-control")
agregar.addEventListener("click",(e)=>{
    let nombre=document.getElementById("inputName").value 
    let scoreHtml=document.getElementById("inputHtml").value 
    let scoreCss=document.getElementById("inputCss").value 
    let scoreJs=document.getElementById("inputJs").value 
    let scores=[]
    if(nombre !== "" && scoreHtml !== "" && scoreCss !=="" && scoreJs !== ""){
    inputs.forEach((int) => { 
        switch (int.id) {
          case "inputName":
            nombre=int.value
           break;
          case "inputHtml":
            scoreHtml=int.value
           break;  
          case "inputCss":
            scoreCss=int.value
          break;   
          case "inputJs":
            scoreJs=int.value
           break;      
       }    
    })
    mentorArray.push({name:nombre, scores:[{signature:"HTML",score:parseInt(scoreHtml)},{signature:"CSS",score:parseInt(scoreCss)},{signature:"JS",score:parseInt(scoreJs)} ]}) 
    console.log(mentorArray) 
    let mentorNew=""
    let scores= [{signature:"HTML",score:parseInt(scoreHtml)},{signature:"CSS",score:parseInt(scoreCss)},{signature:"JS",score:parseInt(scoreJs)}]
    mentorNew = new Mentor(nombre,scores)
    mentor.push(mentorNew)
    console.log(mentor) 
    agregaTd(nombre,scores,mentorNew.promedio)

    document.getElementById("inputName").value =""
    document.getElementById("inputHtml").value =""
    document.getElementById("inputCss").value =""
    document.getElementById("inputJs").value =""
    cardAgregar.style.display = 'none'
    }else 
    {
      alert("ningun campo puede estar vacio")
    }
 })


