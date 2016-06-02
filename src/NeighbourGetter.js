export default class NeighbourGetter {
    constructor(newPopulation) {
        this.population = newPopulation;

        this.NO_NEIGHBOUR = -1;
    }


    getNeighboursFor(x, y) {
        var results = [];
        var dimension = this.population;

        if (typeof y !== 'undefined') {
            dimension = dimension[0];
        }
        if (typeof x !== 'undefined') {
            this.push(results, dimension, this.leftNeighbour(x));
            this.push(results, dimension, this.rightNeighbour(x, dimension));
        }

        return results;
    }

    leftNeighbour(x) {
        var left = x-1;
        return left >= 0
            ? left
            : this.NO_NEIGHBOUR;
    }
    rightNeighbour(x, dimension) {
        var right = x+1;
        return dimension.length > right
            ? right
            : this.NO_NEIGHBOUR;
    }
    push(results, dimension, coord) {
        if(coord !== this.NO_NEIGHBOUR) {
            results.push(dimension[coord]);
        }
    }
}