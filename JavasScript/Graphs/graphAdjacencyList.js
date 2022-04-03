class Graph {
    constructor() {
        this.adjacencyList = {};
    }


    addVertex(vertex) {
        //Add Vertex - add a key to the adjacency list with the value being an empty array
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];

    }

    //Add Edge - add an item to the adjacency list for the vertex
    //this function should accept two vertices and create an edge between them
    //the function should find in the adjacency list the key of vertex 1 and push vertex2 to the array
    //the function should find in the adjacency list the key of vertex 2 and push vertex1 to the array
    addEdge(vertex1, vertex2) { 

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        
    }

    //Remove Edge - remove an edge between two vertices
    //this function should accept two vertices and remove the edge between them
    // the function should reassign the key of vertex1 to be an array that does not contain vertex2
    removeEdge(vertex1, vertex2) { 
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    // Remove Vertex - remove a vertex from the graph
    // this function should accept a vertex and remove it from the adjacency list
    // the function should loop through the adjacency list and remove all references to the vertex
    // the function should also remove the key from the adjacency list
    removeVertex(vertex) { 
        for (let key in this.adjacencyList) {
            if (this.adjacencyList[key].includes(vertex)) {
                this.removeEdge(key, vertex);
            }
        }
        delete this.adjacencyList[vertex];

    }

}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addEdge('Dallas', 'Tokyo');

console.log(g.adjacencyList);
g.removeVertex('Dallas');
console.log(g.adjacencyList);
