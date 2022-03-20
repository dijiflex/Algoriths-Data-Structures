// Shifted Array Search
// A sorted array of distinct integers shiftArr is shifted to the left by 
// an unknown offset and you don’t have a pre-shifted copy of it. For instance, t
// he sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

// Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.

// Explain your solution and analyze its time and space complexities.

// if(arr.length < 2) return []
//     const result = []
//     for(let i =0; i < arr.length; i++) {
//       let product = 1;
//       for(let j = 0 ; j < arr.length; j++) {
//           if(j !== i) {
//             product = product * arr[j];
            
           
//           }
//       }
//       result.push(product);
//     }
    
//     return result;

function arrayOfArrayProducts(arr) {
    // your code goes here
    let n = arr.length;
    if(n === 0 || n === 1 ) return [];

    const productArr = [];

    product = 1;

    for(let i = 0; i < n-1; i++) {
        productArr[i] = product;
        product = product * arr[i];

     }

     product = 1;
     for(let i = n-1; i >= 0; i--) {
         productArr[i] = productArr[i] * product;
         product = product * arr[i];
     }

     console.log(productArr)
}

arrayOfArrayProducts([8, 10, 2])

//[ 1, 8 ]

//[1]  p == 1 * 8 

// [1, 8] p == 1 * 8 * 10

 