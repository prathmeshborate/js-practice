"use strict"

const myArr = [1, 2, 3, 4, 5, 'Prath', true, ['Vj', 'aak']]

// console.log(myArr[4]);

const myHeros = ["Stark", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf('Prath'));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,5)

console.log(myn1);
console.log("B", myArr);
/*
so in slice the data till index 4 will be included and store the copy from original array
*/

const myn2 = myArr.splice(1,5)

console.log(myn2);
console.log("C", myArr);

/*
in splice data till 5 index will be included but it cut pastes the data from original array
*/

