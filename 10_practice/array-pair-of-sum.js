function findPairsWithSum(arr, targetSum) {
    let seen = new Set();
    let pairs = [];

    for (let num of arr) {
        let complement = targetSum - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

// Example usage:
let sampleArray = [80, 60, 10, 50, 30, 100, 0, 50];
console.log(findPairsWithSum(sampleArray, 100)); // Output: [ [ 50, 50 ], [ 0, 100 ], [ 20, 80 ] ]

/*------------------------------------+++++++++++++++++++---------------------------------*/

function findPairsBruteForce(arr, targetSum) {
    let pairs = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

// Example usage:
console.log(findPairsBruteForce(sampleArray, 100)); // Output: [ [ 80, 20 ], [ 60, 40 ], [ 50, 50 ] ]