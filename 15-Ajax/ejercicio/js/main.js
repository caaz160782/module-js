let kodersArray = []
let koderId=[]

const getKoders = () => {
    const xhr = new XMLHttpRequest()
    // console.log(xhr)
    // Agregando el listener para ver el estado de mi peticion
    xhr.addEventListener('readystatechange', () => {
        // valida que la peticion se completo
        if(xhr.readyState === 4) {
            // Validando en status
            if(xhr.status >= 200 && xhr.status <= 299) {
              //  console.log(xhr.status)
             let responseAjax = xhr.responseText
              //  console.log(responseAjax)              
             let responseParsed = JSON.parse(responseAjax)
            //   console.log(responseParsed)   
            kodersArray=[]
            koderId=[]       
              for (const prop in responseParsed) {
                 kodersArray.push(responseParsed[prop])
                 koderId.push({id:prop})                  
               }                                    
              printTable()                
            }else {
                console.log("Ocurrio un error: ", xhr.status, "Not Found")
            }                      
        }
    })    
    // instruccion que me me permite abrir la peticion
    xhr.open("GET", "https://api-13va-default-rtdb.firebaseio.com/.json", true)    
    xhr.send()      
}

getKoders()

const createKoder = (koderObject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
                getKoders()
            }
        }
    })
    xhr.open("POST", "https://api-13va-default-rtdb.firebaseio.com/.json", true)
    xhr.send(JSON.stringify(koderObject))
}

const deleteKoder = (koderId) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
                getKoders()
            }
        }
    })
   xhr.open("DELETE", "https://api-13va-default-rtdb.firebaseio.com/"+koderId+".json", true)
   xhr.send()
}

document.getElementById("btn-agregar").addEventListener("click", (event)=> {
     let newKoder = {}
      document.querySelectorAll("form#added-koders input").forEach((input) => {
        //   console.log(input.name, input.value)
          newKoder[input.name] = input.value
        //   console.log(newKoder)
      })
      createKoder(newKoder)
      //printTable()
      //getKoders()
})
const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    // let textNode = document.createTextNode(text)
    // node.appendChild(textNode)
    return node
}

const removeKoder = (event) => {
    // console.log("Eliminando... jeje")
    // Eliminar del array
    let positionKoder = event.target.dataset.koderIndex
   // console.log(positionKoder)
     deleteKoder(positionKoder)
    //kodersArray.splice(positionKoder, 1)
    //printTable()
   
}

//const printTable = (arrayObject,arrayId) => {
 const printTable = () => {
    let tBody = document.getElementById("list-koders")    
    while(tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild)
    }    
   //arrayObject.forEach((koder, index) => {
        kodersArray.forEach((koder, index) => { 
        let {name, lastName} = koder      
        let tr = document.createElement("tr")
        let tdIndex = createNode("td", index + 1)
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", lastName)
        let tdButton = document.createElement("td")
        let button = createNode("button", "Eliminar")
           button.classList.add("btn", "btn-danger")               
           button.setAttribute("data-koder-index", koderId[index].id)
           button.addEventListener("click", removeKoder)
           tdButton.appendChild(button)        
        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)
        tBody.appendChild(tr)
    })
}
printTable()