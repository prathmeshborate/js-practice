const name = "Prath"
const repoCount = 12

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);    //this is called string interpolation

const gameName = new String('Prath-Bora')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //it doesnt include the character at 4 it'll include character till 3 only
console.log(newString);

const anotherString = gameName.slice(-8, -4) // in slice you can add negative indexing also
console.log(anotherString);

const newStringOne = "   Prath   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim removes blank space from start and in end of line

const url = "https://prath.io/prath%20borate"

console.log(url.replace('%20', '-'));
console.log(url.includes('io'));

console.log(gameName.split('-'));
// splits the line into array of words based on our input like space or dash