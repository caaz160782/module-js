let  imagenes = new Array("https://picsum.photos/200/300?random=1", 
                        "https://picsum.photos/200/300?random=2",
                        "https://picsum.photos/200/300?random=3",
                        "https://picsum.photos/200/300?random=4",
                        "https://picsum.photos/200/300?random=5",
                        "https://picsum.photos/200/300?random=6" )

 let cont=0
 let img= document.getElementById("imagen")
 let counter= document.getElementById("counter")
/*
 const muestraImages =() =>{
    let divImg = document.getElementById("carrusel")
    imagenes.forEach((imagen,index) =>{
    let img = document.createElement("img")
    img.setAttribute("id",index)
    img.setAttribute("src", imagen);
    divImg.appendChild(img)
   })
 }
 muestraImages()*/ 
 $(counter).text(imagenes.length-1)

 $("#atras").click(function(){
    if(cont > 0){
      img.src= imagenes[cont -1]
      cont --
      $( "#adelante" ).prop( "disabled",false );
      $(counter).text(`${cont+1} /${imagenes.length-1}`)
    }
     else{
      $( "#atras" ).prop( "disabled",true );
      $( "#adelante" ).prop( "disabled",false );
     }                           
   }); 
 $("#adelante").click(function(){
   if(cont < imagenes.length -1){
      $( "#atras" ).prop( "disabled",false );
      img.src= imagenes[cont +1]
      cont ++
      $(counter).text(`${cont} /${imagenes.length-1}`)
    }
     else{
      $( "#atras" ).prop( "disabled",false );
      $( "#adelante" ).prop( "disabled",true );
     }    
 });
