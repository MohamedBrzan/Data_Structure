//* Graph

//* Operations

//? => addVertex();
//? => addEdge();
//? => removeVertex();
//? => removeEdge();
//? => display();

class Graph {
  constructor() {
    this.graph = [];
  }

  addVertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.graph[vertex1]) {
      this.graph[vertex1] = new Set();
    }
    if (!this.graph[vertex2]) {
      this.graph[vertex2] = new Set();
    }
    if (!this.graph[vertex1].has(vertex2)) {
      this.graph[vertex1].add(vertex2);
    }
    if (!this.graph[vertex2].has(vertex1)) {
      this.graph[vertex2].add(vertex1);
    }
  }

  removeEdge(vertex) {
    for (let vertexes of this.graph[vertex]) {
      this.graph[vertexes].delete(vertex);
    }
    this.graph[vertex].clear();
  }

  removeVertex(vertex) {
    for (let vertexes of this.graph[vertex]) {
      this.graph[vertexes].delete(vertex);
    }
    delete this.graph[vertex];
  }

  display() {
    for (let vertexes in this.graph) {
      console.log(vertexes, ' => ', this.graph[vertexes]);
    }
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'A');
graph.addEdge('B', 'C');
graph.addEdge('C', 'B');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');
graph.addEdge('D', 'C');

// graph.removeEdges('A');

graph.display();

// graph.removeVertex('A');

console.log('------------------------');

graph.removeEdge('A');

graph.display();
