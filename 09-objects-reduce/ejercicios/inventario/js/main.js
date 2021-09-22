const products = [
    {
        name: 'Coca lata 355ml',
        description: 'Coca lata 355ml',
        price: 11,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 1lt',
        description: 'Boing Mango 1lt',
        price: 18,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 3lt No Retornable',
        description: 'Coca-Cola 3lt No Retornable',
        price: 40,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 600ml',
        description: 'Coca-Cola 600ml',
        price: 14,
        type: 'drink'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      price: 27.5,
      type: 'chip'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      price: 25.5,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Jalapeño 100 g',
      description: 'Botanas Chips Papas Jalapeño 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Botana Paketaxo Quexo 215 g',
      description: 'Botana Paketaxo Quexo 215 g',
      price: 52.8,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Incógnita 64 g',
      description: 'Botana Doritos Incógnita 64 g',
      price: 18.15,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Sal y Limón 57 g',
      description: 'Botana Fritos Sal y Limón 57 g',
      price: 15.4,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 58 g',
      description: 'Botana Doritos Nacho 58 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Flamin Hot 62 g',
      description: 'Botana Doritos Flamin Hot 62 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Fuego Limón 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 42 g',
      description: 'Papas Sabritas Original 42 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Adobadas 42 g',
      description: 'Papas Sabritas Adobadas 42 g',
      price: 16.5,
      type: 'chip'
    },
    {
      name: 'Cacahuates Hot Nuts Multintenso 50 g',
      description: 'Cacahuates Hot Nuts Multintenso 50 g',
      price: 11,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Chorizo Chipotle 57 g',
      description: 'Botana Fritos Chorizo Chipotle 57 g',
      price: 15.95,
      type: 'chip'
    },
    {
      name: 'Botana Chips Sal de Mar Bolsa 170 g',
      description: 'Botana Chips Sal de Mar Bolsa 170 g',
      price: 49.5,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Poffs 100 g',
      description: 'Botana Cheetos Poffs 100 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Fritas Stax Cheddar 156 g',
      description: 'Papas Fritas Stax Cheddar 156 g',
      price: 47.85,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 240 g',
      description: 'Papas Sabritas Original 240 g',
      price: 75.35,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 370 g',
      description: 'Botana Doritos Nacho 370 g',
      price: 82.5,
      type: 'chip'
    },
    {
      name: 'Chicharrón de Cerdo Sabritas 115 g',
      description: 'Chicharrón de Cerdo Sabritas 115 g',
      price: 55,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Torciditos 150 g',
      description: 'Botana Cheetos Torciditos 150 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Ruffles Queso 290 G',
      description: 'Papas Ruffles Queso 290 G',
      price: 71.5,
      type: 'chip'
    },
    {
      name: 'Dip Tostitos Queso Suave 255 g',
      description: 'Dip Tostitos Queso Suave 255 g',
      price: 69.3,
      type: 'chip'
    }
  ]
/*
 Práctica:
   - obtener los productos de tipo chips and drink
   - obtener todos los productos < a $50 y obtener >= $50
   - obtener el inventario total en valor de todos los productos
   - obtener el inventario total en valor de los productos tipo chips
   - obtener el inventario total en valor de los productos tipo drink
*/
//chips&drink 
const chipsAndDrinks = (arrayProducts ) => {
  let chipAndDrink= arrayProducts.filter(( products) => products.type ==="chip" || products.type ==="drink")
      return chipAndDrink 
}
console.log( chipsAndDrinks(products) )

//dinamico
const dinamicChipDrink = (arrayProducts,find ) => {
  let  product= arrayProducts.filter(( products) => products.type === find)
      return product 
}
console.log( dinamicChipDrink(products,"drink"))

console.log( "-----------Products-----------------------")

const productsOrdered = (arrayProducts) =>{
  let products =arrayProducts.reduce((accum,product)=> {
      const {type}=product
      return !accum[type]
             ? {...accum, [type]:[product] }   
             : {...accum, [type]:[...accum[type],product] } 

  },{})
  //console.log( products)
  return products

}

console.log( productsOrdered(products))


///precios
const precios = (arrayProducts ) => {
  let priceProducts= arrayProducts.filter(( products) => products.price < 50 || products.price >=50)
      return priceProducts 
}
console.log( precios(products) )


const getProducts= (isMayor,arrayProducts) => {
  return arrayProducts.filter( (product) => isMayor ?  product.price>=50 : product.price<50 )
}

console.log( getProducts(false, products) )

////inventario total
const inventaryTotal = (arrayProducts ) => {
  let inventTotal= arrayProducts.map(( products) => products.price)
  const total = inventTotal.reduce((accum, number)=> {
        return accum + number
    }, 0)    
  return total      
}
console.log( inventaryTotal(products) )

////inventario * chips
const inventaryTotalChip = (arrayProducts ) => {
  let inventTotalChip= arrayProducts.filter(( products) => products.type ==="chip")
  let inventTotal= inventTotalChip.map(( inventTotalChip) => inventTotalChip.price)    
  const totalChip = inventTotal.reduce((accum, number)=> {
          return accum + number
    }, 0)    
  return totalChip      
}
console.log( inventaryTotalChip(products) )

////inventario * drink
const inventaryTotalDrink = (arrayProducts ) => {
  let inventTotalDrink= arrayProducts.filter(( products) => products.type ==="drink")
  let inventTotal= inventTotalDrink.map(( TotalDrink) => TotalDrink.price)           
  const totaDrink = inventTotal.reduce((accum, number)=> {
         return accum + number
    }, 0)    
  return totaDrink      
}
console.log( inventaryTotalDrink(products) )

////dinamico
const inventaryTotalDinamic = (arrayProducts, condicion ) => {
  let inventTotalDinamic= arrayProducts.filter(( products) => products.type ===condicion)
  let inventTotal= inventTotalDinamic.map(( Total) => Total.price)           
  const total = inventTotal.reduce((accum, number)=> {
         return accum + number
    }, 0)    
  return total      
}
console.log( inventaryTotalDinamic(products,"drink") )

///con solo reduce
const totalDrink =products.reduce((accum,product) =>{
  //retorna accum por que si se regresa otro valor se perderia el acumulado
  return product.type === "drink" ? accum +product.price: accum
},0)
console.log( totalDrink )

/*
////dinamico
const inventaryTotalDinamic = (arrayProducts, condicion ) => {
  const totalDrink =products.reduce((accum,product) =>{
    //retorna accum por que si se regresa otro valor se perderia el acumulado
    return product.type === "drink" ? accum +product.price: accum
  },0)
 
}

console.log( inventaryTotalDinamic(products,"drink") )
*/