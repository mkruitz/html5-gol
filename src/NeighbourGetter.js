NeighbourGetter = function(population) {
    this.getNeighboursFor = function(x, y) {
        var results = [];

        if (typeof y !== 'undefined') {
            var top    = y-1;
            var bottom = y+1;

            if(0 <= top) {
                merge(results, getNeighboursOfSingleDimension(population[top], x));
                results.push(population[top][x]);
            }
            merge(results, getNeighboursOfSingleDimension(population[y], x));
            if(population.length > bottom) {
                results.push(population[bottom][x]);
                merge(results, getNeighboursOfSingleDimension(population[bottom], x));
            }
            return results;
        }
        if (typeof x !== 'undefined') {
            return getNeighboursOfSingleDimension(population, x);
        }
        return results;
    };

    var getNeighboursOfSingleDimension = function(population, x) {
        var results = [];

        var left = x-1;
        var right = x+1;

        if(0 <= left) {
            results.push(population[left]);
        }
        if(population.length > right) {
            results.push(population[right]);
        }
        return results;
    };

    var merge = function(array1, array2) {
        Array.prototype.push.apply(array1, array2);
    }
};