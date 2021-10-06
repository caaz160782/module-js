
let imgArray = [
    "https://picsum.photos/id/169/500/300",
    "https://picsum.photos/id/170/500/300",
    "https://picsum.photos/id/171/500/300",
    "https://picsum.photos/id/172/500/300"
]

let positionCurrent = 0


const setImgSrc = (src) => {
    $(".gallery-wrapper img").attr("src", src).fadeTo('slow', 0, () => {
        $(".gallery-wrapper img").attr("src", src).fadeTo('slow', 1)
    })
}

const setButtonsState = () => {
    // estamos en la primara imagen
    positionCurrent === 0
     ? $(".backward").prop("disabled", true)
     : $(".backward").prop("disabled", false)

    // cuando identifiquemos la ultima imagen
    positionCurrent === imgArray.length - 1
     ? ($(".forward").prop("disabled", true), $(".add-images").removeClass("d-none"))
     : ($(".forward").prop("disabled", false), $(".add-images").addClass("d-none"))
}

const forward = () => {
    positionCurrent++
    let src = imgArray[positionCurrent]
    setImgSrc(src)
    setButtonsState()
}

const backward = () => {
    positionCurrent--
    let src = imgArray[positionCurrent]
    setImgSrc(src)
    setButtonsState()
}

$(".forward").click(forward)
$(".backward").click(backward)

$(".add-images").click(()=>{
    /*let imgArr2= [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkG8nhba3cz1AkmzJUJerPYdjVgk9nQCaMg&usqp=CAU", 
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEjaLquQ38Bmm-2W_Pgu1q6PXB7sC32impg&usqp=CAU", 
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A2uPoIft1gvtqS4DBeyqqAE7cR84ViUgCw&usqp=CAU",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU" ] 
*/
    //let numeroAleatorio= parseInt(Math.random()*200)                    
   // console.log(numeroAleatorio)
    for(let i=0; i<10 ;i++) 
    {
     let numeroAleatorio= parseInt(Math.random()*200) 
     let url= `https://picsum.photos/id/${numeroAleatorio}/500/300`
     imgArray=[...imgArray, url ]
    }
    //imgArray=[...imgArray, imgArr2 ]
    /*imgArr2.forEach((imagen)=>{
        imgArray=[...imgArray, imagen ]
    })*/
    //console.log(imgArray)
    setButtonsState()
    
    
})


// inicializando el valor de la imagen
// setImgSrc(imgArray[positionCurrent])
setButtonsState()