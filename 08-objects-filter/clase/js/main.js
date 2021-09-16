/*let numberArray=[2,3,6,5,10]
let doubleNumbers= numberArray.map((number)=>{
    return number%2
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

//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

var users = [
    { id: 1, name: "ted" },
    { id: 1, name: "ted" },
    { id: 1, name: "bob" },
    { id: 3, name: "sara" },
    { id: 4, name: "test" },
    { id: 4, name: "test" },
    { id: 5, name: "abc" },
    { id: 6, name: "abc" },
    { id: 7, name: "test2" },
    { id: 8, name: "test1" },
    { id: 8, name: "test1" }
    ];
    var array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];

console.log("1" +users)

var filteruniquebyID = users.filter(
    (v, i, a) => a.findIndex(t => t.id === v.id) === i
);

var filteruniquebyIDName = users.filter(
    (v, i, a) => a.findIndex(t => 
         t.name === v.name) === i
);

var filteruniquebyIDName1 = users.filter(
    (v, i, a) => a.findIndex(t => JSON.stringify(t) === JSON.stringify(v)) === i
);

var list = array.filter((x, i, a) => a.indexOf(x) == i);

console.log("filtermethods");

console.log("array unique", list);

console.log("filter unique with id", JSON.stringify(filteruniquebyID));

console.log("filter unique with multiple properties", JSON.stringify(filteruniquebyIDName));

console.log("filter unique", JSON.stringify(filteruniquebyIDName1));

var wizards = [
	{
		name: 'Saruman',
		color: 'white'
	},
	{
		name: 'Gandalf',
		color: 'gray'
	},
	{
		name: 'Radagast',
		color: 'brown'
	},
	{
		name: 'Alatar',
		color: 'blue'
	},
	{
		name: 'Radagast',
		color: 'blue'
	}
];

// Find Radagast
var radagast = wizards.findIndex( function (wizard) {
	return wizard.name === 'Radagast';
});

console.log(radagast);*/

