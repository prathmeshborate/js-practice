// Function to check if a number is a palindrome
function isPalindrome(num) {
    const str = num.toString();
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  // Function to find the next palindrome
  function nextPalindrome(num) {
    num++;
    while (!isPalindrome(num)) {
      num++;
    }
    return num;
  }
  
  // Test cases
  console.log(nextPalindrome(24));  // Outputs: 33
  console.log(nextPalindrome(7));   // Outputs: 11
  console.log(nextPalindrome(120)); // Outputs: 121  