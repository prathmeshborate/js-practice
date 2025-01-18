let originalArray = [1, 2, 3, {a: 1}];
let deepCopy = JSON.parse(JSON.stringify(originalArray));

deepCopy[3].a = 2;
console.log(originalArray[3].a); // Output: 1

// let originalArray = [1, 2, 3, {a: 1}];
// let shallowCopy = [...originalArray];

// shallowCopy[3].a = 2;
// console.log(originalArray[3].a); // Output: 2

let A = [1, 2, 3];
let B = [4, 5, 6];
let C = [{ name: 'John' }];

let mergedArray = [...A, ...B, ...C];

// Modifying a primitive value in the original array does NOT affect the merged array
A[0] = 10;
console.log(mergedArray[0]); // Output: 1

// Modifying an object in the original array DOES affect the merged array
C[0].name = 'Doe';
console.log(mergedArray[6].name); // Output: Doe

