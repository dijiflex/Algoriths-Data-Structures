
/*
Write a recursive function called someRecursive which accepts an array and a callback. The function returns
true if a single value in the array returns true when passed to the callback. Otherwise return false. 

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(){
  // add whatever parameters you deem necessary - good luck!
}
*/
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, isOdd){
    if(arr.length === 0) return false;
    if(isOdd(arr[arr.length - 1])) return true;
   return someRecursive(arr.slice(0, arr.length - 1), isOdd)
    
}

console.log(someRecursive([4,6,8], isOdd));

// console.log(isOdd(7)) 