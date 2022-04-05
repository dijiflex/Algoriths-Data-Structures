/*
fib(n) = fib(n -1) + fib(n - 2)
fib(2) = 1
fib(1) = 1
*/

// function fibonacci(n) {
//     if(n <= 2) return 1
    
//     return fibonacci(n -1) + fibonacci(n -2)
//     //0(2^n)
// }

function fibonacci(n) {
    let t1 = 0;
    let t2 = 1;

    let nextTerm = t1 + t2;

    let totalFib = 1
   for(let i = 3; i <= n; ++i){
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
   }

return nextTerm
}


console.log(fibonacci(9)) 