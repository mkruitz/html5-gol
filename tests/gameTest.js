var assert = require('chai').assert;
require('../src/Cell.js');
require('../src/Game.js');

describe('GameOfLife', function() {
    var game = new Game();
    const aliveCell = new AliveCell();
    const deadCell = new DeadCell();

    function assertCellIsDead(newCell) {
        assert.instanceOf(newCell, DeadCell);
    }

    function assertCellIsAlive(newCell) {
        assert.instanceOf(newCell, AliveCell);
    }

    describe('Alive cell', function() {
        it('has no neighbours dies', function () {
            var newCell = game.nextState(aliveCell, []);

            assertCellIsDead(newCell)
        });

        it('has one alive and one dead neighbours it dies', function () {
            var newCell = game.nextState(aliveCell, [aliveCell, deadCell]);

            assertCellIsDead(newCell);
        });

        it('has two alive neighbours stays alive', function () {
            var newCell = game.nextState(aliveCell, [aliveCell, aliveCell]);

            assertCellIsAlive(newCell);
        });

        it('has three alive neighbours stays alive', function () {
            var newCell = game.nextState(aliveCell, [aliveCell, aliveCell, aliveCell]);

            assertCellIsAlive(newCell);
        });

        it('has four alive neighbours it dies', function () {
            var newCell = game.nextState(aliveCell, [aliveCell, aliveCell, aliveCell, aliveCell]);

            assertCellIsDead(newCell);
        });
    });

    describe('Dead cell', function() {
        it('has no neighbours stays dead', function () {
            var newCell = game.nextState(deadCell, []);

            assertCellIsDead(newCell);
        });

        it('has two alive neighbours stays dead', function () {
            var newCell = game.nextState(deadCell, [aliveCell, aliveCell]);

            assertCellIsDead(newCell);
        });

        it('has four alive neighbours stays dead', function () {
            var newCell = game.nextState(deadCell, [aliveCell, aliveCell, aliveCell, aliveCell]);

            assertCellIsDead(newCell);
        });

        it('has three alive neighbours gets born', function () {
            var newCell = game.nextState(deadCell, [aliveCell, aliveCell, aliveCell]);

            assertCellIsAlive(newCell);
        });
    });
});