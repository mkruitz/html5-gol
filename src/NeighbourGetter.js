NeighbourGetter = function(population) {
    this.getNeighboursFor = function(x, y) {
        var results = [];
        var dimension = population;
        if (typeof y !== 'undefined') {
            dimension = dimension[0];
        }
        if (typeof x !== 'undefined') {
            if(x > 0) {
                results.push(dimension[x-1]);
            }
            if(dimension.length > x+1) {
                results.push(dimension[x+1]);
            }
        }
        return results;
    }
};