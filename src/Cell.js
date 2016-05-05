AliveCell = function() {
    var self = this;

    var isUnderPopulated = function(aliveNeighbours) { return aliveNeighbours < 2; };
    var isOverPopulated = function(aliveNeighbours)  { return aliveNeighbours > 3; };

    this.nextState = function(aliveNeighbours) {
        if(isUnderPopulated(aliveNeighbours) || isOverPopulated(aliveNeighbours))
            return new DeadCell();
        return self;
    };
};

DeadCell = function() {
    var self = this;

    var canBeBorn = function(aliveNeighbours) { return aliveNeighbours === 3; };

    this.nextState = function(aliveNeighbours) {
        if(canBeBorn(aliveNeighbours))
            return new AliveCell();
        return self;
    };
};