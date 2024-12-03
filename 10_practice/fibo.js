function fibonacciLoop(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  // Example usage:
  console.log(fibonacciLoop(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  