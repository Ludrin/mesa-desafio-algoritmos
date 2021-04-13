const Graph = require('./graph');

const graph = new Graph();

// O grafo é representado por um nome (único) e suas arestas.
// Cada aresta tem um nome e um custo
graph.addVertex('0', { '1': 2, '4': 3 });
graph.addVertex('1', { '0': 2, '3': 8, '5': 9, '6': 6 });
graph.addVertex('2', { '5': 3, '6': 7 });
graph.addVertex('3', { '1': 8, '7': 6 });
graph.addVertex('4', { '0': 3, '6': 5, '7': 9 });
graph.addVertex('5', { '1': 9, '2': 3, '6': 4, '7': 5 });
graph.addVertex('6', { '4': 5, '5': 4, '1': 6, '2': 7 });
graph.addVertex('7', { '3': 6, '4': 9 });

const shortestPath = graph.shortestPath('0', '7').concat(['0']).reverse();

console.log('O caminho mais curto é ', shortestPath);
