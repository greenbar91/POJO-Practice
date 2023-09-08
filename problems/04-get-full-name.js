/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};

function getFullName(person) {

  let fullName = []

let name = Object.values(person)

for (let i = 0; i < name.length; i++)
  if(typeof name[i] === "string"){
    fullName.push(name[i])
  }
  return fullName.join(' ')
}


console.log(getFullName(p2)); // => 'Charlie Brown'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
