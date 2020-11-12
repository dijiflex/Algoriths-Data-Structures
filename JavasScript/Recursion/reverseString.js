

/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/

function reverse(str){
    if(str.length === 0) return '';
    return str.slice(-1) + reverse(str.slice(0, str.length - 1))
}

console.log(reverse('abc')); 
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'