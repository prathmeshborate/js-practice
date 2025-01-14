function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(4)); // false

/*------------------------------------+++++++++++++++++++---------------------------------*/

function findPrimes(n) {
    let primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

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

// Example usage:
console.log(findPrimes(50));