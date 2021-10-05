let alumno=[]
let alumno1=""

class AlumnoObject{
   
    constructor(name,apellido){
        this.name=name,
        this.apellido=apellido       
    } 
    

}

let eliminaAlumno=(index,array)=> {
   //alert(index)
   array.splice(index, 1);    
  }  

const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    // let textNode = document.createTextNode(text)
    // node.appendChild(textNode)
    return node
}
 
const printTable = (name,apellido,count ) => {
    let tBody = document.getElementById("list-koders")
    /*alumno1.forEach((alumno, index) => {
        let {name, apellido} = alumno*/
        //let index=1
        let tr = document.createElement("tr")
        let tdIndex = createNode("td", count )
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", apellido)
        let tdButton = document.createElement("td")

        let button = createNode("button", "Eliminar")
        button.classList.add("btn", "btn-danger")

        button.addEventListener("click", (e)=> {
            //console.log("Eliminando... jeje")
            // Eliminar del array                
            let td = e.target.parentNode; 
            let tr = td.parentNode;
            let index = Array.from(tr.parentNode.children).indexOf(tr)
            //tr.parentNode.removeChild(tr)
            /*let table = document.getElementById("tabllist-koderseId")
            let row = table.rows[index]
            let index =row.id
            console.log(index)
            */
            document.getElementById("list-koders").deleteRow(index)
            eliminaAlumno(index,alumno)
            console.log(alumno)
        })

        tdButton.appendChild(button)
        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)
        tBody.appendChild(tr)
    /*})*/
}
let inputs = document.querySelectorAll(".form-control")
let btnAgregar = document.getElementById("agregar")


btnAgregar.addEventListener("click", (event)=> {
    let nombre=document.getElementById("inputName").value 
    let apellido=document.getElementById("inputApellido").value 
    if(nombre !== "" && apellido !== ""){
    inputs.forEach((int) => { int.id === "inputName" ? nombre= int.value :  apellido=int.value })
    alumno.push({name:nombre, apellido:apellido })  
    alumno1 =alumno.map((alumno)=> new AlumnoObject(alumno.name,alumno.apellido))
    let count=alumno.length
    document.getElementById("inputName").value = "";
    document.getElementById("inputApellido").value="";
    printTable(nombre,apellido,count)
    console.log(alumno1)
    }else 
    {
      alert("capture nombre o apellido")
    }
})















//let buttons = document.querySelectorAll(".eliminar")







