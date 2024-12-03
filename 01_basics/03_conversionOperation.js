let score = "7abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

//  true => 1; false => 0
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************************** OPERATIONS **********************************************
let value = 3
let negValue = -value
// console.log(negValue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);
*/

let str1 = "Hello"
let str2 = " Prathmesh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log( 1 + 2 + "2");

// in JS the, if string comes first then
// all other datatypes coming after it is converted into string

// console.log( ( 3 + 4 ) * 5 % 3);

// to avoide it you can use circular bracket to run speccific line first.

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gamrCounter = 100
++gamrCounter
console.log(gamrCounter);