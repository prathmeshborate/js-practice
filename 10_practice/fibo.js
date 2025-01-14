function fibonacciLoop(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

// Example usage:
console.log(fibonacciLoop(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/*------------------------------------+++++++++++++++++++---------------------------------*/

function printFibonacciIterative(count) {
  let fib = [0, 1]; // Starting values
  if (count >= 1) {
      console.log(fib[0]);
  }
  if (count >= 2) {
      console.log(fib[1]);
  }
  for (let i = 2; i < count; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
      console.log(fib[i]);
  }
}

// Example usage:
printFibonacciIterative(10);

/*------------------------------------+++++++++++++++++++---------------------------------*/

function fibonacciRecursive(n) {
  if (n <= 1) {
      return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Function to print the Fibonacci series
function printFibonacciRecursive(count) {
  for (let i = 0; i < count; i++) {
      console.log(fibonacciRecursive(i));
  }
}

// Example usage:
let count = 10;
printFibonacciRecursive(count);