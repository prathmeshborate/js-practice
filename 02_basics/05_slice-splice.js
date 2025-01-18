const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

// Remove 2 elements starting from index 1
const removedFruits = fruits.splice(1, 2); // ['Banana', 'Orange']
console.log(fruits); // ['Apple', 'Mango', 'Pineapple']

// Add elements at index 2
fruits.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits); // ['Apple', 'Mango', 'Lemon', 'Kiwi', 'Pineapple']

// Replace 1 element at index 1
const replacedFruit = fruits.splice(1, 1, 'Strawberry'); // ['Mango']
console.log(fruits); // ['Apple', 'Strawberry', 'Lemon', 'Kiwi', 'Pineapple']


// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

// const citrus = fruits.slice(1, 3); // ['Banana', 'Orange']
// const endSlice = fruits.slice(2); // ['Orange', 'Mango', 'Pineapple']
// const negativeSlice = fruits.slice(-3, -1); // ['Orange', 'Mango']
