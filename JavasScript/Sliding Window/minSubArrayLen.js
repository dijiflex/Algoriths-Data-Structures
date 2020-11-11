/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive intergers and
a positive integer.

The function should return the minimal length of a contagious subarray of which the sum is greater that 
or equal to the integer passed to the function. If there isn't one, return 0 instead

Examples:
minSubArrayLen([2,3,1,2,4,3],7) // 2 because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4],9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],) // 1 -> because  [62] is greater that 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4,3,3,8,1,2,3],11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
*/

//this is a pending question to understanding
function minSubArrayLen(arr, num) {
    var n = arr.length
    var counter = []
    
    var i = 0
    var j = 0
    var scale = 0
    var sum = arr[0]
   
    var tempSum = sum;
    while(counter.length === 0) {
      if (i === 0 && j === n - 1) {
        return 0
      }
      
      // Searching single number
      if (i === j && arr[i] >= num) {
         counter.push(i, j)
         return (j - i) + 1;
      }
      
      // When i or j is over than array length
      if (i > n - 1 || j > n - 1) {
        scale++
        i = 0
        j = i + scale
        
        // Init sum in every window is change
        sum = tempSum + arr[j]
        tempSum = sum
        
      // Otherwise
      } else {
        if (i !== j) {
          if (i > 0) {
            sum = (sum - arr[i - 1]) + arr[j]
          }
   
          if (sum >= num) {
            counter.push(i, j)
            return (j - i) + 1;
          }
        }
        
        i++
        j++
      }
    }
  }