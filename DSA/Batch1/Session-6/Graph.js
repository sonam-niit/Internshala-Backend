class Graph{
    constructor(noOfVertices){
        this.noOfVertices=noOfVertices;
        this.adjList= new Map();
    }

    addvertex(v){
        this.adjList.set(v,[]);
    }
    addEdge(v,w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }
    printGraph(){
        //get all vertices
        var getKeys= this.adjList.keys();
        for(let i of getKeys){
            let values= this.adjList.get(i);
            var conc="";
            for(let j of values){
                conc+=j+" ";
            }
            console.log(i+" ---> "+conc);
        }
    }
}
var g= new Graph();
var vertices=["A","B","C","D"];
for(let i=0;i<vertices.length;i++){
    g.addvertex(vertices[i]);
}
//Adding Edges
g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('A','D');
g.addEdge('B','C');
g.addEdge('D','B');
g.addEdge('D','C');

g.printGraph();