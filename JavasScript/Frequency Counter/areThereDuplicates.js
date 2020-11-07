
/*  
Implement a function called, areThereDuplicates which accepts a variable number of arguments and checks whethere there are any
duplicates among the arguments passed to it. 
Example

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','c','a) // true

Restrictions 
Time - 0(N),
Space - O(n)
*/ 


// Using the Multiple Pointer Soltion
function areThereDuplicates(...args){
    console.log(args);
    args.sort((a,b) => a > b);


}

areThereDuplicates(1,2,2);
