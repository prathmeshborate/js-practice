const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain filter and map
const doubledEvenNumbers = numbers
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * 2); // Double the even numbers

console.log(doubledEvenNumbers); // Output: [4, 8, 12, 16, 20]

// Use reduce to sum the doubled even numbers
const sumDoubledEvenNumbers = doubledEvenNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumDoubledEvenNumbers); // Output: 60