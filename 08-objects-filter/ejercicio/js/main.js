/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
            
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

/////////////////////
console.log(songsData)
///////imprimir bandas

//metodo largo map

const band = (songArray ) => {
     let nombreBandas= songArray.map( (songObject) => { 
      let banda={    
         band: songObject.band           
         }
        return banda
     })   
     return nombreBandas
   }
let nameBands = band(songsData)
//console.log(nameBands)

//listado bandas
const printBandas = (songArray ) => {
    let nombreBandas= songArray.map( (songObject) =>  songObject.band)
    return nombreBandas 
}
let nameBands1=printBandas(songsData)
//console.log(nameBands1)

/*- Agrupar el nombres de la bandas, que no esten repetidas*/
console.log("-----Agrupado por bandas sin repetir------------")
const bandNoRepeat1 = (nameBands1)=>{
    let bandas= nameBands1.filter( (nombreBandas,index) =>{
        return nameBands1.indexOf(nombreBandas) === index    
    })
    return bandas
}
console.log( bandNoRepeat1(nameBands1) )

///se creo como objeto para el group By
const bandNoRepeat = (nameBands)=>{
    let bandas= nameBands.filter( (nombreBandas,index) =>{
     //let  foundPositionGroup = nameBandsWithSong.findIndex(item => item.band === songsData.band)
     let findPosBand = nameBands.findIndex(item => item.band === nombreBandas.band ) 
      if (findPosBand === index )
         { 
           let nombreBanda= {
                           band: nombreBandas                     
                           }              
           return nombreBanda   
         }   
    })
    return bandas
}
//console.log(bandNoRepeat(nameBands))
let nameBandNoRepeat=bandNoRepeat(nameBands)


/*- Agrupar las canciones por una banda*/
console.log("-----canciones por banda------------")
/*
 bandas con canciones
const bandWithSongs = (songArray) => {
    let nombreBandas= songArray.map( (songObject) => { 
    let bandWithSong={
           band: songObject.band ,
           song: songObject.name      
          }             
       return bandWithSong
    })   
    return nombreBandas
  }
let nameBandsWithSong = bandWithSongs(songsData)
console.log(nameBandsWithSong)*/
/*
console.log("---------Demo-----------")
let grupo=
[
 {
    grupo:"mana",
    canciones:["sondejugaran","otra"]
 },
 {
    grupo:"mercurio",
    canciones:["sonan","ot"]
 }
]
let cancio =grupo[0].canciones[0]
grupo[0].canciones.push("bonita")
grupo[0].record= ["prueba"]
//grupo[0].record.push("bonita")
  console.log(cancio)
  console.log(grupo)
*/
const groupSongForBand = ( songArray,nameBandNoRepeat )=>{
    let canciones= nameBandNoRepeat.map( (bandNorepeat ,index) =>{
        nameBandNoRepeat[index].canciones=[]    
        songArray.forEach( (songObject)=> {
          if(bandNorepeat.band === songObject.band){
             let findSong = nameBandNoRepeat.findIndex(item => item.band === songObject.name )     
             if(findSong === -1){
                nameBandNoRepeat[index].canciones.push(songObject.name)
             }           
        }                              
      }) 
      return nameBandNoRepeat           
    }) 
 //   console.log(nameBandNoRepeat)            
return canciones
}
console.log( groupSongForBand( songsData,nameBandNoRepeat ) )
//- Agrupar las canciones por una banda

console.log("-----buscar por una banda------------")
const cancionesXbanda = ( arraySongs, nameBanda )=>{
    //console.log(arraySongs);
   let canciones= arraySongs.filter( (arraySongsBand) =>{
        if( arraySongsBand.band === nameBanda)
        {
            return arraySongsBand.name
        }
    })
    return canciones
}
console.log(cancionesXbanda(songsData,'Enanitos Verdes'))


//- La cancion con más reproducciones
console.log("---------most repro------------------")

const  songMostRepro= ( songsData  )=>{
      
      let repro= songsData.map( (songObject) =>  songObject.statistics.reproductions)
       //console.log( repro )
      let moreRepro= Math.max( ...repro )
     // console.log (moreRepro)
      let mostRepo= songsData.filter( (static) =>{
        if(static.statistics.reproductions >= moreRepro   )        
        {
            return songsData
        }      
    })
    return mostRepo
}
console.log(songMostRepro( songsData ))

console.log("----------------likes-----------------")
const  songMostLikes= ( songsData  )=>{      
      let like= songsData.map( (songObject) =>  songObject.statistics.likes)
      let moreLike= Math.max( ...like )
     // console.log (moreRepro)
      let mostLike= songsData.filter( (static) =>{
        if(static.statistics.likes >= moreLike   )        
        {
            return songsData
        }      
    })
    return mostLike
}
console.log(songMostLikes( songsData ))

