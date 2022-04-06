function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
function radixSort(nums){
    //How many digits does the largest numbers have
    let maxDigitsCount = mostDigits(nums);  
    for(let k =0; k < maxDigitsCount ;  k++){
        let diggitBuckets = Array.from({length: 10}, ()=> []);
        for(let i =0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
           diggitBuckets[digit].push(nums[i])
        }

        nums = [].concat(...diggitBuckets)
    }
    return nums;

}

console.log(radixSort([23,345,5467,12,2345,9852])); 
  
  
  
  
  
  
  
  
  
  
  