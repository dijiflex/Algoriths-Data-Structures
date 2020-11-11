/*
Write a function called productOfArray which takes in an array of numbers 
and returns the product of them all

*/

function productOfArray(arr){
    if(arr.length === 0) return 1;
    let product = 1;
    product = product * arr[0];

    return product * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10])); 