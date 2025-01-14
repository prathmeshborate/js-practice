//Using a Frequency Counter (Hash Map)
function findDuplicatesUsingHashMap(arr) {
    let frequency = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    for (let key in frequency) {
        if (frequency[key] > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;
}

// Example usage:
let sampleArray = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 3];
console.log(findDuplicatesUsingHashMap(sampleArray)); // Output: [2, 3]


//Sorting the Array
function findDuplicatesUsingSorting(arr) {
    let duplicates = [];
    arr.sort((a, b) => a - b); // Sorting the array

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1] && duplicates.indexOf(arr[i]) === -1) {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

// Example usage:
console.log(findDuplicatesUsingSorting(sampleArray)); // Output: [2, 3]