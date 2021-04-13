/**
 * Classe que implementa uma fila de prioridade.
 * Cada elemento possui chave e prioridade.
 * A chave dos elementos devem ser únicos.
 */
class PriorityQueue {
    constructor() {
        this._nodes = [];
    }

    enqueue = function (priority, key) {
        this._nodes.push({ key: key, priority: priority });
        this.sort();
    };

    dequeue = function () {
        return this._nodes.shift().key;
    };

    sort = function () {
        this._nodes.sort(function (a, b) {
            return a.priority - b.priority;
        });
    };

    isEmpty = function () {
        return !this._nodes.length;
    };
}

module.exports = PriorityQueue;
