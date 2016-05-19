NeighbourGetter = function(population) {
    const NO_NEIGHBOUR = -1;
    
    this.getNeighboursFor = function(x) {
        var results = [];
        if (typeof x !== 'undefined') {
            push(results, leftNeighbour(x));
            push(results, rightNeighbour(x));
        }
        return results;
    };

    var leftNeighbour = function(x) {
        var left = x-1;
        return left >= 0
            ? left
            : NO_NEIGHBOUR;
    };
    var rightNeighbour = function(x) {
        var right = x+1;
        return population.length > right
            ? right
            : NO_NEIGHBOUR;
    };
    var push = function(results, coord) {
        if(coord != NO_NEIGHBOUR) {
            results.push(population[coord]);
        }
    };
};