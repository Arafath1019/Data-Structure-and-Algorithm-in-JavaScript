// Graph implementation

class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2){
        this.adjacentList[nodde1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}