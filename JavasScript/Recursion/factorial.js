/*
Write a fuction which accepts a number and returns the factorial of that number.
A factorial is athe product of an intiger and all the integers below it. 
*/

function factorial(num){
    //base case
    if(num === 0) return 1;

    return num * factorial(num-1)

}

console.log(factorial(7)); 