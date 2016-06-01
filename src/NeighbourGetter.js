NeighbourGetter = function(population) {
    this.getNeighboursFor = function(x, y) {
        var results = [];

        if (typeof y !== 'undefined') {
            var top    = y-1;
            var bottom = y+1;

            if(0 <= top) {
                results.push(population[top][0]);
            }
            merge(results, getNeighboursOfSingleDimension(population[0], x));
            if(population.length > bottom) {
                results.push(population[bottom][0]);
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