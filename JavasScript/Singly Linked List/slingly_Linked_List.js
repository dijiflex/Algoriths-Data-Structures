class Node {
    constructor(val){
        this.val = val,
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
               this.head = newNode;
               this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){ 
        if(!this.head) return undefined;
        //Loop the list until the 2nd last item
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.newNode;
        } else{
            newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        //check if the index is valid
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        
        while(counter !== index){
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val){
        let foundNode =   this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return  false;
      }

      insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) {
            this.push(val);
             return true;
            
            };
        if(index === 0) return this.unshift(val);
        
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;

    }

    remove(index){
        if(index < 0 || index>= this.length) return undefined;
        if(index === 0) return this.shift(index);
        if(index === this.length - 1) return this.pop(index); 

        const previousNode = this.get(index -1);
        const removed = previousNode.next;
        previousNode.next = removed.next;

        this.length--;

        return removed;
    }

    reverse(){
        //swap head and tail 
        //create a variable called next, prev, node
        //set prev to null
        //set node to head
        // loop through the list
        // set next to the next property of whatever node is
        // set the next property of node to prev

        let node = this.head; 
        this.head = this.tail; 
        this.tail = node; 

        let prev = null;
        let next;

        for(let i =0; i < this.length; i++){
            next = node.next;  
            node.next = prev; 
            prev = node; 
            node = next; 
            this.print()
        }

        return this;
    } 


    
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr)
    }
}


let list = new SinglyLinkedList();

