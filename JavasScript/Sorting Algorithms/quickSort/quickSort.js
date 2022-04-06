
function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++; 
            swap(arr, swapIdx, i);
            // console.log(arr);
        }
    }
    swap(arr, start, swapIdx)
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        let pivotIndex = pivot(arr, left, right)

        //left 
        quickSort(arr, left, pivotIndex - 1);

        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
    //Base CAse
}

console.log(quickSort([100, -3, 2, 4, 6, 9,1,2,5,3,23]));
