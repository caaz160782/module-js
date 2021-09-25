let h1 = document.createElement("h1")
let text =document.createTextNode("hola mundo")

h1.appendChild(text)
console.log(h1)

document.body.appendChild(h1)

///////////////////////
let namesArray=["juan","meritao","luis","alfonso"]

let ul = document.createElement("ul")

namesArray.forEach(name =>{
    let li = document.createElement("li")
    let text= document.createTextNode(name)
    li.appendChild(text)
    ul.appendChild(li)
})
document.body.appendChild(ul)