const spriralOrder = (matrix) => {


    const result = [];
    let row = 0;
    let col = 0;
    let maxRow = matrix.length - 1;
    let maxCol = matrix[0].length - 1;
    let direction = 0;
    // 0 = right, 1 = down, 2 = left, 3 = up
    while (row <= maxRow && col <= maxCol) {
        if (direction === 0) {
        for (let i = col; i <= maxCol; i++) {
            result.push(matrix[row][i]);
        }
        row++;
        } else if (direction === 1) {
        for (let i = row; i <= maxRow; i++) {
            result.push(matrix[i][maxCol]);
        }
        maxCol--;
        } else if (direction === 2) {
        for (let i = maxCol; i >= col; i--) {
            result.push(matrix[maxRow][i]);
        }
        maxRow--;
        } else if (direction === 3) {
        for (let i = maxRow; i >= row; i--) {
            result.push(matrix[i][col]);
        }
        col++;
        }
        direction = (direction + 1) % 4;
    }
    return result;
    }
 console.log(spriralOrder([[1,2,3],[4,5,6],[7,8,9]]));