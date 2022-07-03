"use strict";

// you can write to stdout for debugging purposes, e.g.

/*
{
    1: 1
    7: 2

    time complexity 
    Big O(n)

    space complexity
    big o(k)

}

*/
function myFunction(arr){
    //store every eleent
    const repeating = {};

    //loop all the elemens
    for(let i = 0; arr.length - 1; i++) {
        const current = arr[i];
        //check if element is in object
        if(repeating[current]) {
            repeating[current] +=1
        }

        //if not in the object
        else {
            repeating[current] = 1
        }

    }

    //check the one that apperar most number of times
    // let max = null;
    // make max to be the first item in the object
    //because we added the first item in the array as the first item in the object
   const max = repeating[arr[0]]
    // this ensures that when we start the comparison max is not null
    for(value in repeating ){
        //check if current value is greater thatn max
        if(repeating[value] > max) {
            max = repeating[value]
        }
    }

    return max;

}

console.log(myFunction([1,2,3,4,5,5]))

