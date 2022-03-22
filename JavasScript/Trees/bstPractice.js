class Node {
    constructor (value){
        this.value = value,
        this.left = null;
        this.right = null
    }
}

class Bst {
    constructor () {
        this.root = null
    }

    insert(value){ 
        //1. Check if the node is empty
        if(!this.root) return this.root = new Node(value)

        //store the current node
        let currentNode = this.root;

       

        while(currentNode) {
            //2. compare new value with teh value of the root node
            if(value > currentNode.value) {
                if(currentNode.right){ currentNode = currentNode.right;}
                else { currentNode.right = new Node(value); return this;}
            } else {
            if(currentNode.left) {currentNode = currentNode.left;}
            else {  currentNode.left = new Node(value); return this;}
            }
        }
 
    }

    print() {
        const res = [];




    }

    find(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;

        while(current && !found) {
            if(!current) return 'Not found';

            if(current.value === value){
                found = true;
                 return current.value;}

            if(value >  current.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        if(!found) return 'Not found'
    }

    bfs(){
        const res = [];

        const queue =[];

        queue.push(this.root)

        while(queue.length) {
            //Dequeue the first item in the que
          const current =   queue.shift();

          res.push(current.value)

          if(current.left) queue.push(current.left);
          if(current.right) queue.push(current.right);

        }

        return res;

    }

    dfsPreOrder(){
        const res = [];

        const helper = (node) => {
            res.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
    
            return;
        }
       

        helper(this.root)

        return res;

    }
}

let tree = new Bst()
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


// console.log(tree.find(89))

console.log(tree.bfs())
console.log(tree.dfsPreOrder())
