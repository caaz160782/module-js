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
/*
const band = (songArray ) => {
     let nombreBandas= songArray.map( (songObject) => { 
     let banda={}    
         banda= songObject.band           
        return banda
     })   
     return nombreBandas
   }
let nameBands = band(songsData)
console.log(nameBands)
*/
//metodo corto map

const printBandas = (songArray ) => {
    let nombreBandas= songArray.map( (songObject) =>  songObject.band)
    return nombreBandas 
}
let nameBands=printBandas(songsData)
//console.log(nameBands)
/*- Agrupar el nombres de la bandas, que no esten repetidas*/
console.log("-----Agrupado por bandas sin repetir------------")

/*
const bandNoRepeat = (nameBands)=>{
    let bandas= nameBands.filter( (nombreBandas,index) =>{
        return nameBands.indexOf(nombreBandas) === index    
    })
    return bandas
}*/

const bandNoRepeat = (nameBands)=>{
    let bandas= nameBands.filter( (nombreBandas,index) =>{
      /*   console.info(nameBands.indexOf(nombreBandas))          
         console.log(nameBands.indexOf(nombreBandas)+" ==="+ index)  
         console.info(nameBands.indexOf(nombreBandas) === index)   */
        if(nameBands.indexOf(nombreBandas) === index )
         {            
          let nombreBanda={}    
          nombreBanda= nombreBandas           
          return nombreBanda     
        }   
    })
    return bandas
}

console.log(bandNoRepeat(nameBands).sort())
let nombreBandas=bandNoRepeat(nameBands)
/*- Agrupar las canciones por una banda*/
console.log("-----canciones ------------")
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
//console.log(nameBandsWithSong)
console.log("---------Demo-----------")

let grupo=[{
    grupo:"mana",
    canciones:["sondejugaran","otra"]
 },
 {
    grupo:"mercurio",
    canciones:["sonan","ot"]
 }
]
console.log(grupo)

/*
const groupSongForBand = ( nameBandsWithSong)=>{
    console.log(nameBandsWithSong)
    //let inx = nameBandsWithSong.findIndex(item => item.band === "Jaguares")
    //console.log(inx)
     let groupForBand= nameBandsWithSong.filter( (songsData,index) =>{
       
      let  foundPositionGroup= nameBandsWithSong.findIndex(item => item.band === songsData.band)
      let  foundPositionSong= nameBandsWithSong.findIndex(item => item.song === songsData.song)
      
     // console.log(foundPositionGroup)
      console.log(foundPositionSong)

      let group ={
                  band:"",
                  song:{}
                }
        if( foundPositionGroup === index  ) 
        {
             group.band=songsData.band               
             group.song=songsData.song                                 
                        
             return  group        
        }
       })
    return groupForBand
}
console.log(groupSongForBand(nameBandsWithSong,nombreBandas))
*/
const groupSongForBand = ( nameBandsWithSong)=>{
    console.log(nameBandsWithSong)
    //let inx = nameBandsWithSong.findIndex(item => item.band === "Jaguares")
    //console.log(inx)
     let groupForBand= nameBandsWithSong.filter( (songsData,index) =>{
       
      let  foundPositionGroup= nameBandsWithSong.findIndex(item => item.band === songsData.band)
      let  foundPositionSong= nameBandsWithSong.findIndex(item => item.song === songsData.song)
      
      let group ={
                  band:"",
                  song:{}
                }
        if( foundPositionGroup === index) 
        {
             group.band=songsData.band               
             group.song=songsData.song                                 
                        
             return  group        
        }
       })
    return groupForBand
}
console.log(groupSongForBand(nameBandsWithSong,nombreBandas))





//- Agrupar las canciones por una banda

/*
console.log("-----canciones por una banda------------")
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
console.log(cancionesXbanda(songsData,'Maná'))

*/




