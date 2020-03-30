const Game = require('../../src/game.js')

function printGrid(game){
    for (line of game.grid){
        console.log(line)
    }
}  

// describe("Cria um jogo em que X vence e não enche o grid", ()=>{
//     let game = new Game()
//     test("Coloca X em (1,1)", () => {game.putSymbol(1,1); expect(game.grid[1][1]).toBe('X'); game.nextTurn()})    
//     test("Coloca O em (0,2)", () => {game.putSymbol(0,2); expect(game.grid[0][2]).toBe('O'); game.nextTurn()})
//     test("Coloca X em (1,2)", () => {game.putSymbol(1,2); expect(game.grid[1][2]).toBe('X'); game.nextTurn()})
//     test("Coloca O em (1,0)", () => {game.putSymbol(1,0); expect(game.grid[1][0]).toBe('O'); game.nextTurn()})
//     test("Coloca X em (0,0)", () => {game.putSymbol(0,0); expect(game.grid[0][0]).toBe('X'); game.nextTurn()})
//     test("Coloca O em (2,0)", () => {game.putSymbol(2,0); expect(game.grid[2][0]).toBe('O'); game.nextTurn()})
//     test("Coloca X em (2,2)", () => {game.putSymbol(2,2); expect(game.grid[2][2]).toBe('X'); game.nextTurn()})
//     test("Testa o score do 'X'", () => expect(game.playersScore.X).toBe(1))    
//     test("Testa se o tabuleiro está limpo", () => expect(game.isEmpty()).toBe(true))
//     test("Testa se a rodada incrementou", () => expect(game.round).toBe(2))
// })

describe("Cria um jogo em que empatou", ()=>{
    let game = new Game()
    test("Coloca X em (1,1)", () => {game.putSymbol(1,1); expect(game.grid[1][1]).toBe('X'); game.nextTurn()})    
    test("Coloca O em (0,2)", () => {game.putSymbol(0,2); expect(game.grid[0][2]).toBe('O'); game.nextTurn()})
    test("Coloca X em (1,2)", () => {game.putSymbol(1,2); expect(game.grid[1][2]).toBe('X'); game.nextTurn()})
    test("Coloca O em (1,0)", () => {game.putSymbol(1,0); expect(game.grid[1][0]).toBe('O'); game.nextTurn()})
    test("Coloca X em (0,0)", () => {game.putSymbol(0,0); expect(game.grid[0][0]).toBe('X'); game.nextTurn()})
    test("Coloca O em (2,2)", () => {game.putSymbol(2,2); expect(game.grid[2][2]).toBe('O'); game.nextTurn()})
    test("Coloca X em (0,1)", () => {game.putSymbol(0,1); expect(game.grid[0][1]).toBe('X'); game.nextTurn()})
    test("Coloca O em (2,1)", () => {game.putSymbol(2,1); expect(game.grid[2][1]).toBe('O'); game.nextTurn()})
    test("Coloca X em (2,0)", () => {
        game.putSymbol(2,0)
        expect(game.grid[2][0]).toBe('X')
        game.nextTurn()
    })
    
    test("Testa o score do 'X'", () => expect(game.playersScore.X).toBe(0))    
    test("Testa o score do 'O'", () => expect(game.playersScore.O).toBe(0))
    test("Testa se o tabuleiro está limpo", () => {
        expect(game.isEmpty()).toBe(true)
    })
    test("Testa se a rodada incrementou", () => expect(game.round).toBe(2))
})