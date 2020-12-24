

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
            console.log(arr);
        }
    }
    swapIdx(arr, start, swapIdx)
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])