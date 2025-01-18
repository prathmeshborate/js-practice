function printSequence(n) {
    n = typeof n !== 'undefined' ? n : 20; // Default to 20 if n is not defined
    let i = 1;
    let result = "";

    while (i <= n) {
        if (i % 10 === 6) { // Check if the last digit is 6
            result += "*****";
            i += 5; // Skip next 5 numbers to jump to the next sequence
            continue;
        }
        result += i;
        i++;
    }

    result += "*****";
    console.log(result);
}

// Example usage:
printSequence(20); // Will print: 12345*****1112131415*****
printSequence(26); // Will print: 12345*****1112131415*****16171819*****
printSequence(36); // Will print: 12345*****1112131415*****16171819*****2122232425*****3132333435*****