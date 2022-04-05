
/*
Given a sorted array of integers, find the missing element in it.

Example 1;
INput: [4,7,9,10] k = 1
Output: 5

Explanation:  The first missing number is 5.

Exmaple 2: 
INput: [4,7,9,10] k = 3
Output: 8

Explanation: The missing numbers are [5,6,8]. hence the 3rd missing number is 8.

[4,7,9,10]

4 to 7 =  7 - 4 -1 = 2

4 to  9 = 9 - 4 -2 = 3

num_missing between 0 and i is nums[i] - nums[0] - i

*/

function missingElement(arr, k) {
    let left = 0;
    let right = arr.length - 1;

    function num_missing(i) {
        return arr[i] - arr[0] - i
    }

    while (left < right) { 
        let mid = Math.floor((left + right) / 2);
        if (num_missing(mid) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left -1] + k - num_missing(left - 1);
}

console.log(missingElement([1,2,3,4], 2));