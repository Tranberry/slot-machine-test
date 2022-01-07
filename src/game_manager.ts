export * as GM from "./game_manager.js";
import { buildSlotMachine } from "./add_element.js";
import { reelManager } from "./reel_manager.js";

// setup a game manager state machine

export enum GameState {
  INIT,
  BUILD_SLOT_MACHINE,
  MAKE_REEL,

  READY,
  SPIN,
  SPIN_COMPLETE,

  SCORE,
  SCORE_COMPLETE,
}

// export class GameData {
//   state: GameState;
//   machineSelector: string;
//   reelAmount: number;
//   constructor(state: GameState, machineSelector: string, reelAmount = 3) {
//     this.state = state;
//     this.machineSelector = machineSelector;
//     this.reelAmount = reelAmount;
//   }
// }

// set game state and log it
function setState(state: GameState) {
  console.log(`Game State: ${state}`);
  return GAMEMANAGER.state = state;
}




export const GAMEMANAGER = {
  state: GameState.INIT,

  logState: function () {
    console.log(`Game State: ${this.state}`);
  },

  buildSlotMachine: (amountReels?: number, selector?: string): void => {
    if (amountReels) {
      setState(GameState.BUILD_SLOT_MACHINE);
      buildSlotMachine(amountReels, selector);
      setState(GameState.READY);
    }
  },

  createReel: (reelID: number): void => {
    setState(GameState.MAKE_REEL);
    reelManager.createReel(reelID);
    setState(GameState.READY);
  },
};
