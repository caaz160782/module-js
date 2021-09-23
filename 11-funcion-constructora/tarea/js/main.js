
const productsGral = [
    {
        name: 'Coca lata 355ml',
        description: 'Coca lata 355ml',
        priceCost: 4,
        clasificacion: 'drink',         
        priceCostlastSixMonths:[3.5,3.5,4,4,4,4]  ,
        quantitySoldLastWeek: 60,
        fechaCaducidad:"2021/10/03" ,
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        priceCost: 5,
        clasificacion: 'drink',
        priceCostlastSixMonths:[3,3,4,4,5,5]  ,
        quantitySoldLastWeek: 30,
        fechaCaducidad:"2021/11/20" ,
    },
    {
        name: 'Boing Mango 1lt',
        description: 'Boing Mango 1lt',
        priceCost: 9,
        clasificacion: 'drink', 
        priceCostlastSixMonths:[7,7,8,8,8,9]  ,
        quantitySoldLastWeek: 60,
        fechaCaducidad:"2021/12/23" ,
    },
    {
        name: 'Coca-Cola 3lt No Retornable',
        description: 'Coca-Cola 3lt No Retornable',
        priceCost: 20,
        clasificacion: 'drink',
        priceCostlastSixMonths:[15,15,15,18,19,20]  ,
        quantitySoldLastWeek: 10,
        fechaCaducidad:"2021/12/31" ,
    },
    {
        name: 'Coca-Cola 600ml',
        description: 'Coca-Cola 600ml',
        priceCost: 5,
        clasificacion: 'drink',
        priceCostlastSixMonths:[3,3,3,4,5,5]  ,
        quantitySoldLastWeek: 40,
        fechaCaducidad:"2021/11/30" ,
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      priceCost: 7,
      clasificacion: 'chip',
      priceCostlastSixMonths:[5,5,6,6,6,7]  ,
      quantitySoldLastWeek: 80,
      fechaCaducidad:"2021/10/15" ,
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      priceCost: 8,
      clasificacion: 'chip',
      priceCostlastSixMonths:[7,7,7,7.5,8,8]  ,
      quantitySoldLastWeek: 20,
      fechaCaducidad:"2021/12/23" ,
    },
    {
      name: 'Botanas Chips Papas Jalapeño 100 g',
      description: 'Botanas Chips Papas Jalapeño 100 g',
      priceCost: 10,
      clasificacion: 'chip',
      priceCostlastSixMonths:[9,9,10,10,10,10]  ,
      quantitySoldLastWeek: 10,
      fechaCaducidad:"2021/11/25" ,
    },
    {
      name: 'Botana Paketaxo Quexo 215 g',
      description: 'Botana Paketaxo Quexo 215 g',
      priceCost: 20,
      clasificacion: 'chip',
      priceCostlastSixMonths:[15,15,15.5,15.5,20,20]  ,
      quantitySoldLastWeek: 8,
      fechaCaducidad:"2021/10/30" ,
    },
    {
      name: 'Botana Doritos Incógnita 64 g',
      description: 'Botana Doritos Incógnita 64 g',
      priceCost: 6,
      clasificacion: 'chip',
      priceCostlastSixMonths:[5,5,5.5,5.5,6,6]  ,
      quantitySoldLastWeek: 20,
      fechaCaducidad:"2021/12/23" ,
    },
    {
      name: 'Botana Fritos Sal y Limón 57 g',
      description: 'Botana Fritos Sal y Limón 57 g',
      priceCost: 5.4,
      clasificacion: 'chip',
      priceCostlastSixMonths:[2,2,3,4,5,5.4]  ,
      quantitySoldLastWeek: 4,
      fechaCaducidad:"2022/01/15" ,
    },
    {
      name: 'Botana Doritos Nacho 58 g',
      description: 'Botana Doritos Nacho 58 g',
      priceCost: 6,
      clasificacion: 'chip',
      priceCostlastSixMonths:[4,4,5,5,5.5,6]  ,
      quantitySoldLastWeek: 70,
      fechaCaducidad:"2021/11/01" ,
    },
    {
      name: 'Botana Doritos Flamin Hot 62 g',
      description: 'Botana Doritos Flamin Hot 62 g',
      priceCost: 8,
      clasificacion: 'chip',
      priceCostlastSixMonths:[6,7,7,7.5,7.5,8]  ,
      quantitySoldLastWeek: 50,
      fechaCaducidad:"2021/10/23" ,
    },
    {
      name: 'Botanas Chips Papas Fuego Limón 100 g',
      priceCost: 10,
      clasificacion: 'chip',
      priceCostlastSixMonths:[8,8,9,9,9.5,10]  ,
      quantitySoldLastWeek: 10,
      fechaCaducidad:"2021/09/30" ,
    },
    {
      name: 'Papas Sabritas Original 42 g',
      description: 'Papas Sabritas Original 42 g',
      priceCost: 9,
      clasificacion: 'chip',
      priceCostlastSixMonths:[8,8,9,9,9,9]  ,
      quantitySoldLastWeek: 90,
      fechaCaducidad:"2021/12/31" ,
    },
    {
      name: 'Papas Sabritas Adobadas 42 g',
      description: 'Papas Sabritas Adobadas 42 g',
      priceCost: 5,
      clasificacion: 'chip',
      priceCostlastSixMonths:[3.5,4,4,4.5,5,5]  ,
      quantitySoldLastWeek: 65,
      fechaCaducidad:"2021/11/03" ,
    },
    {
      name: 'Cacahuates Hot Nuts Multintenso 50 g',
      description: 'Cacahuates Hot Nuts Multintenso 50 g',
      priceCost: 4,
      clasificacion: 'chip',
      priceCostlastSixMonths:[3,3,3,3.5,3.5,4]  ,
      quantitySoldLastWeek: 20,
      fechaCaducidad:"2021/10/23" ,
    },
    {
      name: 'Botana Fritos Chorizo Chipotle 57 g',
      description: 'Botana Fritos Chorizo Chipotle 57 g',
      priceCost: 5,
      clasificacion: 'chip',
      priceCostlastSixMonths:[4,4,4,5,5,5]  ,
      quantitySoldLastWeek: 8,
      fechaCaducidad:"2021/11/20" ,      
    },
    {
      name: 'Botana Chips Sal de Mar Bolsa 170 g',
      description: 'Botana Chips Sal de Mar Bolsa 170 g',
      priceCost: 12,
      clasificacion: 'chip',
      priceCostlastSixMonths:[10,10,11,11,11.5,12]  ,
      quantitySoldLastWeek: 35,
      fechaCaducidad:"2021/09/26" ,
    },
    {
      name: 'Botana Cheetos Poffs 100 g',
      description: 'Botana Cheetos Poffs 100 g',
      priceCost: 12,
      clasificacion: 'chip',
      priceCostlastSixMonths:[10,10,10,11,11,12]  ,
      quantitySoldLastWeek: 60,
      fechaCaducidad:"2021/12/12" ,
    },
    {
      name: 'Papas Fritas Stax Cheddar 156 g',
      description: 'Papas Fritas Stax Cheddar 156 g',
      priceCost: 16,
      clasificacion: 'chip',
      priceCostlastSixMonths:[15,15,16,16,16,16]  ,
      quantitySoldLastWeek: 10,
      fechaCaducidad:"2021/11/03" ,
    },
    {
      name: 'Papas Sabritas Original 240 g',
      description: 'Papas Sabritas Original 240 g',
      priceCost: 25,
      clasificacion: 'chip',
      priceCostlastSixMonths:[20,22,24,24.5,24.5,25]  ,
      quantitySoldLastWeek: 100,
      fechaCaducidad:"2021/10/25" ,
    },
    {
      name: 'Botana Doritos Nacho 370 g',
      description: 'Botana Doritos Nacho 370 g',
      priceCost: 30,
      clasificacion: 'chip',
      priceCostlastSixMonths:[20,25,25.5,30,30,30]  ,
      quantitySoldLastWeek: 4,
      fechaCaducidad:"2022/01/22" ,
    },
    {
      name: 'Chicharrón de Cerdo Sabritas 115 g',
      description: 'Chicharrón de Cerdo Sabritas 115 g',
      priceCost: 18,
      clasificacion: 'chip',
      priceCostlastSixMonths:[18,18,18,18,18,18]  ,
      quantitySoldLastWeek: 10,
      fechaCaducidad:"2021/12/26" ,
    },
    {
      name: 'Botana Cheetos Torciditos 150 g',
      description: 'Botana Cheetos Torciditos 150 g',
      priceCost: 12,
      clasificacion: 'chip',
      priceCostlastSixMonths:[10,10,10,10,11,12]  ,
      quantitySoldLastWeek: 68,
      fechaCaducidad:"2021/11/30" ,
    },
    {
      name: 'Papas Ruffles Queso 290 G',
      description: 'Papas Ruffles Queso 290 G',
      priceCost: 25,
      clasificacion: 'chip',
      priceCostlastSixMonths:[24,24,24.5,24.5,25,25]  ,
      quantitySoldLastWeek: 40,
      fechaCaducidad:"2021/12/02" ,
    },
    {
      name: 'Dip Tostitos Queso Suave 255 g',
      description: 'Dip Tostitos Queso Suave 255 g',
      priceCost: 30,
      clasificacion: 'chip',
      priceCostlastSixMonths:[28,28.5,29,29.5,30,30]  ,
      quantitySoldLastWeek: 5,
      fechaCaducidad:"2021/12/31" ,
    }
  ]
/*
Práctica:
Generar una colección de Objetos de tipo Product que tenga las siguientes propiedades:
    nombre
    description
    precio de costo
    clasificación
    porcentaje de Ganancia
    precio de venta
    precios de los ultimos 6 meses en una colección [23,12,45,56,12,10]
    Cantidad vendidas en la ultima semana
    Fecha de Caducidad
    
💫 De igual forma es necesario realizar lo siguientes calculos por cada Producto:
- Calcular el precio de Venta y asignarlo a su correspondiente propiedad
- Obtener los diás restantes para que caduque el producto
- Obtener el promedio de precio de los ultimos 6 meses

💫 Una vez obtenido la colleción de Productos obtener lo siguiente:
- Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
- Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
- Los productos que se encuentren a menos de 15 días proximas a caducar

Happy Koding 🚀
*/
/*
       name: 'Dip Tostitos Queso Suave 255 g',
      description: 'Dip Tostitos Queso Suave 255 g',
      priceCost: 69.3,
      clasificacion: 'chip',
      priceCostlastSixMonths:[10,10,10,10,11,11]  ,
      quantitySoldLastWeek: 40,
      fechaCaducidad:"2021/12/23" ,
*/

function Product(name, description,priceCost,clasificacion, priceCostlastSixMonths,quantitySoldLastWeek,fechaCaducidad) {
    this.name = name
    this.description = description
    this.priceCost = priceCost
    this.clasificacion = clasificacion
    this.precioVenta = this.precioVenta()
    this.porcentajeGanancia = this.ganancia()
    this.priceCostlastSixMonths = priceCostlastSixMonths    
    this.quantitySoldLastWeek = quantitySoldLastWeek        
    this.fechaCaducidad = fechaCaducidad    
    this.expireProduct=this.restExpiration()
    this.promedio=this.promedioPrecio()
}

Product.prototype.precioVenta= function () {
  let priceSale = this.priceCost*3
  return priceSale
}

Product.prototype.ganancia= function () {
  let  gain= this.precioVenta -this.priceCost
  return gain
}

Product.prototype.restExpiration= function () {
  let hoy = new Date();
  let fechaCaducidad = new Date(this.fechaCaducidad);
  let falta = hoy.getFullYear() - fechaCaducidad.getFullYear();
	
  let diasdif= fechaCaducidad.getTime()-hoy.getTime();
	let contdias = Math.round(diasdif/(1000*60*60*24));

  let m = hoy.getMonth() - fechaCaducidad.getMonth();
  //return `faltan ${falta} años ${m} meses   `;
  return contdias;
}

Product.prototype.promedioPrecio =function () {
  const suma = this.priceCostlastSixMonths.reduce( (accum,price) => { 
      return accum + price     
  },0)
 return suma/this.priceCostlastSixMonths.length 
}

let productos =productsGral.map((productos)=> new Product(productos.name,
                                                          productos.description,
                                                          productos.priceCost,
                                                          productos.clasificacion,
                                                          productos.priceCostlastSixMonths,
                                                          productos.quantitySoldLastWeek,
                                                          productos.fechaCaducidad))

console.log(productos)

/*
let productos = productsGral.map((productos)=> {
   let producto = new Product(productos)
   return producto
 })
 console.log(productos)
*/

/*

💫 Una vez obtenido la colleción de Productos obtener lo siguiente:
- Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
- Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
- Los productos que se encuentren a menos de 15 días proximas a caducar
*/


const mas50 = (product) => { 
  let products =product.reduce( (accum,producto) => {
      return producto.quantitySoldLastWeek >50
            ?[...accum, producto]        
            :accum 
    },[])
  return products  
}  
console.log( mas50(productos))
//menor a 10
const menor10 = (product) => { 
  let products =product.reduce( (accum,producto) => {
      return producto.quantitySoldLastWeek <10
            ?[...accum, producto]        
            :accum 
    },[])
  return products  
}  
console.log( menor10(productos))
///menos 15 dias
const menor15Days = (product) => { 
  let products =product.reduce( (accum,producto) => {
      return producto.expireProduct <15
            ?[...accum, producto]        
            :accum 
    },[])
  return products  
}  
console.log( menor15Days(productos))