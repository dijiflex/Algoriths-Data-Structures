
function countUniqueValuess(arr) {
    if(arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        // console.log(i,j);
    }

    return i + 1;
}
console.log(countUniqueValuess([1,1,1,2,2,5]));
