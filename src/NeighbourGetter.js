NeighbourGetter = function(population) {
    this.getNeighboursFor = function(x, y) {
        var results = [];
        var dimension = population;

        if (typeof y !== 'undefined') {
            dimension = dimension[0];

            var top = y-1;

            if(0 <= top) {
                results.push(population[top][0]);
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