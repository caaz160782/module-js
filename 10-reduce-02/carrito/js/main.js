const cartShoppings = [
    {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
    },
    {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    }
]


// Obtener el importe total a pagar del carrito de los productos selecionados
// nombre prodcuto                | cantidad | importe
// Dip Tostitos Queso Suave 255 g |    2     |  138.3
// Boing Mango 500ml              |    2     |  20
// total                                     |   158.3
const ticket =(arrayCartShop) =>{
   //chip
   let Chip= arrayCartShop.filter(( products) => products.type ==="chip")
   let totalChip= Chip.map(( priceChip) => priceChip.price) 
   let sumaChip = totalChip.reduce((accum, number)=> {
    return accum + number
    }, 0)    
   //drink
    let drink= arrayCartShop.filter(( products) => products.type ==="drink")
    let totalDrink= drink.map(( priceDrink) => priceDrink.price) 
    let sumaDrink = totalDrink.reduce((accum, number)=> {
    return accum + number
    }, 0)   
    ///total
    let total= arrayCartShop.map(( price) => price.price) 
    let sumaTotal = total.reduce((accum, number)=> {
    return accum + number
    }, 0)   
    //console.log(sumaTotal);
  
    const result = arrayCartShop.reduce((accum, product, index)=>{
       //accum[product.name]= accum[product.name] ? accum[product.name] + 1 : 1        
       accum[product.name]= accum[product.name] ? accum[product.name] + 1 : 1        
       // console.log(accum[product.name])
        
        return {
            ...accum,
            [product.importe]: sumaChip
        }
     }, {})    
    return result
}
console.log( ticket(cartShoppings) )

let totalCart = productsCart => productsCart.reduce((total, product) => total + product.price ,0);
console.log(totalCart(cartShoppings));