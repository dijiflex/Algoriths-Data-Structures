

// input:  arr = [8, 10, 2]
// output: [20, 16, 80] 

/*
[8,10,2,3]

left = [1,8,80,160]

right =[1,1,1,1]



*/

function arrayOfArrayProducts(arr) {
    // your code goes here
    if(arr.length < 2) return []
    const result = []
    for(let i = 0; i < arr.length; i++) {
      let product = 1;
      for(let j = 0 ; j < arr.length; j++) {
          if(j !== i) {
            product = product * arr[j];
            
           
          }
      }
      result.push(product);
    }
    
    return result;
  }

  function arrayOfArrayProducts2(arr) {
    // your code goes here
    const left = new Array(arr.length).fill(1);
    const right = new Array(arr.length).fill(1);

    for(let i = 1; i < arr.length; i++) {
        left[i] = left[i -1] * arr[i-1];
    }

    for(let i = right.length -2; i >= 0; i--){
        right[i] = right[i + 1] * arr[i + 1]
    }
    console.log('left', left)
    console.log('right',left)

    for(i= 0; i < arr.length; i++){
        arr[i] = left[i] * right[i];
    }





    
    return arr;
  }

  console.log(arrayOfArrayProducts2([8,10,2]));