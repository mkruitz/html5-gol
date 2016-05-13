require('./Cell.js');

Game = function() {
    var countAliveNeighbours = function(neighbours) {
        var liveCells = 0;
        for (var i = 0; i < neighbours.length; i++) {
            if(neighbours[i] instanceof AliveCell)
                liveCells++;
        }
        return liveCells;
    };

    this.nextState = function(self, neighbours) {
        var liveCells = countAliveNeighbours(neighbours);

        return self.nextState(liveCells);
    };
};