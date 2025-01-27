///Check if Two Strings are Anagrams using frequncy counter approach
function areAnagrams(str1, str2) {
    // Normalize strings: remove non-alphanumeric characters and convert to lowercase
    let cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    let cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // If the lengths don't match, they can't be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Initialize frequency counters
    let charCount1 = {};
    let charCount2 = {};

    // Count the frequency of each character in cleanStr1
    for (let char of cleanStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count the frequency of each character in cleanStr2
    for (let char of cleanStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the two frequency counters
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(areAnagrams("A gentleman", "Elegant man")); // true
console.log(areAnagrams("hello", "world")); // false

/*------------------------------------+++++++++++++++++++++--------------------------------*/

function isAnagram(sent1, sent2){   
    let cleanSent1 = sent1.toLowerCase().replace(/[^\w]/g, '');
    let cleanSent2 = sent2.toLowerCase().replace(/[^\w]/g, '');

    if(cleanSent1.length !== cleanSent2.length) return false;

    let charCount1 = {}
    let charCount2 = {}

    for ( let char of cleanSent1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    for ( let char of cleanSent2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    for(let char in charCount1){
        if(charCount1[char] !== charCount2[char]) return false
    }
    return true
}

console.log(isAnagram("A gentleman", "Elegant man")); // true
console.log(isAnagram("hello", "world")); // false