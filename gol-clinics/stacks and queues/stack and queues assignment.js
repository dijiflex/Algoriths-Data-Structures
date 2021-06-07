




class Stack {
    constructor (){
        this.values = [];
        this.top = -1;
    }

    push(val){ 
        //Check if the stack is full
        if(this.stackisfull()) {
            console.log('the stack is full');
        } else {
            stack[++this.top];
        }
        
    }

    stackisfull (){
         if(this.top == this.values.length) return true;
         return false;
    }
}

let myStack = new Stack()
myStack.push()
