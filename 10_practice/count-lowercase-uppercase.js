function countCase(str) {
    let uppercaseCount = 0;
    let lowercaseCount = 0;

    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            uppercaseCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowercaseCount++;
        }
    }

    return {
        uppercase: uppercaseCount,
        lowercase: lowercaseCount
    };
}

// Example usage:
let input = "Hello world!";
let result = countCase(input);
console.log("uppercase =", result.uppercase, "lowercase =", result.lowercase); // Output: uppercase = 1, lowercase = 9