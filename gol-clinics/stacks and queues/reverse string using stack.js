



const reverseString = (string) => {
    let stack = [...string];
    let reversedString = '';
    
    for (let i = stack.length - 1 ; i >= 0; i--) {
        console.log(i);
        reversedString += stack[i];
    }
    
    return reversedString;
}

reverseString('felix');