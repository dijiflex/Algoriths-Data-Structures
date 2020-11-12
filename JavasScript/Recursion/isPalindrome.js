
/*
Write a recursive function called  isPalindrome which returns true if the string passed to it is a palindrome
(reads the same forward and backword). Otherwise return false
*/

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 0) return true;
    if (str.slice(0, 1) !== str.slice(-1)) return false
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome('tacocat'));

