/*
MEMOIZATION => Storing the results of expensive function calls and retrning the cached results
when the same input occurs again.


*/

function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    return memo[n] = fib(n-1, memo) + fib(n-2, memo);
}
/*
time complexity: O(n)

*/

console.log(fib(19))

/*
TABULATION:
Storing the results of a previous result in a "table" (usually an array).
Usually done using iteration

Better space complexity can be achieved using tabulation

*/

function fibTabulation(n) {
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }

    return fibNums[n];
}