AliveCell = function() {
    var self = this;

    var isUnderPopulated = function(aliveNeighbours) { return aliveNeighbours < 2; };
    var isOverPopulated = function(aliveNeighbours)  { return aliveNeighbours > 3; };

    this.nextState = function(aliveNeighbours) {
        return isUnderPopulated(aliveNeighbours) || isOverPopulated(aliveNeighbours)
            ? new DeadCell()
            : self;
    };
};

DeadCell = function() {
    var self = this;

    var canBeBorn = function(aliveNeighbours) { return aliveNeighbours === 3; };

    this.nextState = function(aliveNeighbours) {
        return canBeBorn(aliveNeighbours)
            ? new AliveCell()
            : self;
    };
};