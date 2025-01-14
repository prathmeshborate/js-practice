/// using inbuilt function
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Check if the string reads the same backward as forward
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false

/*------------------------------------++++++++++++++++-----------------------------------*/

///without using inbuilt function or method
function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters
    let cleanStr = str.toLowerCase().replace(/[^\w]/g, '');;
    
    // Check if the string reads the same backward as forward
    let start = 0;
    let end = cleanStr.length - 1;
    while (start < end) {
        if (cleanStr[start] !== cleanStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false

/*---------------------------------+++++++++++++++++++++++---------------------------------*/

function arePalindrome(str){
    let cleanString = str.toLowerCase().replace(/[^\w]/g, '')

    let start = 0
    let end  = cleanString.length - 1
    while(start < end){
        if(cleanString[start] !== cleanString[end]){
            return false
        }
        start++
        end--
    }
    return true
}

console.log(arePalindrome("A man, a plan, a canal, Panama")); // true
console.log(arePalindrome("hello")); // false

/*------------------------------------+++++++++++++++++++---------------------------------*/

function isNumberPalindrome(num) {
    if (num < 0) {
        return false; // Negative numbers are not palindromes
    }
    
    let originalNum = num;
    let reversedNum = 0;

    // Reverse the number
    while (num > 0) {
        let digit = num % 10; // Get the last digit
        reversedNum = reversedNum * 10 + digit; // Append the digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the original number
    }

    // Check if the original number and the reversed number are the same
    return originalNum === reversedNum;
}

// Example usage:
console.log(isNumberPalindrome(121));  // true
console.log(isNumberPalindrome(-121)); // false
console.log(isNumberPalindrome(123));  // false