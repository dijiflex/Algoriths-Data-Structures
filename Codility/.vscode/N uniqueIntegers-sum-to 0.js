//Write a function that given an integer N, returns an array containing N unique integers that sum up to 0. The function can return any such array
// Examples: given N = 4, the function could return [1,0,-3,2] or [-2,1,-4,5].

function solution (n) { 
    let result = [];
    
    // if(n%2 != 0) {
    //     result.push(0);
    // }

    
    for(let i = 1; i <= n/2; i++) {
        result.push(i);
        result.push(-i);
    }

    console.log(result);
}

solution(5);

