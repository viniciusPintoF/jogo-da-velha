class Game{
    constructor(){

        this.currentPlayer = 'X'
        this.playersScore = {O: 0, X: 0}
        this.round = 1; 

        this.grid = 
        [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
        const g = this.grid;        
        this.winStates = [
            () => g[0][0] == g[0][1] && g[0][1] == g[0][2] && g[0][0] != null,
            () => g[1][0] == g[1][1] && g[1][1] == g[1][2] && g[1][0] != null,
            () => g[2][0] == g[2][1] && g[2][1] == g[2][2] && g[2][0] != null,
            () => g[0][0] == g[1][0] && g[1][0] == g[2][0] && g[0][0] != null,
            () => g[0][1] == g[1][1] && g[1][1] == g[2][1] && g[0][1] != null,
            () => g[0][2] == g[1][2] && g[1][2] == g[2][2] && g[0][2] != null,
            () => g[0][0] == g[1][1] && g[1][1] == g[2][2] && g[0][0] != null,
            () => g[0][2] == g[1][1] && g[1][1] == g[2][0] && g[0][2] != null,
        ]        
    }

    putSymbol(lin, col){
        this.grid[lin][col] = this.currentPlayer
    }

    checkWinner(){
        const hasWinner = this.winStates.reduce((acc, stateChecker) => (acc || stateChecker()), false)
       
        if(hasWinner){            
            return this.currentPlayer
        } 
        else if (this.isFull()){            
            return 'draw'
        }
        return 'none';
    }

    nextTurn(){
        let result = this.checkWinner()
        if(result == 'none'){
            this.currentPlayer = this.currentPlayer == 'X'? 'O' : 'X'
        }
        else{
            if(result != 'draw') this.playersScore[result]++;
            this.nextRound()
        }       
    }    

    isFull(){

        const cellReducer = (acc, cell) => acc && cell != null
        const lineReducer = (acc, line) => line.reduce(cellReducer, true)        
        
        return this.grid.reduce(lineReducer, true)
    }

    isEmpty(){

        const cellReducer = (acc, cell) => acc && cell == null
        const lineReducer = (acc, line) => line.reduce(cellReducer, true)
        
        return this.grid.reduce(lineReducer, true)
    }

    nextRound(){        
        this.grid = this.grid.map((line) => line.fill(null))
        console.log(this.grid)
        this.currentPlayer = this.round % 2 == 0 ? 'X' : 'O'        
        this.round++
    }
}

module.exports = Game;


