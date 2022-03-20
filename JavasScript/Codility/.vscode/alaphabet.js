//we are gine a string S consisting of N letters. We want to find the alphabetically largest letter that occurs in both lowercase and uppercase in S, or decide that tere is no such letter.
//write a function that given a string S, returns a string consisting of one letter - the alphabetically largest letter that occurs in both lowercase and uppercase in S, or the string "No" if there is no such letter.


function largestCharacter(str)
    {
        // Array for keeping track of both uppercase
        // and lowercase english alphabets
        let uppercase = new Array(26);
        uppercase.fill(false);
        let lowercase = new Array(26);
        lowercase.fill(false);
  
        let arr = str.split('');
  
        for (let c = 0; c < arr.length; c++) {
  
            if (arr == arr.toLowerCase())
                lowercase[arr.charCodeAt() - 97] = true;
  
            if (arr == arr.toUpperCase())
                uppercase[arr.charCodeAt() - 65] = true;
        }
  
        // Iterate from right side of array
        // to get the largest index character
        for (let i = 25; i >= 0; i--) {
  
            // Check for the character if both its
            // uppercase and lowercase exist or not
            if (uppercase[i] && lowercase[i])
                return String.fromCharCode(i +
                'A'.charCodeAt()) + "";
        }
  
        // Return -1 if no such character whose
        // uppercase and lowercase present in
        // string str
        return "-1";
    }
console.log(largestCharacter("aA"));