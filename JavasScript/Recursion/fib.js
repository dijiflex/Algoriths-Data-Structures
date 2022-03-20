/*
Write a recursive function called fib which accepts a number and return the nth number
in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers
1,1,2,3,5,8 which starts with 1 and 1, and where every number thereafter is equal  to the 
sum of the previous two numbers
*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465



// function fib(num) {
//     let arr = [1, 1];

//     console.log(arr);

//     function recursive(num){
//         if(arr.length === num) return;
//         let next = arr[arr.length - 1] + arr[arr.length - 2];
//         arr.push(next);
//         recursive(num)
//     }
//     recursive(num)

//     return  arr[arr.length-1];
// }


// Most optimal solution /// pending understanding
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}



console.log(fib(28));
