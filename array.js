// Arrays
const trainers=["ash ketchum","misty","brock",10,false,"gray oak"]
let numbers=new Array(1,2,3);
console.log(numbers);
//  indexes in arrays
const pokemon=['pikachu','charmandar','bulbasaur']
console.log(pokemon[0]);
console.log(pokemon[pokemon.length-1])

// -------------------------------------
// array methods-->functions to help us and they have different properties and functions
// add or remove elements from array last place
const names=['hari','ravi','yash']
console.log(names);
names.push('bob')
console.log(names);
names.pop()
console.log(names);
names.pop()
names.pop()
console.log(names);
// shift and unshift 
// add or remove elemnts from start
const a=['death note','one piece','naruto','bleach','demon slayer']
a.unshift("FMA");  // add elements at start
console.log(a)
a.unshift("blue lock");
console.log(a)
a.shift()
a.shift()
a.shift()
a.shift()
console.log(a)

console.log(a.indexOf('demon slayer'));
console.log(a.lastIndexOf('naruto'));
// --------------------------------



