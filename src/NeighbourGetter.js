NeighbourGetter = function(population) {
    this.getNeighboursFor = function(x, y) {
        var results = [];
        var dimension = population;

        if (typeof y !== 'undefined') {
            dimension = dimension[0];

            if(y === 1) {
                results.push(population[0][0]);
            }
        }
        if (typeof x !== 'undefined') {
            var left = x-1;
            var right = x+1;

            if(0 <= left) {
                results.push(dimension[left]);
            }
            if(dimension.length > right) {
                results.push(dimension[right]);
            }
        }
        return results;
    }
};