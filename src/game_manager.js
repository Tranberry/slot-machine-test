"use strict";
// setup a state machine for the game
// setup, waiting, spin, score, reset
// import { SlotReel } from "./slot_reel";
var GameState;
(function (GameState) {
    GameState[GameState["Setup"] = 0] = "Setup";
    GameState[GameState["Waiting"] = 1] = "Waiting";
    GameState[GameState["Spin"] = 2] = "Spin";
    GameState[GameState["Score"] = 3] = "Score";
    GameState[GameState["Reset"] = 4] = "Reset";
})(GameState || (GameState = {}));
class GameManager {
    constructor() {
        this.gameState = GameState.Setup;
        this.playerMoney = 1000;
        this.winnings = 0;
        this.jackpot = 5000;
        this.turn = 0;
        this.playerBet = 0;
        this.winNumber = 0;
        this.lossNumber = 0;
    }
    static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    getGameState() {
        return this.gameState;
    }
    setGameState(gameState) {
        this.gameState = gameState;
    }
    getPlayerMoney() {
        return this.playerMoney;
    }
    setPlayerMoney(playerMoney) {
        this.playerMoney = playerMoney;
    }
    getWinnings() {
        return this.winnings;
    }
    setWinnings(winnings) {
        this.winnings = winnings;
    }
    getJackpot() {
        return this.jackpot;
    }
    setJackpot(jackpot) {
        this.jackpot = jackpot;
    }
    getTurn() {
        return this.turn;
    }
    setTurn(turn) {
        this.turn = turn;
    }
    getPlayerBet() {
        return this.playerBet;
    }
    setPlayerBet(playerBet) {
        this.playerBet = playerBet;
    }
    getWinNumber() {
        return this.winNumber;
    }
    setWinNumber(winNumber) {
        this.winNumber = winNumber;
    }
    getLossNumber() {
        return this.lossNumber;
    }
    setLossNumber(lossNumber) {
        this.lossNumber = lossNumber;
    }
    reset() {
        this.playerMoney = 1000;
        this.winnings = 0;
        this.jackpot = 5000;
        this.turn = 0;
        this.playerBet = 0;
        this.winNumber = 0;
        this.lossNumber = 0;
    }
}
const gameManager = GameManager.getInstance();
console.log(gameManager);
if (gameManager.getGameState() === GameState.Setup) {
    console.log("Setup");
}
else if (gameManager.getGameState() === GameState.Waiting) {
    console.log("Waiting");
}
gameManager.setGameState(GameState.Waiting);
console.log(gameManager);
