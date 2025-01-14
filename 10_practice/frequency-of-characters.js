function getFrequencyAndSortDescending(str) {
    let frequency = {};

    // Calculate the frequency of each character
    for (let char of str) {
        char = char.toLowerCase(); // Optional: Convert to lowercase for case-insensitivity
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Convert frequency object to an array and sort it in descending order
    let sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

    // Format the output string
    let result = '';
    for (let [char, count] of sortedFrequency) {
        result += char + count;
    }

    return result;
}

// Example usage:
let input = "Engineer";
console.log(getFrequencyAndSortDescending(input)); // Output: e3n2g1i1r1