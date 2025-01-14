function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfSquaresOfPrimes(n) {
    let primeCount = 0;
    let num = 2;
    let sum = 0;

    while (primeCount < n) {
        if (isPrime(num)) {
            sum += num * num;
            primeCount++;
        }
        num++;
    }

    return sum;
}

// Example usage:
let n = 4;
console.log(sumOfSquaresOfPrimes(n)); // Output: 87