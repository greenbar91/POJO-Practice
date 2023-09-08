/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/
const animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
const foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}

// function valuesInObject(obj) {

//   let result = [];

//   for (const value in obj){
//     result.push(obj[value])
//   }

//   return result
// }


let valuesInObject = obj => (Object.values(obj))

console.log(valuesInObject(animals))
console.log(valuesInObject(foods))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
