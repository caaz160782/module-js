let numberArray=[2,3,6,5,10]
let doubleNumbers= numberArray.map((number)=>{
    return number*2
})

console.log(numberArray)
console.log(doubleNumbers)


console.log("----filter---")

const numberPares = numberArray.filter((number)=>{
     if(number %2 === 0){
         return number
     }
} )
console.log(numberPares)

/*const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]*/