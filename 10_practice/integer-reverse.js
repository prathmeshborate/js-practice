function reverseInteger(num) {
    let reversed = 0;
    while (num !== 0) {
      let digit = num % 10;        // Get the last digit
      reversed = reversed * 10 + digit; // Append the digit to reversed
      num = Math.floor(num / 10);  // Remove the last digit from num
    }
    return reversed;
  }
  
  let sampleNum = 12345;
  console.log(reverseInteger(sampleNum)); // Output: 54321

  /*-----------------------------------++++++++++++++++++++++----------------------------*/

  function reverseNumber(number){
    let changed = 0
    while(number!==0){
        let digit = number % 10;
        changed = changed * 10 + digit;
        number = Math.floor(number / 10);
    }
    return changed
  }
  console.log(reverseNumber(6789))