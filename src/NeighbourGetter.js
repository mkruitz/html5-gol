NeighbourGetter = function(population) {
    const NO_NEIGHBOUR = -1;

    this.getNeighboursFor = function(x, y) {
        var results = [];
        var dimension = population;

        if (typeof y !== 'undefined') {
            dimension = dimension[0];
        }
        if (typeof x !== 'undefined') {
            push(results, dimension, leftNeighbour(x));
            push(results, dimension, rightNeighbour(x, dimension));
        }

        return results;
    };

    var leftNeighbour = function(x) {
        var left = x-1;
        return left >= 0
            ? left
            : NO_NEIGHBOUR;
    };
    var rightNeighbour = function(x, dimension) {
        var right = x+1;
        return dimension.length > right
            ? right
            : NO_NEIGHBOUR;
    };
    var push = function(results, dimension, coord) {
        if(coord !== NO_NEIGHBOUR) {
            results.push(dimension[coord]);
        }
    };
};