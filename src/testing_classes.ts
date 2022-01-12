// import { buildSlotMachine } from "./add_element.js";
// import { spinTheReels } from "./spin_reel.js";

class Manager {
  state: string;
  states: string[];
  constructor(states: string[], state: string = states[0]) {
    this.states = states;
    this.state = state;
  }
  public logState(): void {
    return console.log(`Game State: ${this.state}`);
  }
  public setState(state: string): string {
    console.log(`Changing state from ${this.state} to ${state}`);
    return (this.state = state);
  }
  public listStates(): string[] {
    return this.states;
  }
  public getStateIndex(): number {
    return this.states.indexOf(this.state);
  }
  public BuildSlotMachine(reels: number): void {
    this.state = this.states[1];
    return reels
      ? console.log(`Building ${reels} reels`)
      : console.log("Building 1 reel"); 
  }
  public SpinReels(): void {
    this.state = this.states[4];
    return console.log("Spinning the reels");
  }
}

const GameStates = [
  "INIT",
  "BUILD_SLOT_MACHINE",
  "MAKE_REEL",
  "READY",
  "SPIN",
  "SPIN_COMPLETE",
  "SCORE",
  "SCORE_COMPLETE",
];

export const GameMNG = new Manager(GameStates);
