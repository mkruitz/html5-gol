var assert = require('chai').assert;
require('../src/NeighbourGetter.js');

describe('Board to neighbour list', function() {
    describe('No dimension', function () {
        var getter = new NeighbourGetter();
        it('returns empty list of neighbours, for no coordinates', function () {
            assert.deepEqual([], getter.getNeighboursFor());
        });

        // The code contract is that this function is called with the same number of
        // coordinates as dimension in the population.
        // This is covered by the tests on the call code.
        // it('returns empty list of neighbours, for any coordinates', function () {
        //     assert.deepEqual([], getter.getNeighboursFor(1));
        // });
    });

    describe('Single dimension', function () {
        // The code contract is that this function is called with the same number of
        // coordinates as dimension in the population.
        // This is covered by the tests on the call code.
        // it('returns empty list of neighbours', function () {
        //     var getter = new NeighbourGetter([]);
        //
        //     assert.deepEqual([], getter.getNeighboursFor(0));
        // });

        it('returns empty list of neighbours for a single cell ', function () {
            var getter = new NeighbourGetter([1]);

            assert.deepEqual([], getter.getNeighboursFor(0));
        });

        it('returns right neighbour', function () {
            var getter = new NeighbourGetter([1,2]);

            assert.deepEqual([2], getter.getNeighboursFor(0));
        });

        it('returns right neighbour', function () {
            var getter = new NeighbourGetter([1,2,3]);

            assert.deepEqual([2], getter.getNeighboursFor(0));
        });
        
        it('returns left neighbour', function () {
            var getter = new NeighbourGetter([1,2]);

            assert.deepEqual([1], getter.getNeighboursFor(1));
        });

        it('returns left neighbour', function () {
            var getter = new NeighbourGetter([1,2, 3]);

            assert.deepEqual([2], getter.getNeighboursFor(2));
        });

        it('returns left and right neighbour', function () {
            var getter = new NeighbourGetter([1,2,3]);

            assert.deepEqual([1,3], getter.getNeighboursFor(1));
        });
    });
});