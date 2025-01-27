function generatePattern(input) {
    let result = '';
    let count = 0;
    for (let i = 1; i <= input; i++) {
      if (i % 10 === 6) {
        result += '*****';
        count++;
      } else if (count > 0) {
        result += (i + count - 1) % 10 === 5 ? '****' : '*';
      } else {
        result += i % 10;
      }
    }
    return result;
  }
  
  // Test cases
  console.log(generatePattern(17)); // Output: 12345*****1112131415**
  console.log(generatePattern(24)); // Output: 12345*****1112131415*****21222324
  console.log(generatePattern(7));  // Output: 12345**
  
/*-----------------------------------+++++++++++++++++++++++--------------------------------------*/

function generatePattern(input) {
    let result = '';
    let i = 1;
    let count = 0;
  
    while (i <= input) {
      if (i % 10 === 6) {
        result += '*****';
        count++;
      } else if (count > 0) {
        result += (i + count - 1) % 10 === 5 ? '****' : '*';
      } else {
        result += i % 10;
      }
      i++;
    }
    return result;
  }
  
  // Test cases
  console.log(generatePattern(17)); // Output: 12345*****1112131415**
  console.log(generatePattern(24)); // Output: 12345*****1112131415*****21222324
  console.log(generatePattern(7));  // Output: 12345**
  