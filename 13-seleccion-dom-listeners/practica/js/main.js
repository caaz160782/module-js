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
   let objectAvg= { promHtml, promCss, promJs}
   return objectAvg
}
/*
const recorreScore=(array)=>{

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
}
*/
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



console.log(mentor)

/**** */
let mentorTable = document.getElementById("mentorTable")

let encabezados =["Mentor","HTML","CSS","JS","Promedio"]

let thead = document.createElement("thead")  
let trh = document.createElement("tr")  

thead.appendChild(trh)

encabezados.forEach(titulos =>{
    let th= document.createElement("th")     
    let text= document.createTextNode(titulos)    
    trh.appendChild(th)
    th.appendChild(text)
})
mentorTable.appendChild(thead)

let tbody = document.createElement("tbody") 

mentor.forEach((mentor,index) =>{
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
    tbody.appendChild(trb)
    let tdPromedio= document.createElement("td")
    let promedio= document.createTextNode(mentor.promedio)
    trb.appendChild(tdPromedio)  
    tdPromedio.appendChild(promedio)        
    pintarTd(mentor.promedio,tdPromedio)
     
    let tdBtnDelete= document.createElement("td")
    let btnDelete=document.createElement("button")
    let textBtn= document.createTextNode("eliminar")
    btnDelete.type="button" 
    btnDelete.setAttribute("id", `btn-${index}`);
    btnDelete.setAttribute("data-custom-key",`key-${index}`)
    btnDelete.classList.add("eliminar")
    btnDelete.appendChild(textBtn)   
    trb.appendChild(tdBtnDelete)  
    tdBtnDelete.appendChild(btnDelete)        

//<button type="button" class="btn btn-danger">Danger</button>


})

mentorTable.appendChild(tbody)
let promedio = document.getElementById("promedio")
let textAvg = document.createTextNode(`El promedio general es: ${promedioTotal(mentor).toFixed(2)}`)

promedio.appendChild(textAvg)
/*
function highlight(e) {
    if (selected[0]) selected[0].className = '';
    e.target.parentNode.className = 'selected';
}

let table = document.getElementById('mentorTable'),

selected = table.getElementsByClassName('selected');

table.onclick = highlight;
*/

let buttons = document.querySelectorAll(".eliminar")

buttons.forEach(button => {
    button.addEventListener("click",(e)=> {
/*        console.log(button.textContent)
        console.log(evento)7
        console.log(evento.target)
        console.log(evento.target.dataset.customKey)*/
        //alert(document.getElementById("mentorTable").rows[1].innerHTML);

        //let mentor=document.getElementById("mentorTable").rows[1].cells[0].innerHTML
        //alert(mentor)
let valores=""
        let elementosTD=e.target.parentElement.getElementsByTagName("td");
        for(let i=0;i<elementosTD.length;i++)
		{
 
			// obtenemos cada uno de los valores y los ponemos en la variable "valores"
			valores+=elementosTD[i].innerHTML+"\n";
		}
 

        //alert("Row index is: " + this.rowIndex);
        alert(valores);
    })

//        document.getElementById("tableid").deleteRow(i);


})

