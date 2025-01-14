function sqrt(number) {
    if (number < 0) {
        return NaN; // Square root of negative number is not defined in real numbers
    }
    if (number === 0 || number === 1) {
        return number; // Square root of 0 or 1 is the number itself
    }

    let guess = number / 2;
    let epsilon = 0.000001; // Precision level

    while (Math.abs(guess * guess - number) >= epsilon) {
        guess = (guess + number / guess) / 2;
    }

    return guess;
}

// Example usage:
console.log(sqrt(25));   // Output: 5
console.log(sqrt(49));   // Output: 7
console.log(sqrt(2));    // Output: 1.414213562373095