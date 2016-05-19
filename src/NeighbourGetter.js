NeighbourGetter = function(population) {
    this.getNeighboursFor = function(x) {
        var results = [];
        if (typeof x !== 'undefined') {
            if(x > 0) {
                results.push(population[x-1]);
            }
            if(population.length > x+1) {
                results.push(population[x+1]);
            }
        }
        return results;
    }
};