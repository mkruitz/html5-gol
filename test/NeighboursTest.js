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

    describe('Two dimension', function () {
        it('returns empty list of neighbours for a single cell', function () {
            var getter = new NeighbourGetter(
                [
                    [1]
                ]
            );

            assert.deepEqual([], getter.getNeighboursFor(0, 0));
        });

        // Disabled test that was implemented to early, resulting in beeing able to refactor a broken code construction.
        xit('returns right neighbour of the top row', function () {
            var getter = new NeighbourGetter(
                [
                    [1, 2]
                ]
            );

            assert.deepEqual([2], getter.getNeighboursFor(0, 0));
            assert.deepEqual([2], getter.getNeighboursFor(0, 0));
        });

        // Having two options for moving forward
        // 1. Creating larger test which at first creates partial functionality
        // -> but could be a smaller change in production code?
        xit('returns right neighbour of the bottom row', function () {
            var getter = new NeighbourGetter(
                [
                    [1,2],
                    [3,4]
                ]
            );

            assert.deepEqual([4], getter.getNeighboursFor(0, 1));
            // assert.deepEqual([1,3,4], getter.getNeighboursFor(0, 1));
        });

        // Having two options for moving forward
        // 2. Smallest step in test
        // -> but will it be the smallest change in production code?
        it('returns top neighbour', function () {
            var getter = new NeighbourGetter(
                [
                    [1],
                    [2]
                ]
            );

            assert.deepEqual([1], getter.getNeighboursFor(0, 1));
        });

        it('returns middle neighbour', function () {
            var getter = new NeighbourGetter(
                [
                    [1],
                    [2],
                    [3]
                ]
            );

            assert.deepEqual([2], getter.getNeighboursFor(0, 2));
        });

        it('returns bottom neighbour', function () {
            var getter = new NeighbourGetter(
                [
                    [1],
                    [2]
                ]
            );

            assert.deepEqual([2], getter.getNeighboursFor(0, 0));
        });

        it('returns bottom neighbour', function () {
            var getter = new NeighbourGetter(
                [
                    [1],
                    [2],
                    [3]
                ]
            );

            assert.deepEqual([2], getter.getNeighboursFor(0, 0));
        });

        it('returns top and bottom neighbour', function () {
            var getter = new NeighbourGetter(
                [
                    [1],
                    [2],
                    [3]
                ]
            );

            assert.deepEqual([1,3], getter.getNeighboursFor(0, 1));
        });

        it('returns left and right neighbours 1x3', function () {
            var getter = new NeighbourGetter(
                [
                    [1, 2, 3]
                ]
            );

            assert.deepEqual([1,3], getter.getNeighboursFor(1, 0));
        });

        it('returns left, right and bottom-row neighbours 2x3', function () {
            var getter = new NeighbourGetter(
                [
                    [1, 2, 3],
                    [4, 5, 6]
                ]
            );

            // Step 1.
            // assert.deepEqual([1,3,5], getter.getNeighboursFor(1, 0));
            // Step 2.
            assert.deepEqual([1,3,5,4,6], getter.getNeighboursFor(1, 0));
        });

        it('returns top-row, right and bottom-row neighbours 3x2', function () {
            var getter = new NeighbourGetter(
                [
                    [1, 2],
                    [3, 4],
                    [5, 6]
                ]
            );

            //1. assert.deepEqual([1,4,5,6], getter.getNeighboursFor(0, 1));
            assert.deepEqual([2,1,4,5,6], getter.getNeighboursFor(0, 1));
        });

        it('returns top-row, left, right, bottom-row neighbours', function () {
            var getter = new NeighbourGetter(
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ]
            );

            assert.deepEqual([1,3,2,4,6,8,7,9], getter.getNeighboursFor(1, 1));
        });
    });
});