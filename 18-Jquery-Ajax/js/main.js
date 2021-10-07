//crear mentor
const createMentor = (mentorObject) => {
    $.ajax({
            method: "POST", 
            url: "https://api-13va-default-rtdb.firebaseio.com/toño/mentors.json",
            data: JSON.stringify(mentorObject),
            success: (response)=> {
                
                //printCard(response)
                printCard(getMentor())

            },
            error: error => {
          }
        })
}

const updateMentor = (keyMentor, newDatamentor) => {
        $.ajax({
            method: "PATCH",
            url: `https://api-13va-default-rtdb.firebaseio.com/toño/mentors/${keyMentor}.json`,
            data: JSON.stringify(newDatamentor),
            success: (response)=> {
                printCard(getMentor())
            },
            error: error => {
    
            }
        })
    }

//obtener mentores
const getMentor = () => {
        let mentors
        $.ajax({
            method: "GET",
            url: "https://api-13va-default-rtdb.firebaseio.com/toño/mentors.json",
            success: response => { 
                // console.log('response al terminar la peticion',response)
                mentors = response
            },
            error: error => {
                console.log(error)
            },
            async: false
        })
        // console.log(products)
        return mentors
}
//buscar mentor
const findMentor = (idMentor) => {
    let mentor
    $.ajax({
        method: "GET",
        url: `https://api-13va-default-rtdb.firebaseio.com/toño/mentors/${idMentor}.json`,
        success: response => { 
            // console.log('response al terminar la peticion',response)
            mentor = response
        },
        error: error => {
            console.log(error)
        },
        async: false
    })
    // console.log(products)
    return mentor
}
//ajax elimina mentor
 const delMentor = keyMentor => {
     $.ajax({
         method: "DELETE", 
         url: `https://api-13va-default-rtdb.firebaseio.com/toño/mentors/${keyMentor}.json`,         
         success: (response) => {
            printCard(getMentor())
        },
         error: error => {

         }
     })
 }
//eliminar Mentor
const deleteMentor = (e) => {
     console.log("Eliminando... jeje")
     let idMentor = e.target.dataset.mentorIndex
     delMentor(idMentor)  
     printCard(getMentor())
}

//edita Mentor
const muestraModal = (e) => { 
   let idMentor = e.target.dataset.mentorIndex
   let mentor= findMentor(idMentor)
   //console.log(mentor.git)
   $("#formEdit #inputName").val(mentor.name)
   $("#formEdit #inputPhone").val(mentor.phone)
   $("#formEdit #inputGit").val(mentor.git)
   $("#formEdit #inputGitUrl").val(mentor.gitUrl)
   let editarModal = document.getElementById("editarModal")   
   editarModal.setAttribute("data-Mentor-index", idMentor)
   $('#modalEdit').modal('show')  
}

//optiene values de form
const getForm=(frm)=>{
    let mentor = {}
    $(`#${frm} input`).each(function(index){
       mentor[$(this).attr("name")] = $(this).val()            
     })
    $('input[type="text"]').val('');
    return mentor
}

//let mentorObject=getMentor()

//pintar card
const printCard = (mentorObject) => {
    let rowCard = document.getElementById("rowCards")    

    while(rowCard.lastElementChild) {
        rowCard.removeChild(rowCard.lastElementChild)
    }  

    for (const key in mentorObject) {
      let{name,phone,git,gitUrl} = mentorObject[key]
      
      let divConCard= document.createElement("div")
      divConCard.classList.add("col","mt-3")               
      divConCard.setAttribute("id","contentCard")
       
      let divCard= document.createElement("div") 
      divCard.classList.add("card") 
      
      let divCardBody= document.createElement("div") 
      divCardBody.classList.add("card-body")  

      let h5= document.createElement("h5") 
       nombre = document.createTextNode(name);
       h5.classList.add("card-title")  
       h5.appendChild(nombre) 
       divCardBody.appendChild(h5)       
      

      let ul=  document.createElement("ul") 
      ul.classList.add("list-group","list-group-flush")  

      let liPhone=  document.createElement("li") 
      liPhone.classList.add("list-group-item")  
      phone = document.createTextNode(phone);  
      liPhone.appendChild(phone)  
      ul.appendChild(liPhone)


      let liGit=  document.createElement("li") 
      liGit.classList.add("list-group-item")  
      git = document.createTextNode(git);  
      liGit.appendChild(git)  
      ul.appendChild(liGit)

      let liGitUrl=  document.createElement("li") 
      liGitUrl.classList.add("list-group-item")  
      gitUrl = document.createTextNode(gitUrl);  
      liGitUrl.appendChild(gitUrl)  
      ul.appendChild(liGitUrl)

      let divCardFoot= document.createElement("div") 
      divCardFoot.classList.add("card-footer","text-muted","d-flex","justify-content-between") 

      let butEliminar =document.createElement("button") 
        txtbtnElminar =document.createTextNode("Eliminar");  
        butEliminar.appendChild(txtbtnElminar) 
        butEliminar.classList.add("btn","btn-danger") 
        butEliminar.setAttribute("data-Mentor-index", key)
        butEliminar.addEventListener("click", deleteMentor)
        divCardFoot.appendChild(butEliminar)

     let butEditar =document.createElement("button") 
        txtbtnEditar =document.createTextNode("Editar");  
        butEditar.appendChild(txtbtnEditar) 
        butEditar.classList.add("btn","btn-info") 
        butEditar.setAttribute("data-Mentor-index", key)
        butEditar.addEventListener("click", muestraModal)
        divCardFoot.appendChild(butEditar)
     
      divCard.appendChild(divCardBody)
      divCard.appendChild(ul)

      divCard.appendChild(divCardFoot)
      divConCard.appendChild(divCard)      
      rowCard.appendChild(divConCard)
    }
}
printCard(getMentor())


//obtener campos de inputs
$("#crear").click(()=>{
  let mentor= getForm("formAdd")
  //console.log(mentor)
  createMentor(mentor)
})

//obtener campos de inputs
$("#editarModal").click((e)=>{
    let mentor= getForm("formEdit")
    let idMentor = e.target.dataset.mentorIndex
    updateMentor(idMentor,mentor)
    $('#modalEdit').modal('hide')
  })


$("#close").click(()=>{
      $('#modalEdit').modal('hide')
  })