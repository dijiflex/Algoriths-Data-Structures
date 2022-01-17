//we are gine a string S consisting of N letters. We want to find the alphabetically largest letter that occurs in both lowercase and uppercase in S, or decide that tere is no such letter.
//write a function that given a string S, returns a string consisting of one letter - the alphabetically largest letter that occurs in both lowercase and uppercase in S, or the string "No" if there is no such letter.

function solution(s){
    // Array for keeping track of both uppercase and lowercase english alphabets
    let uppercase = new Array(26).fill(false);
    let lowercase = new Array(26).fill(false);

    // convert the string into an array
    let arr = s.split('');

    console.log(arr)

    for (let c = 0; c < arr.length; c++) {
  
        if (arr == arr.toLowerCase())
            lowercase[arr.charCodeAt() - 97] = true;

        if (arr == arr.toUpperCase())
            uppercase[arr.charCodeAt() - 65] = true;
    }
}

solution('aA');