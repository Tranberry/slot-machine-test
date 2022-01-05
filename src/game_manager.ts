// setup a state machine for the game
// setup, waiting, spin, score, reset

// import { SlotReel } from "./slot_reel";


enum GameState {
  Setup,
  Waiting,
  Spin,
  Score,
  Reset
}

class GameManager {
  private static instance: GameManager;
  private gameState: GameState;
  private playerMoney: number;
  private winnings: number;
  private jackpot: number;
  private turn: number;
  private playerBet: number;
  private winNumber: number;
  private lossNumber: number;

  private constructor() {
    this.gameState = GameState.Setup;
    this.playerMoney = 1000;
    this.winnings = 0;
    this.jackpot = 5000;
    this.turn = 0;
    this.playerBet = 0;
    this.winNumber = 0;
    this.lossNumber = 0;
  }

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public getGameState(): GameState {
    return this.gameState;
  }

  public setGameState(gameState: GameState): void {
    this.gameState = gameState;
  }

  public getPlayerMoney(): number {
    return this.playerMoney;
  }

  public setPlayerMoney(playerMoney: number): void {
    this.playerMoney = playerMoney;
  }

  public getWinnings(): number {
    return this.winnings;
  }

  public setWinnings(winnings: number): void {
    this.winnings = winnings;
  }

  public getJackpot(): number {
    return this.jackpot;
  }

  public setJackpot(jackpot: number): void {
    this.jackpot = jackpot;
  }

  public getTurn(): number {
    return this.turn;
  }

  public setTurn(turn: number): void {
    this.turn = turn;
  }

  public getPlayerBet(): number {
    return this.playerBet;
  }

  public setPlayerBet(playerBet: number): void {
    this.playerBet = playerBet;
  }

  public getWinNumber(): number {
    return this.winNumber;
  }

  public setWinNumber(winNumber: number): void {
    this.winNumber = winNumber;
  }

  public getLossNumber(): number {
    return this.lossNumber;
  }

  public setLossNumber(lossNumber: number): void {
    this.lossNumber = lossNumber;
  }

  public reset(): void {
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
} else if (gameManager.getGameState() === GameState.Waiting) {
  console.log("Waiting");
}

gameManager.setGameState(GameState.Waiting);
console.log(gameManager);
