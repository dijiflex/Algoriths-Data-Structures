

function binarySearch(arr, val){
    let left = 0;
    let right = arr.length - 1;

    while( left <= right){
        let mid = Math.floor((left + right) / 2); 

        console.log(left, mid, right);
        if(arr[mid] === val){
            return arr[mid];
        } else if( val < arr[mid]){
            right = mid -1;
        } else if (val > arr[mid]){
            left = mid + 1;
        }
    }
    return -1;

}
console.log(binarySearch([1,2,3,4,5,6,7], 4));
