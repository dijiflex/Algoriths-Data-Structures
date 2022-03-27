


// use underlying utf character code for each character
// a -97  97 -96 = 1 givens alphabetical ranking
//A =65

// console.log("b".charCodeAt(0));

function hash (key, arrayLength){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i =0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLength;
    }

    return total;
}

console.log(hash("z", 10));


//Dealing with Collissions
// 1) Use separate chaining
/*
- with separate chaining, we can store multiple values in a single index
using an array or a linked list
*/
// 2) Use linear probing
/*
- when there is a collision we search through the array to find next empty slot
*/
