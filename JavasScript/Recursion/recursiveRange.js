/*
Write a function called recursiveRange which accepts a number and adds up all the  numbers from 0
to the number passed to the function
*/

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
    //base case
    function recursiveRange(x){
        if (x === 0 ) return 0;
        return x + recursiveRange(x-1);
     }
   
}

recursiveRange(6)
