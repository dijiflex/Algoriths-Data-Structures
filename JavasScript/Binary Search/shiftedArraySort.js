function findPivotPoint(arr) {
    let begin = 0;
    let end = arr.length -1; //5

    // [9, 12, 17, 2, 4, 5] mid = 2 / 17  
    // [2, 4, 5, 9, 12, 17]

    
    while(begin <= end) {
      let mid = begin + Math.floor((end - begin)/2);
      // console.log(mid)
      if(mid == 0 || arr[mid] < arr[mid-1]) return mid;
      if(arr[mid] > arr[0])
      {begin = mid + 1}
      else {
        end = mid -1
      }
    }
    
    return 0
  }

  function binarySearch(arr, begin, end, num){
      while(begin <= end) {
          let mid = begin + Math.floor((end - begin)/2);
          if(arr[mid] === num) return mid;
          if(arr[mid] > num) end = mid -1;
          else begin = mid + 1;
      }

      return -1;
  }
  
  function shiftedArrSearch(shiftArr, num) {
  const pivot = findPivotPoint(shiftArr)

  if(pivot === 0 ||num < shiftArr[0]) return binarySearch(shiftArr, pivot, shiftArr.length -1, num)
  return binarySearch(shiftArr, 0, pivot -1, num)
  
  }

  const res = shiftedArrSearch([9, 12, 17, 2, 4, 5], 2);

  console.log(res)