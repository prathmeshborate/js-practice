function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  // Example usage:
  let number = 23;
  console.log(`Sum of digits: ${sumDigits(number)}`); // Output: Sum of digits: 5