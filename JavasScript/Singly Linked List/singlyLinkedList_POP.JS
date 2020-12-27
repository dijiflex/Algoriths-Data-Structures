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
        this.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }
}

let list = new SinglyLinkedList();

