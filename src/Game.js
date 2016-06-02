import { AliveCell } from './Cell.js';

export default class Game {
    countAliveNeighbours(neighbours) {
        var liveCells = 0;
        for (var i = 0; i < neighbours.length; i++) {
            if(neighbours[i] instanceof AliveCell)
                liveCells++;
        }
        return liveCells;
    }

    nextState(self, neighbours) {
        var liveCells = this.countAliveNeighbours(neighbours);

        return self.nextState(liveCells);
    }
}