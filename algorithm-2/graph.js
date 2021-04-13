const PriorityQueue = require('./priority-queue');

/**
 * Classe que implementa um grafo.
 * O grafo utiliza do algoritmo de Djikstra para calcular o menor caminho.
 */
class Graph {
    constructor() {
        this.vertices = {};
        this.INFINITY = 1 / 0;
    }

    addVertex = function (name, edges) {
        this.vertices[name] = edges;
    };

    shortestPath = function (start, finish) {
        let nodes = new PriorityQueue(),
            distances = {},
            previous = {},
            path = [],
            smallest, vertex, neighbor, alt;

        for (vertex in this.vertices) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(0, vertex);
            }
            else {
                distances[vertex] = this.INFINITY;
                nodes.enqueue(this.INFINITY, vertex);
            }

            previous[vertex] = null;
        }

        while (!nodes.isEmpty()) {
            smallest = nodes.dequeue();

            if (smallest === finish) {
                path = [];

                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }

                break;
            }

            if (!smallest || distances[smallest] === this.INFINITY) {
                continue;
            }

            for (neighbor in this.vertices[smallest]) {
                alt = distances[smallest] + this.vertices[smallest][neighbor];

                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;

                    nodes.enqueue(alt, neighbor);
                }
            }
        }

        return path;
    };
}

module.exports = Graph;
