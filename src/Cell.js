export class AliveCell {
    nextState(aliveNeighbours) {
        var isUnderPopulated = function(aliveNeighbours) { return aliveNeighbours < 2; };
        var isOverPopulated = function(aliveNeighbours)  { return aliveNeighbours > 3; };

        return isUnderPopulated(aliveNeighbours) || isOverPopulated(aliveNeighbours)
            ? new DeadCell()
            : this;
    }
}

export class DeadCell {
    nextState(aliveNeighbours) {
        var canBeBorn = function(aliveNeighbours) { return aliveNeighbours === 3; };

        return canBeBorn(aliveNeighbours)
            ? new AliveCell()
            : this;
    }
}