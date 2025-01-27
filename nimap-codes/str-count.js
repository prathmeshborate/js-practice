function transformString(input) {
    let countMap = {};
    let result = '';
  
    // Count occurrences of each character
    for (let char of input) {
      countMap[char] = (countMap[char] || 0) + 1;
    }
  
    // Build result string
    for (let char in countMap) {
      result += char + countMap[char];
    }
  
    return result;
  }
  
  console.log(transformString("engineer")); // Outputs: 'e3n2g1i1r1'
  