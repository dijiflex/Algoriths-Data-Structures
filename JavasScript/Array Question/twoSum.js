//Solution /

// function twoNumberSum(array, targetSum) {
//     // Write your code here.
//       const result = [];
//       for(let i = 0; i < array.length; i++) {
//         //   console.log(i)
//             const sum1 = array[i];
//             console.log(array[i])
//             for(let j = 0; j < array.length; j++) {
//                 const sum2 = array[j];
//                 if(sum1 + sum2 === targetSum && i !== j)  { 
//                     return [sum1, sum2];
//                 }
//             }  
//       }
//       return []
// }

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));


//Solution 2

// y =targetSum - x
function twoNumberSum(array, targetSum) {
    // Write your code here.
      const table = {};
      for(let i = 0; i < array.length; i++) {
        //   console.log(i)
        const y = targetSum - array[i];
        if(table[y]) {
            return [y, array[i]];
        }
        table[array[i]] = true;
         
      }
      return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

