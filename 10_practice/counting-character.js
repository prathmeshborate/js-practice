///Count the Occurrences of Each Character in a String
function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = charCount[char] + 1 || 1;
    }
    return charCount;
}
console.log(countCharacters("hello world")); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }