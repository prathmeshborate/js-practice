function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  
  // Example usage:
  let array = [3, 5, 1, 4, 2, 6];
  console.log(findSecondLargest(array)); // Output: 5
  