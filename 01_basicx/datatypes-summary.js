// Primitive
/* 
1. Stirng
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

const score = 100
const scoreValue = 100.11
const isLoggedIn = false
const outsideTemp = null
let userEmail // undefined

const id  = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNum = 3516413643134154644n //BigInt last add 'n'


// Reference (Non Primitive)
/*
1. Arrays
2. Objects
3. Functions
*/

const heros = ["Shaktiman", "NAgraj", "Krish"];

 let myObj = {
    name :  "Prathmesh",
    id : 123456
};

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);


// JavaScript is dynamically typed, which means that the interpreter assigns a variable's type at runtime based on the value of the variable.

// datatype of non primitive for array and oobject is function and datatype of function if function object // dont know why but it is what it is. :)