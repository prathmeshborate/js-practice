function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        // Sort the string to create the key
        let sortedStr = str.split('').sort().join('');
        
        // If the key doesn't exist, create a new entry
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }

        // Add the original string to the list of anagrams
        map.get(sortedStr).push(str);
    }

    // Convert map values to an array
    return Array.from(map.values());
}

// Example usage:
let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs)); // Output: [['eat','tea','ate'], ['tan','nat'], ['bat']]