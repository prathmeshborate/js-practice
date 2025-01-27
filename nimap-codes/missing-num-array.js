function findMissingNumber(arr) {
    // Initialize variables
    let min = arr[0];
    let max = arr[0];
    let actualSum = 0;
  
    // Calculate the min, max, and actual sum of the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
      actualSum += arr[i];
    }
  
    // Calculate the expected sum of the full range of numbers
    let expectedSum = 0;
    for (let i = min; i <= max; i++) {
      expectedSum += i;
    }
  
    // The missing number is the difference between the expected sum and actual sum
    return expectedSum - actualSum;
  }
  
  const list = [1, 2, 3, 4, 6, 7, 8, 10, 5];
  const missingNumber = findMissingNumber(list);
  console.log(missingNumber); // Outputs: 9
  