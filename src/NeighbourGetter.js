export default class NeighbourGetter {
    constructor(newPopulation) {
        this.population = newPopulation;
    }


    getNeighboursFor(x, y) {
        var results = [];

        if (typeof y !== 'undefined') {
            var top    = y-1;
            var bottom = y+1;

            if(0 <= top) {
                this.merge(results, this.getNeighboursOfSingleDimension(this.population[top], x));
                results.push(this.population[top][x]);
            }
            this.merge(results, this.getNeighboursOfSingleDimension(this.population[y], x));
            if(this.population.length > bottom) {
                results.push(this.population[bottom][x]);
                this.merge(results, this.getNeighboursOfSingleDimension(this.population[bottom], x));
            }
            return results;
        }
        if (typeof x !== 'undefined') {
            return this.getNeighboursOfSingleDimension(this.population, x);
        }
        return results;
    }

    getNeighboursOfSingleDimension(population, x) {
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
    }

    merge(array1, array2) {
        Array.prototype.push.apply(array1, array2);
    }
}
