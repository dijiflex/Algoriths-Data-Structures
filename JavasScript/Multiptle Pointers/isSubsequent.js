/*
Write a Function called isSubsequent which take two strings and checks whether the characters in the first
string from a subsequent of the characters in the second string. In onther workds, the function should check 
whether the characters int he first string appear somewhere in the second string. without their order 
chnanging

Exmaples
isSubsequent('hello', 'hello world')//true
isSubsequent('sing', 'string')//true
isSubsequent('abc', 'abracadabra')//true
isSubsequent('abc', 'acb')// false (order matters)
*/

// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//       if (str2[j] === str1[i]) i++;
//       if (i === str1.length) return true;
//       j++;
//     }
//     return false;
//   }

//   isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}

let res = isSubsequence('helloo', 'hello world');
console.log(res);