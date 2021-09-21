let numbersArrays = [20, 15, 2, 5]

const total = numbersArrays.reduce((accum, number)=> {
    // console.log(accum)
    return accum + number
}, 0)

console.log(total)


const arrayFruits = [
     "banana",
     "banana",
     "fresa", 
     "naranja", 
     "chicozapote", 
     "banana",
     "pera",
     "pera",
    ]

/*
{
    banana: 2,
    fresa: 1,
    naranja: 2,
    chicozapote: 1,
    pera: 2
}
*/

const result = arrayFruits.reduce((accum, fruit, index)=>{
    let count = accum[fruit] ? accum[fruit] + 1 : 1
    console.log(count)
    // console.log(accum)
    return {
        ...accum,
        [fruit]: count
    }
}, {})

console.log(result)
